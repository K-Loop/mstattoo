import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUploadCloud,
  FiX,
  FiTrash2,
  FiImage,
  FiCheckCircle,
  FiAlertCircle,
  FiArrowLeft,
  FiGrid,
  FiEye,
} from 'react-icons/fi';

/* ─── Gallery categories mirrored from galleryData.js ─── */
const UPLOAD_CATEGORIES = [
  { id: 'tattoos',         label: 'Tattoos',                  medium: 'Tattoo Art',                 folder: 'tattoos' },
  { id: 'graphite-pencil', label: 'Pencil & Graphite',        medium: 'Graphite on Paper',           folder: 'artworks' },
  { id: 'acrylic-wall',   label: 'Paintings & Murals',        medium: 'Acrylic on Canvas / Wall',    folder: 'artworks' },
  { id: 'crystal-stone',  label: 'Crystal Stone Art',         medium: 'Crystal Stone / Resin',       folder: 'artworks' },
  { id: 'glitter-art',    label: 'Glitter Surprise Art',      medium: 'Glitter on Board / Canvas',   folder: 'artworks' },
  { id: 'specialty-art',  label: 'Specialty & Craft',         medium: 'Mixed Media / Specialty',     folder: 'artworks' },
  { id: 'videos',         label: 'Video Reels',               medium: 'Studio Video',                folder: 'videos' },
];

const STORAGE_KEY = 'ms_admin_uploads';

/* ─── Helpers ─── */
function loadUploads() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveUploads(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function generateId(categoryId) {
  return `admin-${categoryId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function AdminDashboard({ onClose }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(UPLOAD_CATEGORIES[0].id);
  const [uploads, setUploads] = useState(loadUploads);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg }
  const [preview, setPreview] = useState(null); // item to preview fullscreen
  const [deleteId, setDeleteId] = useState(null);
  const fileInputRef = useRef();

  /* ─── Toast helper ─── */
  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3000);
  };

  /* ─── Persist whenever uploads change ─── */
  useEffect(() => {
    saveUploads(uploads);
    // Also push to window so GalleryPage can pick it up live (hot inject)
    window.__adminUploads = uploads;
  }, [uploads]);

  /* ─── Active category info ─── */
  const catInfo = UPLOAD_CATEGORIES.find((c) => c.id === activeCategory);
  const categoryUploads = uploads.filter((u) => u.category === activeCategory);
  const totalUploads = uploads.length;

  /* ─── File processing ─── */
  const processFiles = useCallback(
    async (files) => {
      const validFiles = Array.from(files).filter((f) =>
        f.type.startsWith('image/') || f.type.startsWith('video/')
      );
      if (!validFiles.length) {
        showToast('error', 'Please select image or video files only.');
        return;
      }
      setUploading(true);
      try {
        const newItems = await Promise.all(
          validFiles.map(async (file) => {
            const dataUrl = await readFileAsDataURL(file);
            const isVideo = file.type.startsWith('video/');
            return {
              id: generateId(activeCategory),
              src: dataUrl,
              type: isVideo ? 'video' : 'image',
              category: activeCategory,
              categoryName: catInfo.label,
              title: file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
              medium: catInfo.medium,
              dimensions: 'Custom Studio Size',
              year: new Date().getFullYear().toString(),
              fee: 'Price on Request',
              description: `${catInfo.label} by MS Tattoo & Art Studio.`,
              uploadedAt: new Date().toISOString(),
              fileName: file.name,
              fileSize: file.size,
            };
          })
        );
        setUploads((prev) => [...prev, ...newItems]);
        showToast('success', `${newItems.length} file${newItems.length > 1 ? 's' : ''} uploaded to ${catInfo.label}!`);
      } catch {
        showToast('error', 'Upload failed. Please try again.');
      } finally {
        setUploading(false);
      }
    },
    [activeCategory, catInfo]
  );

  /* ─── Drag & drop ─── */
  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      processFiles(e.dataTransfer.files);
    },
    [processFiles]
  );

  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  /* ─── Delete ─── */
  const handleDelete = (id) => {
    setUploads((prev) => prev.filter((u) => u.id !== id));
    setDeleteId(null);
    showToast('success', 'Image removed.');
  };

  /* ─── Title edit inline ─── */
  const handleTitleEdit = (id, newTitle) => {
    setUploads((prev) =>
      prev.map((u) => (u.id === id ? { ...u, title: newTitle } : u))
    );
  };

  const handleFeeEdit = (id, newFee) => {
    setUploads((prev) =>
      prev.map((u) => (u.id === id ? { ...u, fee: newFee } : u))
    );
  };

  /* ─── Format file size ─── */
  const fmtSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#E5E3DC] flex flex-col">

      {/* ── TOP HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-[#22222a] px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose || (() => navigate('/'))}
            className="flex items-center gap-2 text-[#888780] hover:text-[#c5a880] transition-colors text-sm font-mono-tech tracking-widest uppercase cursor-pointer"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Studio
          </button>
          <span className="text-[#22222a] hidden sm:inline">|</span>
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] uppercase font-mono-tech tracking-[0.25em] text-[#c5a880]">
              Admin Portal
            </span>
            <span className="font-cinzel text-sm text-[#F7F6F2]">Image Library Manager</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono-tech text-[#888780]">
            <span className="text-[#c5a880] font-semibold">{totalUploads}</span> total uploads
          </span>
          <button
            onClick={() => navigate('/gallery')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono-tech tracking-widest uppercase border border-[#2a2a32] text-[#888780] hover:border-[#c5a880]/60 hover:text-[#c5a880] transition-all cursor-pointer"
          >
            <FiEye className="w-3.5 h-3.5" />
            View Gallery
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row flex-1 min-h-0">

        {/* ── SIDEBAR: Category Picker ── */}
        <aside className="w-full lg:w-64 bg-[#0d0d10] border-b lg:border-b-0 lg:border-r border-[#22222a] p-4 lg:p-6 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible shrink-0">
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-mono-tech text-[#555550] mb-3 shrink-0">
            Categories
          </span>
          {UPLOAD_CATEGORIES.map((cat) => {
            const count = uploads.filter((u) => u.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center justify-between shrink-0 lg:w-full px-4 py-3 text-xs font-mono-tech tracking-widest uppercase border transition-all text-left cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880]'
                    : 'border-[#22222a] text-[#888780] hover:border-[#3a3a42] hover:text-[#F7F6F2]'
                }`}
              >
                <span>{cat.label}</span>
                {count > 0 && (
                  <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-[#c5a880]/20 text-[#c5a880]' : 'bg-[#22222a] text-[#555550]'}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">

          {/* Category Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono-tech text-[#c5a880] block mb-1">
                Uploading to
              </span>
              <h1 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2] font-normal">
                {catInfo.label}
              </h1>
              <p className="text-sm text-[#888780] font-mono-tech mt-1">
                {catInfo.medium} · {categoryUploads.length} image{categoryUploads.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* ── DROP ZONE ── */}
          <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={() => !uploading && fileInputRef.current?.click()}
            className={`relative w-full border-2 border-dashed rounded-none transition-all duration-300 cursor-pointer mb-10 ${
              dragging
                ? 'border-[#c5a880] bg-[#c5a880]/5'
                : 'border-[#2a2a32] bg-[#0d0d10] hover:border-[#c5a880]/50 hover:bg-[#c5a880]/3'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              onChange={(e) => processFiles(e.target.files)}
            />
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center select-none pointer-events-none">
              <div className={`w-16 h-16 border-2 flex items-center justify-center mb-5 transition-colors ${dragging ? 'border-[#c5a880] text-[#c5a880]' : 'border-[#3a3a42] text-[#555550]'}`}>
                {uploading ? (
                  <div className="w-6 h-6 border-2 border-[#c5a880] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <FiUploadCloud className="w-7 h-7" />
                )}
              </div>
              <p className="font-cinzel text-lg text-[#F7F6F2] mb-2">
                {uploading ? 'Processing...' : dragging ? 'Drop to upload' : 'Drop images here'}
              </p>
              <p className="text-sm text-[#888780] font-mono-tech">
                or <span className="text-[#c5a880] underline underline-offset-2">click to browse</span>
              </p>
              <p className="text-xs text-[#555550] font-mono-tech mt-3 uppercase tracking-widest">
                JPG · PNG · WEBP · MP4 · MOV · Multiple files supported
              </p>
              {dragging && (
                <div className="absolute inset-0 border-2 border-[#c5a880] pointer-events-none" />
              )}
            </div>
          </div>

          {/* ── UPLOADED IMAGES GRID ── */}
          {categoryUploads.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-[#888780]">
                  Uploaded · {categoryUploads.length} items
                </span>
                <button
                  onClick={() => {
                    if (window.confirm(`Delete all ${categoryUploads.length} images in "${catInfo.label}"?`)) {
                      setUploads((prev) => prev.filter((u) => u.category !== activeCategory));
                      showToast('success', `All ${catInfo.label} images removed.`);
                    }
                  }}
                  className="text-xs font-mono-tech uppercase tracking-widest text-[#555550] hover:text-red-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FiTrash2 className="w-3 h-3" />
                  Clear all
                </button>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                <AnimatePresence>
                  {categoryUploads.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/50 transition-all duration-300"
                    >
                      {/* Thumbnail */}
                      <div
                        className="relative h-52 overflow-hidden bg-[#0a0a0c] cursor-pointer"
                        onClick={() => setPreview(item)}
                      >
                        {item.type === 'video' ? (
                          <video
                            src={item.src}
                            className="w-full h-full object-cover"
                            muted
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="w-10 h-10 border border-[#c5a880]/60 flex items-center justify-center">
                            <FiEye className="text-[#c5a880] w-4 h-4" />
                          </div>
                        </div>
                        {/* Category badge */}
                        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] font-mono-tech text-[#c5a880] bg-[#09090b]/90 px-2 py-1 border border-[#c5a880]/30">
                          {item.categoryName}
                        </span>
                        {/* Delete */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setDeleteId(item.id); }}
                          className="absolute top-3 right-3 w-8 h-8 bg-[#09090b]/90 border border-[#22222a] flex items-center justify-center text-[#555550] hover:text-red-400 hover:border-red-400/40 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                        >
                          <FiTrash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Meta */}
                      <div className="p-4 space-y-2">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleTitleEdit(item.id, e.target.value)}
                          className="w-full bg-transparent font-cinzel text-sm text-[#F7F6F2] border-b border-transparent hover:border-[#2a2a32] focus:border-[#c5a880] focus:outline-none py-0.5 transition-colors"
                          title="Click to edit title"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-[#555550] font-mono-tech uppercase tracking-widest">
                            {item.fileSize ? fmtSize(item.fileSize) : '—'}
                          </span>
                          <input
                            type="text"
                            value={item.fee}
                            onChange={(e) => handleFeeEdit(item.id, e.target.value)}
                            className="text-[10px] text-[#c5a880] font-mono-tech bg-transparent border-b border-transparent hover:border-[#2a2a32] focus:border-[#c5a880] focus:outline-none text-right w-28 transition-colors"
                            title="Click to edit price"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-[#22222a]">
              <div className="w-14 h-14 border border-[#2a2a32] flex items-center justify-center mb-4">
                <FiImage className="w-6 h-6 text-[#555550]" />
              </div>
              <p className="font-cinzel text-lg text-[#888780] mb-1">No images yet</p>
              <p className="text-xs font-mono-tech text-[#555550] uppercase tracking-widest">
                Upload images above to add them to {catInfo.label}
              </p>
            </div>
          )}
        </main>
      </div>

      {/* ── DELETE CONFIRM MODAL ── */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setDeleteId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111115] border border-[#22222a] p-8 max-w-sm w-full shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <FiAlertCircle className="text-red-400 w-5 h-5 shrink-0" />
                <h3 className="font-cinzel text-lg text-[#F7F6F2]">Remove Image?</h3>
              </div>
              <p className="text-sm text-[#888780] mb-6 font-mono-tech">
                This will remove the image from the admin library. It won't affect the main gallery index.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="flex-1 py-3 text-xs uppercase tracking-widest font-mono-tech font-semibold bg-red-500/90 hover:bg-red-500 text-white transition-colors cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 py-3 text-xs uppercase tracking-widest font-mono-tech border border-[#22222a] text-[#888780] hover:text-[#F7F6F2] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FULLSCREEN PREVIEW ── */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setPreview(null)}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute top-5 right-5 w-10 h-10 border border-[#22222a] flex items-center justify-center text-[#888780] hover:text-[#F7F6F2] transition-colors cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
            >
              {preview.type === 'video' ? (
                <video src={preview.src} controls autoPlay className="max-h-[80vh] max-w-full rounded shadow-2xl" />
              ) : (
                <img src={preview.src} alt={preview.title} className="max-h-[80vh] max-w-full object-contain shadow-2xl" />
              )}
              <div className="text-center">
                <p className="font-cinzel text-lg text-[#F7F6F2]">{preview.title}</p>
                <p className="text-xs text-[#888780] font-mono-tech uppercase tracking-widest mt-1">
                  {preview.categoryName} · {preview.medium}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOAST ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 border shadow-2xl text-sm font-mono-tech ${
              toast.type === 'success'
                ? 'bg-[#111115] border-[#c5a880]/60 text-[#c5a880]'
                : 'bg-[#111115] border-red-400/60 text-red-400'
            }`}
          >
            {toast.type === 'success'
              ? <FiCheckCircle className="w-4 h-4 shrink-0" />
              : <FiAlertCircle className="w-4 h-4 shrink-0" />}
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
