import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      opacity,
      transition: "all 0.05s ease-out",
    };
  };

  const getBlockTransformStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.6;
    const opacity = Math.max(0, 1 - relativeScroll / 150);
    const scale = Math.max(0.6, 1 - relativeScroll / 200);
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity,
      transition: "all 0.05s ease-out",
    };
  };

  const services = [
    {
      title: "DESIGN",
      desc: "I build beautiful, responsive web experiences using Tailwind CSS, Bootstrap, and modern UI/UX principles. From wireframes to pixel-perfect interfaces, I create digital products that look stunning and work flawlessly.",
      sub: "Clean code. Beautiful design. Seamless user experience.",
      delay: 100,
    },
    {
      title: "DEVELOPMENT",
      desc: "I build full-stack applications with Next.js, from database design to secure API integrations. Expert in backend systems, authentication, and performance optimization.",
      sub: "End-to-end solutions. Secure backends.",
      delay: 150,
    },
    {
      title: "MAINTENANCE",
      desc: "I provide ongoing website maintenance, security updates, and performance monitoring. Keeping your digital assets running smoothly with regular backups, bug fixes, and feature enhancements.",
      sub: "Always updated. Always secure. Always performing.",
      delay: 200,
    },
  ];

  return (
    <>
      <div ref={aboutRef} className="flex flex-col items-center gap-8 py-10 px-4">
        {/* Heading */}
        <div
          className="text-xl sm:text-2xl lg:text-3xl border-5 tracking-[6px] w-40 sm:w-52 lg:w-72 font-bold h-10 lg:h-16 flex items-center justify-center"
          style={getHeadingTransformStyle()}
        >
          ABOUT ME
        </div>

        {/* Bio */}
        <div
          className="max-w-2xl text-center text-[10px] sm:text-sm lg:text-[13px] px-4"
          style={getBlockTransformStyle(50)}
        >
          Hey I am Aditya Gaur. I will write more here
        </div>

        {/* Service Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 items-center justify-start bg-zinc-900 rounded-2xl p-6 text-center"
              style={getBlockTransformStyle(service.delay)}
            >
              <div className="font-bold tracking-[6px] lg:tracking-[10px] text-base lg:text-xl text-yellow-500">
                {service.title}
              </div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-yellow-200 leading-relaxed">
                {service.desc}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 mt-auto">
                {service.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90vw] bg-zinc-700 rounded-4xl h-[1px] mt-10 lg:mt-20 mb-5 lg:mb-10 mx-auto"></div>
    </>
  );
};

export default About;