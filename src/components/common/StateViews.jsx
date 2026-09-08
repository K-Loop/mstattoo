import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiInbox, FiRefreshCw, FiArrowRight, FiSearch } from 'react-icons/fi';
import Button from './Button';

/**
 * Editorial Empty State for Gallery, Search, Registrations, Orders, Sales.
 */
export function EmptyState({
  title = 'No Artworks Found',
  subtitle = 'Try refining your category filters or search query to explore the studio collection.',
  icon: Icon = FiInbox,
  actionLabel,
  onAction,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-12 sm:p-16 border border-[#e4e4e7] bg-white text-center flex flex-col items-center justify-center max-w-xl mx-auto my-8 ${className}`}
    >
      <div className="w-14 h-14 rounded-full border border-[#e4e4e7] flex items-center justify-center text-[#71717a] mb-5 bg-[#fafafa]">
        <Icon className="text-xl" />
      </div>

      <h4 className="font-cinzel text-lg sm:text-xl font-semibold text-[#0a0a0a] tracking-wide mb-2 uppercase">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-[#71717a] font-light max-w-md leading-relaxed mb-6">
        {subtitle}
      </p>

      {actionLabel && onAction && (
        <Button variant="outline" size="sm" onClick={onAction} icon={FiArrowRight}>
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}

/**
 * Editorial Error State: "Something interrupted the creative process."
 */
export function ErrorState({
  title = 'Something Interrupted The Creative Process',
  message = 'An unexpected system glitch occurred while retrieving studio records. Please try refreshing.',
  onRetry,
  className = ''
}) {
  return (
    <div className={`p-10 border border-[#e4e4e7] bg-[#fafafa] text-center flex flex-col items-center justify-center max-w-lg mx-auto my-12 ${className}`}>
      <div className="w-12 h-12 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center text-[#dc2626] mb-4">
        <FiAlertTriangle className="text-lg" />
      </div>
      <h4 className="font-cinzel text-base sm:text-lg text-[#0a0a0a] font-semibold mb-2">
        {title}
      </h4>
      <p className="text-xs text-[#71717a] leading-relaxed max-w-sm mb-6 font-light">
        {message}
      </p>
      {onRetry && (
        <Button variant="primary" size="sm" icon={FiRefreshCw} onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}

/**
 * Custom Warning Modal for Destructive Actions.
 */
export function WarningModal({
  isOpen,
  title = 'Confirm Destructive Action',
  description = 'Are you sure you want to permanently delete this record? This action cannot be undone.',
  confirmLabel = 'Delete Record',
  cancelLabel = 'Cancel',
  onConfirm,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white border border-[#e4e4e7] p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 text-left"
      >
        <div className="flex items-center gap-3 text-[#b91c1c]">
          <span className="p-2 rounded-full bg-[#fef2f2] border border-[#fecaca]">
            <FiAlertTriangle className="text-base" />
          </span>
          <h4 className="font-cinzel text-base font-semibold uppercase tracking-wider text-[#0a0a0a]">
            {title}
          </h4>
        </div>

        <p className="text-xs text-[#52525b] leading-relaxed">
          {description}
        </p>

        <div className="pt-4 border-t border-[#e4e4e7] flex items-center justify-end gap-3">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {cancelLabel}
          </Button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 text-xs uppercase tracking-widest font-semibold bg-[#b91c1c] text-white hover:bg-[#991b1b] transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
