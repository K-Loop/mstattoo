import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../components/common/Button';
import BackButton from '../components/common/BackButton';

export default function NotFoundPage({ onReturnHome }) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 sm:p-12 text-center bg-[#F7F6F2]">
      <div className="max-w-md w-full space-y-6">
        <div className="flex justify-start">
          <BackButton onClick={onReturnHome} label="Back to Studio" />
        </div>

        <div className="w-16 h-16 rounded-full border border-[#D8D6D0] flex items-center justify-center mx-auto text-xl font-mono text-[#111111]">
          404
        </div>

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#777777] font-mono block">
            Archival Coordinate Not Found
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-[#111111] font-semibold">
            THIS PAGE IS NOT ON THE CANVAS.
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
            The artwork, gallery room, or curriculum sheet you requested has either moved or exists only in creative imagination.
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <Button
            variant="primary"
            size="md"
            icon={FiArrowLeft}
            onClick={onReturnHome}
          >
            Return to Studio
          </Button>
        </div>
      </div>
    </div>
  );
}
