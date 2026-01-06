import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        setElementTop(elementTop);
      }
    };

    const handleResize = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        setElementTop(elementTop);
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getRelativeScroll = () => {
    const startScroll = 700;
    const endScroll = 1300;
    
    if (scrollY < startScroll) return 0;
    if (scrollY > endScroll) return endScroll - startScroll;
    
    return scrollY - startScroll;
  };

  const getHeadingTransformStyle = () => {
    const relativeScroll = getRelativeScroll();
    const scrollFactor = relativeScroll * 0.8;
    const opacity = Math.max(0, 1 - relativeScroll / 200);
    const scale = Math.max(0.5, 1 - relativeScroll / 150);
    
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.05s ease-out'
    };
  };

  const getBlockTransformStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.6;
    const opacity = Math.max(0, 1 - relativeScroll / 150);
    const scale = Math.max(0.6, 1 - relativeScroll / 200);
    
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.05s ease-out'
    };
  };

  return (
    <>
      <div ref={aboutRef} className="min-h-screen py-12 md:py-20 flex flex-col items-center px-4">
        {/* Heading */}
        <div 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider md:tracking-[8px] lg:tracking-[12px] mb-8 md:mb-12"
          style={getHeadingTransformStyle()}
        >
          ABOUT ME
        </div>
        
        {/* Introduction */}
        <div 
          className="max-w-3xl text-sm sm:text-base md:text-lg text-center text-gray-300 mb-16 md:mb-20 px-4"
          style={getBlockTransformStyle(50)}
        >
          Hey, I'm Aditya Gaur — a full-stack developer passionate about crafting digital experiences that merge elegant design with robust functionality. I turn ideas into scalable, user-focused solutions.
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          
          {/* Design Card */}
          <div 
            className="flex flex-col gap-4 md:gap-6 items-center text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
            style={getBlockTransformStyle(100)}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider md:tracking-[6px] lg:tracking-[12px] text-yellow-500">
              DESIGN
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium text-yellow-100 leading-relaxed">
              Crafting pixel-perfect interfaces with Tailwind CSS and modern design systems. I transform concepts into visually stunning, responsive experiences that captivate users across every device.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
              Beautiful interfaces • Mobile-first • User-centric
            </p>
          </div>

          {/* Development Card */}
          <div 
            className="flex flex-col gap-4 md:gap-6 items-center text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            style={getBlockTransformStyle(150)}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider md:tracking-[6px] text-purple-500">
              DEVELOPMENT
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium text-purple-100 leading-relaxed">
              Building powerful full-stack applications with Next.js and React. From databases to APIs, I architect scalable solutions with clean code, security best practices, and optimal performance.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
              Full-stack expertise • Secure APIs • Lightning fast
            </p>
          </div>

          {/* Maintenance Card */}
          <div 
            className="flex flex-col gap-4 md:gap-6 items-center text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 md:col-span-2 lg:col-span-1"
            style={getBlockTransformStyle(200)}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider md:tracking-[6px] lg:tracking-[12px] text-blue-500">
              MAINTENANCE
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium text-blue-100 leading-relaxed">
              Keeping your digital presence running smoothly with proactive monitoring, security patches, and performance optimization. I ensure your site stays fast, secure, and up-to-date 24/7.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
              Continuous updates • Rock-solid security • Peak performance
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-[90vw] max-w-6xl bg-zinc-700 rounded-full h-[1px] my-12 md:my-16 lg:my-20 mx-auto"></div>
      
    </>
  );
};

import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        setElementTop(elementTop);
      }
    };

    const handleResize = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        setElementTop(elementTop);
      }
    };

    // Initial setup
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate relative scroll position for this component
  // Animation starts at 650px and ends at 900px
  const getRelativeScroll = () => {
    const startScroll = 700; // Start animations at 650px scroll
    const endScroll = 1300;   // End animations at 900px scroll
    
    if (scrollY < startScroll) return 0; // No animation before 650px
    if (scrollY > endScroll) return endScroll - startScroll; // Max animation after 900px
    
    return scrollY - startScroll; // Animation progress between 650-900px
  };

  // Fast scroll effect for heading
  const getHeadingTransformStyle = () => {
    const relativeScroll = getRelativeScroll();
    const scrollFactor = relativeScroll * 0.8;
    const opacity = Math.max(0, 1 - relativeScroll / 200); // Fade out over 200px
    const scale = Math.max(0.5, 1 - relativeScroll / 150); // Scale down over 150px
    
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.05s ease-out'
    };
  };

  // Fast scroll effect for service blocks
  const getBlockTransformStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.6;
    const opacity = Math.max(0, 1 - relativeScroll / 150); // Fade out over 150px
    const scale = Math.max(0.6, 1 - relativeScroll / 200); // Scale down over 200px
    
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.05s ease-out'
    };
  };

  return (
    <>
      <div ref={aboutRef} className=" lg:h-[80vh] h-[800px] flex flex-col items-center gap-10">
        <div 
          className="mt-5 lg:text-3xl text-[16px] border-5 tracking-[6px] lg:w-72 w-50 font-bold lg:h-16  h-10 flex items-center justify-center"
          style={getHeadingTransformStyle()}
        >
          ABOUT ME
        </div>
        <div 
          className="lg:w-[70vw] w-[40vw]  lg:text-[13px] text-[8px] flex items-center justify-center text-center"
          style={getBlockTransformStyle(50)}
        >
          Hey I am Aditya Gaur. I will write more here
        </div>
        <div className="w-[75vw] gap-10 h-[120vh] flex flex-col justify-center items-center">
          <div className="w-[90%] h-[80%] flex justify-evenly items-center">
            <div 
              className="  flex flex-col  gap-5 items-center justify-center lg:w-[40%] w-[50%] h-[100%]"
              style={getBlockTransformStyle(100)}
            >
              <div className="font-bold lg:tracking-[12px] tracking-[6px] lg:text-[24px] text-[12px] text-yellow-500">
                DESIGN
              </div>
              <div className="lg:text-[15px]  text-[10px] font-bold text-center h-[140px]  text-yellow-200">
                I build beautiful, responsive web experiences using Tailwind
                CSS, Bootstrap, and modern UI/UX principles. From wireframes to
                pixel-perfect interfaces, I create digital products that look
                stunning and work flawlessly.
              </div>
              <div className="font-bold lg:text-[12px] text-[7px] text-center text-gray-400">
                Clean code. Beautiful design. Seamless user experience.
              </div>
            </div>
            <div 
              className="  flex  pb-3 flex-col gap-5 items-center relative top-2 justify-center  w-[50%] h-[100%]"
              style={getBlockTransformStyle(150)}
            >
              <div className="  font-bold lg:tracking-[6px] tracking-[3px] lg:text-[24px] text-[13px] text-yellow-500">
                DEVELOPMENT
              </div>
              <div className="lg:text-[15px] text-[10px] font-bold text-center h-[140px] text-yellow-200">
                I build full-stack applications with Next.js, from database
                design to secure API integrations. Expert in backend systems,
                authentication, and performance optimization.
              </div>
              <div className="font-extrabold lg:text-[12px] text-[7px] text-center text-gray-400">
                End-to-end solutions. Secure backends.
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[80%] flex justify-center ">
            <div 
              className="flex flex-col gap-5 items-center justify-center w-[40%] h-[100%]"
              style={getBlockTransformStyle(200)}
            >
              <div className="font-bold lg:tracking-[12px] tracking-[6px] lg:text-[24px] text-[12px]  text-yellow-500">
                MAINTENANCE
              </div>
              <div className="lg:text-[15px] text-[10px] font-bold text-center  lg:h-[100px] h-[180px] text-yellow-200">
                I provide ongoing website maintenance, security updates, and performance monitoring. Keeping your digital assets running smoothly with regular backups, bug fixes, and feature enhancements.
              </div>
              <div className="font-extrabold lg:text-[12px] text-[7px] text-center flex items-center justify-center text-gray-400">
                Always updated. Always secure. Always performing.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] bg-zinc-700 rounded-4xl h-[1px] lg:mt-40 mt-10 lg:mb-20 mb-5 flex justify-center items-center m-auto"></div>
    </>
  );
};

export default About;