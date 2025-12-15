import { useRef, useState } from 'react';

export function useDraggableScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Helper to toggle snap
  const toggleSnap = (enable: boolean) => {
    if (ref.current) {
      if (enable) {
        ref.current.style.scrollSnapType = 'x mandatory';
        ref.current.style.scrollBehavior = 'smooth';
      } else {
        ref.current.style.scrollSnapType = 'none'; // DISABLE SNAP while dragging
        ref.current.style.scrollBehavior = 'auto'; // DISABLE SMOOTH CSS (it lags dragging)
      }
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    
    // VISUALS
    ref.current.style.cursor = 'grabbing';
    ref.current.style.userSelect = 'none';
    
    // CRITICAL: Stop the browser from fighting your drag
    toggleSnap(false);
  };

  const onMouseUp = () => {
    if (!ref.current) return;
    setIsDragging(false);
    
    // VISUALS
    ref.current.style.cursor = 'grab';
    ref.current.style.removeProperty('user-select');
    
    // CRITICAL: Re-enable snap so it slides into place smoothly after let go
    toggleSnap(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    
    const x = e.pageX - ref.current.offsetLeft;
    // SMOOTHNESS FACTOR:
    // * 1 = Exact 1:1 movement (Best for precision)
    // * 2 or 3 = Faster scrolling (Feels "looser")
    const walk = (x - startX) * 1.5; 
    
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return { ref, onMouseDown, onMouseUp, onMouseMove, onMouseLeave: onMouseUp };
}