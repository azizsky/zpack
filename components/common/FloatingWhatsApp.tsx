'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function FloatingWhatsApp() {
  // Inisialisasi awal dengan angka 0 agar aman di server-side rendering
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });

  // Set posisi awal di pojok kanan bawah setelah komponen dimuat di client (browser)
  useEffect(() => {
    setIsMounted(true);
    setPosition({
      x: window.innerWidth - 100,
      y: window.innerHeight - 180,
    });

    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 80),
        y: Math.min(prev.y, window.innerHeight - 100),
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler mulai drag (Mouse atau Touch)
  const onStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setHasMoved(false);
    dragRef.current = {
      startX: clientX,
      startY: clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  const onMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;

    const dx = clientX - dragRef.current.startX;
    const dy = clientY - dragRef.current.startY;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      setHasMoved(true);
    }

    const newX = dragRef.current.initialX + dx;
    const newY = dragRef.current.initialY + dy;

    const boundedX = Math.max(10, Math.min(newX, window.innerWidth - 80));
    const boundedY = Math.max(10, Math.min(newY, window.innerHeight - 100));

    setPosition({ x: boundedX, y: boundedY });
  };

  const onEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    onStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    onMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    onEnd();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      onStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0 && isDragging) {
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    onEnd();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const handleClick = (e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      return;
    }
    const phone = '628xxxxxxxxxx'; // Ganti dengan nomor WhatsApp ZPack
    const message = 'Halo ZPack Printing & Packaging, saya ingin konsultasi mengenai cetak kemasan custom.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Jangan render apa pun sebelum komponen terpasang di browser untuk mencegah mismatch SSR
  if (!isMounted) return null;

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none',
      }}
      className="fixed z-[9998] cursor-grab active:cursor-grabbing select-none group flex flex-col items-center"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-105 transition-transform duration-300">
        <svg className="w-6 h-6 sm:w-9 sm:h-9 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </div>

      <div className="mt-1 px-3 py-1 rounded-full bg-[#121926]/90 dark:bg-slate-800/90 border border-amber-400/40 text-[11px] sm:text-xs font-bold text-amber-400 shadow-md backdrop-blur-md whitespace-nowrap">
        Free Konsultasi
      </div>
    </div>
  );
}