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

export default About;