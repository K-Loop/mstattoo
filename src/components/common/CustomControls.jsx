import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiUploadCloud, FiCheck, FiX } from 'react-icons/fi';

/**
 * Editorial Custom TextInput
 */
export function CustomInput({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
  className = ''
}) {
  return (
    <div className={`space-y-1 text-left ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.22em] text-[#777777] font-mono font-medium">
          {label} {required && <span className="text-[#111111]">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full px-3.5 py-2.5 bg-[#F7F6F2] border ${
          error ? 'border-[#dc2626]' : 'border-[#D8D6D0] focus:border-[#111111]'
        } text-xs text-[#111111] placeholder-[#888888] font-sans outline-none transition-colors duration-200 disabled:opacity-50`}
      />
      {error && <span className="text-[10.5px] text-[#dc2626] font-mono block">{error}</span>}
    </div>
  );
}

/**
 * Editorial Custom Textarea
 */
export function CustomTextarea({
  label,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  error,
  className = ''
}) {
  return (
    <div className={`space-y-1 text-left ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.22em] text-[#777777] font-mono font-medium">
          {label} {required && <span className="text-[#111111]">*</span>}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-3.5 py-2.5 bg-[#F7F6F2] border ${
          error ? 'border-[#dc2626]' : 'border-[#D8D6D0] focus:border-[#111111]'
        } text-xs text-[#111111] placeholder-[#888888] font-sans outline-none transition-colors duration-200 resize-y`}
      />
      {error && <span className="text-[10.5px] text-[#dc2626] font-mono block">{error}</span>}
    </div>
  );
}

/**
 * Editorial Custom Select Menu
 */
export function CustomSelect({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select Option',
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`space-y-1 text-left relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-[10px] uppercase tracking-[0.22em] text-[#777777] font-mono font-medium">
          {label}
        </label>
      )}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2.5 bg-[#F7F6F2] border border-[#D8D6D0] hover:border-[#111111] text-xs text-[#111111] flex items-center justify-between cursor-pointer transition-colors duration-200"
      >
        <span className={selectedOption ? 'text-[#111111]' : 'text-[#888888]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <FiChevronDown
          className={`text-sm text-[#111111] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#F7F6F2] border border-[#111111] shadow-xl z-50 max-h-56 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`px-3.5 py-2 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                option.value === value
                  ? 'bg-[#111111] text-[#F7F6F2] font-semibold'
                  : 'text-[#111111] hover:bg-[#EFEDE7]'
              }`}
            >
              <span>{option.label}</span>
              {option.price && (
                <span className="font-mono text-[10px] opacity-75">{option.price}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Editorial File Upload Dropzone
 */
export function CustomFileUpload({
  label,
  onFileSelect,
  accept = 'image/*',
  currentFileName,
  className = ''
}) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(currentFileName || '');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onFileSelect) onFileSelect(file);
    }
  };

  return (
    <div className={`space-y-1 text-left ${className}`}>
      {label && (
        <label className="block text-[10px] uppercase tracking-[0.22em] text-[#777777] font-mono font-medium">
          {label}
        </label>
      )}
      <div
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
        className="w-full p-4 border border-dashed border-[#D8D6D0] hover:border-[#111111] bg-[#F7F6F2] hover:bg-[#EFEDE7] flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors duration-200"
      >
        <FiUploadCloud className="text-xl text-[#111111]" />
        <span className="text-xs text-[#111111] font-medium">
          {fileName ? fileName : 'Upload Reference Photo'}
        </span>
        <span className="text-[9.5px] uppercase tracking-wider text-[#777777] font-mono">
          PNG, JPG, HEIC up to 15MB
        </span>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
      />
    </div>
  );
}

/**
 * Minimal Editorial Filter Tabs
 */
export function CustomTabs({ tabs = [], activeTab, onChange, className = '' }) {
  return (
    <div className={`inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFEDE7] border border-[#D8D6D0] ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#111111] text-[#F7F6F2] font-semibold'
                : 'text-[#555555] hover:text-[#111111]'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`ml-1.5 text-[9px] font-mono ${isActive ? 'text-[#F7F6F2]/70' : 'text-[#777777]'}`}>
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Minimalist Editorial Radio Button
 */
export function CustomRadio({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
  className = ''
}) {
  return (
    <label
      htmlFor={id}
      onClick={() => !disabled && onChange && onChange(value)}
      className={`inline-flex items-center gap-2 cursor-pointer select-none text-xs ${
        disabled ? 'opacity-40 cursor-not-allowed' : 'text-[#111111]'
      } ${className}`}
    >
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors duration-200 ${
          checked ? 'border-[#111111] bg-[#111111]' : 'border-[#D8D6D0] bg-[#F7F6F2] hover:border-[#111111]'
        }`}
      >
        {checked && <div className="w-1.5 h-1.5 rounded-full bg-[#F7F6F2]" />}
      </div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => {}}
        disabled={disabled}
        className="hidden"
      />
      {label && <span className="text-xs font-sans tracking-wide">{label}</span>}
    </label>
  );
}

/**
 * Minimalist Editorial Checkbox
 */
export function CustomCheckbox({
  id,
  checked,
  onChange,
  label,
  disabled = false,
  className = ''
}) {
  return (
    <label
      htmlFor={id}
      onClick={() => !disabled && onChange && onChange(!checked)}
      className={`inline-flex items-center gap-2 cursor-pointer select-none text-xs ${
        disabled ? 'opacity-40 cursor-not-allowed' : 'text-[#111111]'
      } ${className}`}
    >
      <div
        className={`w-4 h-4 border flex items-center justify-center transition-colors duration-200 ${
          checked ? 'border-[#111111] bg-[#111111] text-[#F7F6F2]' : 'border-[#D8D6D0] bg-[#F7F6F2] hover:border-[#111111]'
        }`}
      >
        {checked && <FiCheck className="text-xs" />}
      </div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => {}}
        disabled={disabled}
        className="hidden"
      />
      {label && <span className="text-xs font-sans tracking-wide">{label}</span>}
    </label>
  );
}
