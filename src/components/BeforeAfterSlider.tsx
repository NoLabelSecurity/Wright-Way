import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  id: string;
  beforeImg: string;
  afterImg: string;
  aspectClass?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg, aspectClass = 'aspect-[3/4]' }) => {
  const [pct, setPct] = useState<number>(50);
  const [dragging, setDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(500);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let currentPct = ((clientX - rect.left) / rect.width) * 100;
    currentPct = Math.max(0, Math.min(100, currentPct));
    setPct(currentPct);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set initial width
    setContainerWidth(containerRef.current.clientWidth);
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    const onMouseUp = () => setDragging(false);

    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className={`ba-container ${aspectClass} w-full shadow-xl select-none`}
    >
      {/* After Image (Background) */}
      <img
        src={afterImg}
        alt="After work"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-brand/95 backdrop-blur-sm text-navy text-xs font-black px-3 py-1.5 rounded-full z-20 border border-brand-accent/20 uppercase tracking-wider">
        After
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="ba-after"
        style={{ width: `${pct}%` }}
      >
        {/* We enforce containerRef's width dynamically so the before-image stays aligned and cropped rather than scaled */}
        <div 
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${containerWidth}px` }}
        >
          <img
            src={beforeImg}
            alt="Before work"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 border border-white/10 uppercase tracking-wider">
        Before
      </div>

      {/* Handle */}
      <div
        className="ba-handle"
        style={{ left: `calc(${pct}% - 2px)` }}
        onMouseDown={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onTouchStart={() => {
          setDragging(true);
        }}
      />
    </div>
  );
};
