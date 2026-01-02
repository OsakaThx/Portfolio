
'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
  title: string;
}

export default function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
  title,
}: ImageModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const exitFullscreenIfActive = useCallback(async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {
        // ignore
      }
    }
  }, []);

  const handleClose = useCallback(async () => {
    await exitFullscreenIfActive();
    onClose();
  }, [exitFullscreenIfActive, onClose]);

  const toggleFullscreen = useCallback(async () => {
    const el = modalRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      try {
        await el.requestFullscreen();
      } catch {
        // ignore
      }
      return;
    }

    await exitFullscreenIfActive();
  }, [exitFullscreenIfActive]);

  // Cerrar con ESC y navegar con flechas
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [handleClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    onFsChange();
    return () => {
      document.removeEventListener('fullscreenchange', onFsChange);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={handleClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
        aria-label="Cerrar"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Contador de imágenes */}
      <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Botón fullscreen */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          void toggleFullscreen();
        }}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm transition-colors duration-300"
        aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>

      {/* Título del proyecto */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
        {title}
      </div>

      {/* Botón anterior */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
          aria-label="Imagen anterior"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Botón siguiente */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
          aria-label="Imagen siguiente"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Imagen principal */}
      <div
        className="relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={(e) => {
          e.stopPropagation();
          void toggleFullscreen();
        }}
      >
        <Image
          src={images[currentIndex]}
          alt={`${title} - imagen ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Miniaturas (thumbnails) */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex(index);
              }}
              className={`w-16 h-12 relative rounded overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-white opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <Image
                src={img}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
