"use client";
import React, { useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  date: string;
  imgSrc: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  link: string | null;
  results: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Lock background scroll while modal is open (mobile-friendly)
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop: 40% opacity */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Glassmorphism modal */}
      <div
        className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden
                   bg-black/90 border border-white/8
                   shadow-2xl ring-1 ring-white/6 transition-transform duration-300
                   transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ensure modal scrollable on small screens */}
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="flex items-start justify-between p-5">
            <div>
              <h3 className="text-lg font-semibold text-white/90">{project.name}</h3>
              <p className="text-sm text-white/60">{project.date}</p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="ml-4 inline-flex items-center justify-center h-10 w-10 rounded-lg
                       bg-white/6 text-white/80 hover:bg-white/12 transition"
            >
              ✕
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 p-4 sm:p-5 border-t border-white/6">
            <div>
              <div className="rounded-lg overflow-hidden border border-white/6">
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.imgSrc || "/placeholder.png"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-white/8 text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-white/90 flex flex-col">
              <p className="mb-3 text-sm leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>

              {project.results && project.results.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white/95 mb-2">Results</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-white/80">
                    {project.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-block px-4 py-2 rounded-md bg-white/10 hover:bg-white/20
                             text-white text-sm font-medium transition border border-white/8 text-center"
                  >
                    Open project
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-3 py-2 rounded-md bg-white/6 hover:bg-white/12 text-white/90 text-sm transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;