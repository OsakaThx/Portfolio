// =============================================================================
// TYPE DEFINITIONS FOR THE PORTFOLIO
// =============================================================================

/**
 * Project type definition
 * Each project in your portfolio will follow this structure
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  // 👉 Ahora soporta múltiples imágenes como un array
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

/**
 * Social link type for footer/contact section
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
