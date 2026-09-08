import React from 'react';
import { FiClock, FiCheck, FiArrowRight } from 'react-icons/fi';
import Button from '../common/Button';

export default function CourseCard({ course, onRegister, index = 0 }) {
  return (
    <div className="bg-[#EFEDE7] border border-[#D8D6D0] hover:border-[#111111] transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between text-left">
      <div>
        {/* Course Duration & Tag */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D8D6D0]">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#111111] font-bold">
            {course.duration}
          </span>
          <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#777777]">
            <FiClock className="text-xs" />
            <span>10:30 AM – 5:00 PM</span>
          </div>
        </div>

        {/* Title & Fee */}
        <h3 className="font-cinzel text-xl sm:text-2xl text-[#111111] font-semibold mb-1">
          {course.title}
        </h3>
        <p className="text-xs text-[#777777] font-sans tracking-wide mb-4">
          {course.subtitle}
        </p>

        <div className="mb-6">
          <span className="font-cinzel text-3xl text-[#111111] font-bold">
            {course.formattedFee}
          </span>
          <span className="text-[10.5px] text-[#777777] font-mono block mt-0.5">
            Tuition Fee • Hands-on Mentorship
          </span>
        </div>

        {/* Highlights List */}
        <div className="space-y-2.5 mb-8 border-t border-[#D8D6D0] pt-5">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#777777] block font-semibold">
            Curriculum Highlights
          </span>
          {course.highlights?.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#555555]">
              <FiCheck className="text-[#111111] text-sm mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#D8D6D0]">
        <Button
          variant="primary"
          size="md"
          className="w-full"
          icon={FiArrowRight}
          onClick={() => onRegister && onRegister(course)}
        >
          Enroll in Program
        </Button>
      </div>
    </div>
  );
}
