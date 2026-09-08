import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle, FiCopy, FiCalendar, FiArrowRight } from 'react-icons/fi';
import Button from '../common/Button';
import BackButton from '../common/BackButton';
import { CustomInput, CustomTextarea, CustomSelect, CustomRadio } from '../common/CustomControls';
import { artCourses } from '../../data/courses';
import { storageService } from '../../services/storageService';

export default function RegistrationModal({
  isOpen,
  onClose,
  initialCourse = null,
  onRegistrationSuccess
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    courseId: '',
    preferredStartDate: '',
    previousExperience: 'Beginner',
    portfolioLink: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successRecord, setSuccessRecord] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCourse) {
      setFormData(prev => ({ ...prev, courseId: initialCourse.id }));
    } else if (artCourses.length > 0 && !formData.courseId) {
      setFormData(prev => ({ ...prev, courseId: artCourses[0].id }));
    }
    setErrors({});
    setSuccessRecord(null);
  }, [initialCourse, isOpen]);

  if (!isOpen) return null;

  const selectedCourseObj = artCourses.find(c => c.id === formData.courseId) || artCourses[0];

  const courseOptions = artCourses.map(c => ({
    value: c.id,
    label: `${c.title} (${c.formattedFee})`
  }));

  const experienceOptions = [
    { value: 'Beginner', label: 'Beginner (No prior art training)' },
    { value: 'Intermediate', label: 'Intermediate (Sketching / hobbyist)' },
    { value: 'Practicing Artist', label: 'Practicing Artist (Looking to specialize)' }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.preferredStartDate) errs.preferredStartDate = 'Preferred date is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const record = await storageService.addRegistration({
        applicantName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        courseId: formData.courseId,
        courseName: selectedCourseObj.title,
        fee: selectedCourseObj.fee,
        formattedFee: selectedCourseObj.formattedFee,
        preferredStartDate: formData.preferredStartDate,
        previousExperience: formData.previousExperience,
        portfolioLink: formData.portfolioLink,
        notes: formData.notes
      });

      setSuccessRecord(record);
      if (onRegistrationSuccess) onRegistrationSuccess(record);
    } catch (err) {
      console.error(err);
      setErrors({ form: 'An error occurred while saving your registration. Please try again.' });
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
                Academy Application
              </span>
              <span className="font-cinzel text-xs text-[#111111] font-semibold">
                Timings: 10:30 AM – 5:00 PM
              </span>
            </div>
          </div>

          {/* SCROLLABLE FORM BODY (Guaranteed in-bounds on any screen) */}
          <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 flex-1 overscroll-contain">
            {!successRecord ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-cinzel text-2xl text-[#111111] tracking-wide mb-1">
                    ENROLL AT MS ART ACADEMY
                  </h3>
                <p className="text-xs text-[#71717a] font-light leading-relaxed">
                  Cohorts are intentionally capped at 4 to 8 students for maximum personalized instruction.
                </p>
              </div>

              {errors.form && (
                <div className="p-3 bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-xs">
                  {errors.form}
                </div>
              )}

              {/* Course Selection */}
              <CustomSelect
                label="Selected Program"
                options={courseOptions}
                value={formData.courseId}
                onChange={(val) => setFormData({ ...formData, courseId: val })}
                required
              />

              {/* Selected Program Spec Summary */}
              {selectedCourseObj && (
                <div className="p-4 bg-[#EFEDE7] border border-[#D8D6D0] flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[#777777] block text-[10px] uppercase">Program Duration</span>
                    <span className="text-[#111111] font-semibold">{selectedCourseObj.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#777777] block text-[10px] uppercase">Tuition Fee</span>
                    <span className="text-base text-[#111111] font-bold font-cinzel">{selectedCourseObj.formattedFee}</span>
                  </div>
                </div>
              )}

              {/* Personal Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomInput
                  label="Full Name"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  error={errors.fullName}
                  placeholder="e.g. Johnathan Doe"
                  required
                />
                <CustomInput
                  label="Phone / WhatsApp"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                  placeholder="+91 98000 00000"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomInput
                  label="Email Address"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  placeholder="name@domain.com"
                  required
                />
                <CustomInput
                  label="City / Location"
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  error={errors.city}
                  placeholder="e.g. Mumbai, Bangalore, Pune"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomInput
                  label="Preferred Cohort Start Date"
                  id="preferredStartDate"
                  type="date"
                  value={formData.preferredStartDate}
                  onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                  error={errors.preferredStartDate}
                  required
                />
                <CustomInput
                  label="Instagram or Portfolio Link (Optional)"
                  id="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  placeholder="https://instagram.com/..."
                />
              </div>

              <CustomSelect
                label="Prior Art Experience"
                options={experienceOptions}
                value={formData.previousExperience}
                onChange={(val) => setFormData({ ...formData, previousExperience: val })}
              />

              <CustomTextarea
                label="Aspirations or Questions (Optional)"
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share your creative background, specific mediums you want to master, or inquiries..."
                rows={3}
              />

              {/* Form Submission Actions */}
              <div className="pt-4 border-t border-[#e4e4e7] flex items-center justify-end gap-3">
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
                  {isSubmitting ? 'Submitting Application...' : 'Submit Registration'}
                </Button>
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
                  Registration Confirmed
                </span>
                <h3 className="font-cinzel text-2xl text-[#111111] tracking-wide">
                  APPLICATION RECEIVED
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-light max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="font-medium text-[#111111]">{successRecord.applicantName}</span>. Your application for <span className="font-medium text-[#111111]">{successRecord.courseName}</span> has been securely lodged in the studio system.
                </p>
              </div>

              {/* Application Tracking Badge */}
              <div className="p-4 bg-[#EFEDE7] border border-[#D8D6D0] max-w-sm mx-auto flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-mono text-[#777777] block">Application ID</span>
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
                Our lead instructor will contact you via WhatsApp/Call within 24 hours.
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
