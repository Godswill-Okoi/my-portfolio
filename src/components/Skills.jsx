import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const skillsContainerRef = useRef(null);

  // Skill categories with icons
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Graphics Design' },
    { id: 'video', name: 'Video Editing' },
    { id: 'tools', name: 'Tools & Others' }
  ];

  // Comprehensive skills data with icons and categories
  const skillsData = [
    {
      name: "HTML5",
      level: 95,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
      description: "Semantic markup, accessibility, and modern HTML features"
    },
    {
      name: "CSS3/SASS",
      level: 90,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
      description: "Responsive design, animations, and CSS architecture"
    },
    {
      name: "JavaScript",
      level: 92,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      description: "ES6+, DOM manipulation, and asynchronous programming"
    },
    {
      name: "React",
      level: 88,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      description: "Component architecture, hooks, and state management"
    },
    {
      name: "TypeScript",
      level: 85,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      description: "Type safety, interfaces, and advanced TypeScript patterns"
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "#06B6D4",
      description: "Utility-first CSS and responsive component design"
    },
    {
      name: "Node.js",
      level: 85,
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      description: "Server-side JavaScript, event-driven architecture"
    },
    {
      name: "Express",
      level: 82,
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
      description: "RESTful APIs, middleware, and routing"
    },
    {
      name: "Python",
      level: 80,
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      description: "Data processing, automation, and scripting"
    },
    {
      name: "Django",
      level: 75,
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      color: "#092E20",
      description: "Full-stack Python framework and ORM"
    },
    {
      name: "SQL",
      level: 85,
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
      description: "Database design, complex queries, and optimization"
    },
    {
      name: "MongoDB",
      level: 80,
      category: "backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      description: "NoSQL database, aggregation framework, and schema design"
    },
    {
      name: "Git",
      level: 90,
      category: "tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
      description: "Version control, branching strategies, and collaboration"
    },
    {
      name: "Docker",
      level: 75,
      category: "tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      description: "Containerization, Docker Compose, and deployment"
    },
    {
      name: "AWS",
      level: 70,
      category: "tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#232F3E",
      description: "EC2, S3, Lambda, and cloud infrastructure"
    },
    {
      name: "CI/CD",
      level: 75,
      category: "tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
      description: "Automated testing, deployment pipelines, and DevOps"
    },
    {
      name: "Figma",
      level: 65,
      category: "tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
      description: "UI/UX design, prototyping, and design systems"
    },
    {
      name: "Redux",
      level: 82,
      category: "frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "#764ABC",
      description: "State management, middleware, and Redux Toolkit"
    },
    {
      name: "Adobe Photoshop",
      level: 90,
      category: "design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      color: "#31A8FF",
      description: "Photo editing, digital manipulation, and compositing"
    },
    {
      name: "Adobe Illustrator",
      level: 85,
      category: "design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      color: "#FF9A00",
      description: "Vector graphics, logo design, and illustration"
    },
    {
      name: "Adobe InDesign",
      level: 80,
      category: "design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",
      color: "#FF3366",
      description: "Print layout, publication design, and typography"
    },
    {
      name: "Adobe Premiere Pro",
      level: 88,
      category: "video",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
      color: "#9999FF",
      description: "Video editing, color grading, and audio mixing"
    },
    {
      name: "Adobe After Effects",
      level: 85,
      category: "video",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",
      color: "#9999FF",
      description: "Motion graphics, visual effects, and animation"
    },
    {
      name: "DaVinci Resolve",
      level: 82,
      category: "video",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
      color: "#FF5555",
      description: "Professional color grading, editing, and audio post-production"
    },
    {
      name: "Blender",
      level: 75,
      category: "video",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      color: "#F5792A",
      description: "3D modeling, animation, and visual effects"
    }
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  // Animation for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');

          // Animate skill bars with delay
          const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.level + '%';
            }, index * 100);
          });
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
  }, [activeCategory]);

  // Reset animations when category changes
  useEffect(() => {
    if (skillsContainerRef.current) {
      const skillBars = skillsContainerRef.current.querySelectorAll('.skill-bar-fill');
      skillBars.forEach(bar => {
        bar.style.width = '0%';
      });

      // Trigger reflow to restart animations
      void skillsContainerRef.current.offsetWidth;

      // Re-apply animations
      setTimeout(() => {
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.level + '%';
          }, index * 100);
        });
      }, 100);
    }
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-200 dark:bg-indigo-900 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">My Skills</h2>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with, spanning development, graphics design, and video editing. I'm constantly learning and expanding my skill set to stay up-to-date with the latest trends and techniques.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            ref={(el) => {
              sectionRef.current = el;
              skillsContainerRef.current = el;
            }}
          >
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color
                    }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{skill.level}% Proficiency</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: "0%",
                        backgroundColor: skill.color,
                        opacity: hoveredSkill === skill.name ? 1 : 0.8
                      }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional section: Learning Now */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Currently Learning</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Always expanding my knowledge with these technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E10098" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
                { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "#02569B" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5" },
                { name: "Cinema 4D", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", color: "#011A6A" },
                { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", color: "#0E1128" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                    style={{
                      backgroundColor: `${tech.color}15`,
                    }}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
