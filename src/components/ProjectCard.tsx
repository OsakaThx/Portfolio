'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import ImageModal from './ImageModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // 👉 Estado para controlar qué imagen se muestra en el carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // 👉 Estado para abrir/cerrar el modal de imagen grande
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDocumentFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // ignore
    }
  };

  // Navegar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Navegar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  // Abrir modal al hacer clic en la imagen
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Modal para ver imagen en grande */}
      <ImageModal
        images={project.images}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectIndex={setCurrentImageIndex}
        title={project.title}
      />

      <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
        {/* 
          👉 CARRUSEL DE IMÁGENES
          Muestra todas las imágenes del array 'images' con navegación
          👉 Haz clic en la imagen para verla en grande
        */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {/* Imagen actual - clickeable para abrir modal */}
          <button
            onClick={openModal}
            onDoubleClick={async () => {
              openModal();
              await toggleDocumentFullscreen();
            }}
            className="absolute inset-0 w-full h-full cursor-zoom-in z-0"
            aria-label="Ver imagen en grande"
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - imagen ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
          
          {/* Icono de zoom (indicador visual) */}
          <div className="absolute top-2 right-2 z-10 p-1.5 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>

        {/* Botones de navegación (solo si hay más de 1 imagen) */}
        {project.images.length > 1 && (
          <>
            {/* Botón anterior */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10"
              aria-label="Imagen anterior"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Botón siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10"
              aria-label="Imagen siguiente"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Action Buttons (visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300 transform hover:scale-105"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto px-4 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* 
          👉 PROJECT TITLE
          Edit the title in your projects.ts file
        */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>

        {/* 
          👉 PROJECT DESCRIPTION
          Edit the description in your projects.ts file
        */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 
          👉 TECHNOLOGIES USED
          Edit the technologies array in your projects.ts file
        */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
    </>
  );
}
