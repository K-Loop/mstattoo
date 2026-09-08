import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiCopy, FiArrowRight } from 'react-icons/fi';
import Button from '../common/Button';
import BackButton from '../common/BackButton';
import { CustomInput, CustomTextarea, CustomSelect, CustomFileUpload, CustomRadio } from '../common/CustomControls';
import { storageService } from '../../services/storageService';

export default function CommissionModal({
  isOpen,
  onClose,
  initialArtwork = null,
  onOrderSuccess
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    artworkType: 'Graphite / Pencil Art',
    typeCategory: 'Single Face',
    size: 'A3',
    budget: '₹3,500',
    referenceFile: null,
    referenceFileName: '',
    description: ''
  });

  const [computedPrice, setComputedPrice] = useState(3500);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successRecord, setSuccessRecord] = useState(null);
  const [copied, setCopied] = useState(false);

  // Dynamic price calculation based on pricing matrix
  useEffect(() => {
    let price = 3500;
    if (formData.artworkType === 'Graphite / Pencil Art') {
      if (formData.typeCategory === 'Single Face') {
        if (formData.size === 'A4') price = 1800;
        else if (formData.size === 'A3') price = 3500;
      } else {
        if (formData.size === 'A3') price = 7000;
        else if (formData.size === 'A2') price = 15000;
      }
    } else if (formData.artworkType === 'Colour Pencil Art') {
      if (formData.size === 'A4') price = 3500;
      else if (formData.size === 'A3') price = 6000;
      else if (formData.size === 'A2') price = 10000;
    } else if (formData.artworkType === 'Crystal Stone Art') {
      if (formData.typeCategory === 'Single Subject' || formData.typeCategory === 'Single Face') {
        price = 6500;
      } else {
        price = 17000;
      }
    } else if (formData.artworkType === 'Glitter Surprise Art') {
      if (formData.typeCategory === 'Single' || formData.typeCategory === 'Single Face') {
        price = 10000;
      } else {
        price = 15000;
      }
    } else if (formData.artworkType === 'Custom Tattoo Consultation') {
      price = 2500;
    }

    setComputedPrice(price);
  }, [formData.artworkType, formData.typeCategory, formData.size]);

  useEffect(() => {
    if (initialArtwork) {
      if (initialArtwork.category === 'tattoos') {
        setFormData(prev => ({
          ...prev,
          artworkType: 'Custom Tattoo Consultation',
          description: `Inquiring about tattoo: "${initialArtwork.title}"`
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          artworkType: initialArtwork.categoryName || 'Graphite / Pencil Art',
          description: `Inquiring about commission inspired by "${initialArtwork.title}" (${initialArtwork.medium || ''})`
        }));
      }
    }
    setErrors({});
    setSuccessRecord(null);
  }, [initialArtwork, isOpen]);

  if (!isOpen) return null;

  const artworkTypeOptions = [
    { value: 'Graphite / Pencil Art', label: 'Pencil & Graphite Art' },
    { value: 'Crystal Stone Art', label: 'Crystal Stone Art' },
    { value: 'Glitter Surprise Art', label: 'Glitter Surprise Art' },
    { value: 'Contemporary Canvas / Wall Mural', label: 'Paintings & Murals' },
    { value: 'Wood Burning & Resin Art', label: 'Wood Burning & Resin Art' },
    { value: 'Custom Tattoo Consultation', label: 'Custom Tattoo Consultation' }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const newOrder = await storageService.addOrder({
        customerName: formData.name,
        phone: formData.phone,
        email: formData.email,
        artworkType: formData.artworkType,
        typeCategory: formData.typeCategory,
        size: formData.size,
        price: computedPrice,
        formattedPrice: `₹${computedPrice?.toLocaleString()}`,
        referenceFileName: formData.referenceFileName,
        description: formData.description
      });

      setSuccessRecord(newOrder);
      if (onOrderSuccess) onOrderSuccess(newOrder);
    } catch (err) {
      console.error(err);
      setErrors({ form: 'An error occurred while submitting your inquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (successRecord?.id) {
      navigator.clipboard.writeText(successRecord.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-[#F7F6F2] border border-[#D8D6D0] shadow-2xl flex flex-col overflow-hidden text-left"
        >
          {/* STICKY MODAL HEADER: BackButton STRICTLY ON THE LEFT */}
          <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-[#D8D6D0] bg-[#F7F6F2] shrink-0 z-20">
            <BackButton
              onClick={onClose}
              label="Back"
            />
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block">
                Bespoke Order
              </span>
              <span className="font-cinzel text-xs text-[#111111] font-semibold">
                Estimated: ₹{computedPrice?.toLocaleString()}
              </span>
            </div>
          </div>

          {/* SCROLLABLE FORM BODY (Guaranteed in-bounds on any screen) */}
          <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 flex-1 overscroll-contain">
            {!successRecord ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-cinzel text-2xl text-[#111111] tracking-wide mb-1">
                    COMMISSION A MASTERPIECE
                  </h3>
                <p className="text-xs text-[#71717a] font-light leading-relaxed">
                  Provide your desired subject details or reference photographs. Each commission is crafted with museum-grade archival materials.
                </p>
              </div>

              {errors.form && (
                <div className="p-3 bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-xs">
                  {errors.form}
                </div>
              )}

              {/* Artwork Medium Selector */}
              <CustomSelect
                label="Artwork Discipline / Service"
                options={artworkTypeOptions}
                value={formData.artworkType}
                onChange={(val) => setFormData({ ...formData, artworkType: val })}
                required
              />

              {/* Dynamic Sub-options based on Discipline */}
              {formData.artworkType === 'Graphite / Pencil Art' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#EFEDE7] border border-[#D8D6D0]">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#262626] block mb-2">
                      Subject Count
                    </span>
                    <div className="flex gap-4">
                      <CustomRadio
                        id="single-face"
                        name="typeCategory"
                        value="Single Face"
                        checked={formData.typeCategory === 'Single Face'}
                        onChange={(v) => setFormData({ ...formData, typeCategory: v })}
                        label="Single Face"
                      />
                      <CustomRadio
                        id="couples"
                        name="typeCategory"
                        value="Couples"
                        checked={formData.typeCategory === 'Couples'}
                        onChange={(v) => setFormData({ ...formData, typeCategory: v, size: 'A3' })}
                        label="Couples"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#262626] block mb-2">
                      Archival Size
                    </span>
                    <div className="flex gap-4">
                      {formData.typeCategory === 'Single Face' ? (
                        <>
                          <CustomRadio
                            id="size-a4"
                            name="size"
                            value="A4"
                            checked={formData.size === 'A4'}
                            onChange={(v) => setFormData({ ...formData, size: v })}
                            label="A4 (₹1,800)"
                          />
                          <CustomRadio
                            id="size-a3"
                            name="size"
                            value="A3"
                            checked={formData.size === 'A3'}
                            onChange={(v) => setFormData({ ...formData, size: v })}
                            label="A3 (₹3,500)"
                          />
                        </>
                      ) : (
                        <>
                          <CustomRadio
                            id="size-a3-couple"
                            name="size"
                            value="A3"
                            checked={formData.size === 'A3'}
                            onChange={(v) => setFormData({ ...formData, size: v })}
                            label="A3 (₹7,000)"
                          />
                          <CustomRadio
                            id="size-a2-couple"
                            name="size"
                            value="A2"
                            checked={formData.size === 'A2'}
                            onChange={(v) => setFormData({ ...formData, size: v })}
                            label="A2 (₹15,000)"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomInput
                  label="Your Name"
                  id="clientName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                  placeholder="e.g. Eleanor Vance"
                  required
                />
                <CustomInput
                  label="Phone / WhatsApp"
                  id="clientPhone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                  placeholder="+91 98000 00000"
                  required
                />
              </div>

              <CustomInput
                label="Email Address"
                id="clientEmail"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                placeholder="name@domain.com"
                required
              />

              {/* Custom File Upload */}
              <CustomFileUpload
                label="Reference Photo / Stencil Inspiration"
                fileName={formData.referenceFileName}
                onChange={(file) => setFormData({ ...formData, referenceFile: file, referenceFileName: file.name })}
                onClear={() => setFormData({ ...formData, referenceFile: null, referenceFileName: '' })}
              />

              <CustomTextarea
                label="Artistic Vision / Specific Instructions"
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe lighting preferences, background styles, or framing requirements..."
                rows={3}
              />

              {/* Form Submission Actions */}
              <div className="pt-4 border-t border-[#e4e4e7] flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#71717a] block font-mono">
                    Estimated Tariff
                  </span>
                  <span className="font-cinzel text-xl text-[#0a0a0a] font-bold">
                    ₹{computedPrice?.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={FiArrowRight}
                  >
                    {isSubmitting ? 'Recording Commission...' : 'Submit Inquiry'}
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            /* SUCCESS STATE VIEW */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EFEDE7] border border-[#111111] flex items-center justify-center mx-auto text-[#111111]">
                <FiCheckCircle className="text-2xl" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block mb-1">
                  Inquiry Received
                </span>
                <h3 className="font-cinzel text-2xl text-[#111111] tracking-wide">
                  COMMISSION LOGGED
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="font-medium text-[#111111]">{successRecord.customerName}</span>. Your custom inquiry for <span className="font-medium text-[#111111]">{successRecord.artworkType}</span> has been logged under order reference.
                </p>
              </div>

              {/* Tracking Record */}
              <div className="p-4 bg-[#EFEDE7] border border-[#D8D6D0] max-w-sm mx-auto flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono text-[#777777] block">Commission ID</span>
                  <span className="font-mono text-sm font-semibold text-[#111111]">{successRecord.id}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="px-2.5 py-1 text-[11px] border border-[#D8D6D0] hover:border-[#111111] bg-[#F7F6F2] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FiCopy className="text-xs" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs text-[#777777] font-mono">
                The studio will reach out via WhatsApp/Phone to finalize composition & advance token.
              </div>

              <div className="pt-4 flex justify-center">
                <Button variant="primary" size="md" onClick={onClose}>
                  Done & Return to Studio
                </Button>
              </div>
            </div>
          )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
