import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "frontend",
      technologies: ["React", "Redux", "Socket.io", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "frontend",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Content Management System",
      description: "A custom CMS with user roles, content publishing workflow, and analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness tracking application with workout plans and progress visualization.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "fullstack",
      technologies: ["React Native", "Firebase", "D3.js", "Node.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "A microservice API gateway with rate limiting, authentication, and request routing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80",
      category: "backend",
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 7,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "design",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Brand Strategy"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 8,
      title: "UI/UX Design System",
      description: "Comprehensive design system with reusable components, style guide, and interactive prototypes for a financial app.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "design",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 9,
      title: "Product Promo Video",
      description: "Cinematic product launch video with motion graphics, visual effects, and professional sound design.",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "video",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Design"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 10,
      title: "Motion Graphics Package",
      description: "Custom animated graphics package including intros, transitions, lower thirds, and animated icons for a YouTube channel.",
      image: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "video",
      technologies: ["After Effects", "Cinema 4D", "Blender", "Animation"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in development, graphics design, and video editing. Each project represents different challenges and creative solutions.
            </p>
          </div>

          <div className="flex justify-center mb-12 opacity-0" ref={sectionRef}>
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {['all', 'frontend', 'backend', 'fullstack', 'design', 'video'].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2 mb-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-indigo-600/80 text-white text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.demoLink}
                          className="px-3 py-1 bg-white/90 text-gray-900 text-sm rounded-md hover:bg-white transition-colors"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.codeLink}
                          className="px-3 py-1 bg-gray-800/90 text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
