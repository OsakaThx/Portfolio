import { Project } from '@/types';

// =============================================================================
// 📁 PROJECTS DATA FILE
// =============================================================================
// 👉 This is the main file where you add, edit, or remove your projects.
// 👉 Each project follows the Project interface structure.
// 👉 To add a new project, copy an existing project object and modify it.
// 👉 To remove a project, simply delete its object from the array.
// =============================================================================

export const projects: Project[] = [
  // =========================================================================
  // 👉 PROJECT 1 - Edit this project with your own information
  // =========================================================================
  {
    id: 'project-1',
    title: 'FullStack Lottery App',
    description:
      'Full-stack web application that processes real-time lottery results using automated data scraping. Features WhatsApp bot integration, role-based access control (super admin, admin, user), and Twilio SMS notifications. Backend on Railway, frontend on Vercel.',
    // 👉 ARRAY DE IMÁGENES - Agrega todas las que quieras separadas por coma
    // 👉 Coloca tus imágenes en /public/projects/ y agrega las rutas aquí
    images: [
      '/projects/admin.png',
      '/projects/Resultados.png',
      '/projects/scratch.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GreenApi', 'Supabase', 'Railway', 'Vercel', 'Bootstrap', 'CSS', 'Twilio'],
    // 👉 Agrega URLs si las tienes (o elimina estas líneas)
    // liveUrl: 'https://tu-demo.com',
    // githubUrl: 'https://github.com/OsakaThx/loterias',
  },

  // =========================================================================
  // 👉 PROJECT 2 - Edita con tu información
  // =========================================================================
  {
    id: 'project-2',
    title: 'FullStack KernelFix',
    description:
      'Web application for a computer repair shop, designed to be user-friendly for both customers and administrators. The platform includes an admin panel with functionalities to add, edit, and delete announcements, as well as manage clients by adding or removing records, ensuring efficient content and customer management.',
   
    images: ['/projects/kernelfix.png'],
    technologies: ['React', 'Node.js', 'Supabase',],
    liveUrl: 'pagina-kernel-3uc4qmau2-osakathxs-projects.vercel.app',
   
  }

  // =========================================================================
  // 👉 PROJECT 3 - Edita con tu información
  // =========================================================================
  

  // =========================================================================
  // 👉 AGREGAR MÁS PROYECTOS ABAJO
  // =========================================================================
  // Para agregar un nuevo proyecto, copia esta plantilla:
  //
  // {
  //   id: 'project-5',
  //   title: 'Nombre del Proyecto',
  //   description: 'Descripción breve del proyecto.',
  //   images: [
  //     '/projects/imagen1.png',
  //     '/projects/imagen2.png',
  //     '/projects/imagen3.png',
  //   ],
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   liveUrl: 'https://tu-demo.com',
  //   githubUrl: 'https://github.com/tu-usuario/tu-repo',
  // },
  // =========================================================================
];
