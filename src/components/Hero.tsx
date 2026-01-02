import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Available for work
          </div>

          {/* 
            👉 MAIN HEADING
            Your name comes from siteConfig.ts - edit it there
          */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {siteConfig.name}
            </span>
          </h1>

          {/* 
            👉 PROFESSIONAL TITLE
            Your title comes from siteConfig.ts - edit it there
          */}
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 animate-slide-up animation-delay-100">
            {siteConfig.title}
          </h2>

          {/* 
            👉 BIO/INTRODUCTION
            Your bio comes from siteConfig.ts - edit it there
          */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed animate-slide-up animation-delay-200">
            {siteConfig.bio}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
            {/* Primary CTA - View Projects */}
            <a
              href="#projects"
              className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 hover:scale-105 flex items-center"
            >
              View My Work
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Secondary CTA - Contact */}
            <a
              href="#contact"
              className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-medium transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:scale-105 flex items-center"
            >
              Get In Touch
              <svg
                className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a
              href="#projects"
              className="inline-block text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Scroll to projects"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
