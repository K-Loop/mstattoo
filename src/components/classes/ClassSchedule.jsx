import React from 'react';
import { FiClock, FiCheck } from 'react-icons/fi';

export default function ClassSchedule() {
  const dailySlots = [
    {
      time: '10:30 AM – 11:30 AM',
      phase: 'Theory & Anatomical Drawing Drills',
      desc: 'Form study, light behavior, proportion mapping, and graphite value grading.'
    },
    {
      time: '11:30 AM – 01:30 PM',
      phase: 'Hands-on Drawing / Machine Practice',
      desc: 'Synthetic skin tattoo needle depth calibration or hyper-realistic pencil shading.'
    },
    {
      time: '01:30 PM – 02:15 PM',
      phase: 'Lunch & Creative Pause',
      desc: 'Portfolio review, visual analysis of masterworks, and studio rest.'
    },
    {
      time: '02:15 PM – 04:30 PM',
      phase: 'Live Project Work & Mentorship',
      desc: 'Live model sketching, digital stencil creation in Procreate/Photoshop, or client project.'
    },
    {
      time: '04:30 PM – 05:00 PM',
      phase: 'Daily Critique & Sanitization Protocols',
      desc: 'Individual evaluation of the day’s work and strict workstation sterilization drill.'
    }
  ];

  return (
    <div className="bg-[#EFEDE7] border border-[#D8D6D0] p-7 sm:p-9 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#D8D6D0]">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#777777] block font-bold">
            Studio Cohort Timetable
          </span>
          <h3 className="font-cinzel text-xl sm:text-2xl text-[#111111] font-semibold">
            DAILY ACADEMY SCHEDULE
          </h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F7F6F2] border border-[#D8D6D0] text-xs font-mono text-[#111111]">
          <FiClock />
          <span>10:30 AM – 5:00 PM (Mon – Sat)</span>
        </div>
      </div>

      <div className="space-y-3">
        {dailySlots.map((slot, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#F7F6F2] border border-[#D8D6D0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="sm:w-56 shrink-0">
              <span className="font-mono text-xs font-semibold text-[#111111] block">
                {slot.time}
              </span>
            </div>
            <div className="flex-1">
              <strong className="text-xs text-[#111111] font-semibold block mb-0.5">
                {slot.phase}
              </strong>
              <span className="text-[11px] text-[#555555] font-light block">
                {slot.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
