import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('story');
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  // Add elements to the ref array
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Timeline data
  const timelineData = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of enterprise-level applications using React, Node.js, and AWS.'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple web applications with focus on performance and user experience.'
    },
    {
      year: '2019',
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      description: 'Created responsive interfaces and implemented complex UI features using modern JavaScript frameworks.'
    },
    {
      year: '2018',
      title: 'Junior Developer',
      company: 'CodeStart Agency',
      description: 'Started professional career working on client websites and learning industry best practices.'
    }
  ];

  // Services data
  const servicesData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Creating responsive, performant websites and web applications using modern technologies and frameworks.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with React Native that work seamlessly on both iOS and Android.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Database Design',
      description: 'Designing efficient database schemas and implementing robust data storage solutions for applications.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'API Development',
      description: 'Creating secure, scalable, and well-documented APIs that power modern applications and services.'
    }
  ];

  // Tab content components
  const tabContent = {
    story: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Developer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <h4 className="text-white font-bold text-xl">John Doe</h4>
                <p className="text-gray-200">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
            <span>5+</span>
          </div>
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-indigo-600 dark:border-indigo-400 rounded-full"></div>

          {/* Pattern decoration */}
          <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg opacity-70 rotate-12"></div>
          <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-lg opacity-70 -rotate-12"></div>
        </div>

        <div>
          <div className="flex items-center mb-6 space-x-2">
            <div className="h-px w-12 bg-indigo-600 dark:bg-indigo-400"></div>
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">My Story</span>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Passionate Full Stack Developer with a Creative Edge
          </h3>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              Hello! I'm a dedicated full stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With over 5 years of experience in the field, I've developed a deep understanding of both front-end and back-end technologies.
            </p>
            <p className="leading-relaxed">
              My journey in web development began with a curiosity about how websites work, which quickly evolved into a passion for building them myself. I enjoy the challenge of solving complex problems and the satisfaction of creating applications that provide real value to users.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">5+ Years</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Computer Science</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-400">50+ Completed</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Clients</h4>
                  <p className="text-gray-600 dark:text-gray-400">25+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    experience: (
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/30"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              ref={addToRefs}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content */}
              <div className="md:w-1/2 opacity-0">
                <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                  index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                  <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{item.company}</p>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    ),

    services: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0"
            ref={addToRefs}
          >
            <div className="w-16 h-16 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0" ref={sectionRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Get to know more about me, my experience, and what services I offer.
            </p>
          </div>

          {/* Tab navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-800 rounded-lg">
              {[
                { id: 'story', label: 'My Story' },
                { id: 'experience', label: 'Experience' },
                { id: 'services', label: 'Services' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="mt-8">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
