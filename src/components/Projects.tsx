import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with care and
            attention to detail, using modern technologies and best practices.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* 
          =========================================================================
          👉 PROJECTS GRID
          =========================================================================
          The projects displayed here come from /src/data/projects.ts
          To add, edit, or remove projects, modify that file.
          =========================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No projects yet. Add your first project in{' '}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                /src/data/projects.ts
              </code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
