"use client";
import React from "react";
import Link from "next/link";
import Script from "next/script";

const Portfolio = () => {
  const projects = [
    {
      id: "GetChai",
      title: "GET CHAI ☕",
      images: [
        "GetChai/Home.jpeg",
        "GetChai/Auth.jpeg",
        "GetChai/Dashboard.jpeg",
        "GetChai/Profile.jpeg",
        "GetChai/PaymentPage.jpeg",
        "GetChai/Payment.jpeg",
        "GetChai/PaySucessSlip.jpeg",
      ],
      features: [
        "Payment Gateway Integration",
        "Authentications",
        "Responsiveness",
        "Multiple account creations",
        "DataBase Connection",
        "Dynamic routing",
        "API routing",
        "Editable Profile",
      ],
      dependencies: [
        "NextJS",
        "Next-Auth",
        "Mongoose",
        "React",
        "Razorpay",
        "React-Dom",
        "React Hook Form",
        "React Toastify",
      ],
    },
    {
      id: "PassManager",
      title: "Pass Manager 🔐",
      images: [
        "PassOp/edit.jpeg",
        "PassOp/copy.jpeg",
        "PassOp/delete.jpeg",
        "PassOp/saving.jpeg",
      ],
      features: [
        "Secure Password Storage",
        "Copy to Clipboard",
        "Password Generation",
        "Edit/Delete Functions",
        "Local Storage",
        "Search Functionality",
        "Responsive Design",
        "Data Encryption",
      ],
      dependencies: [
        "React",
        "React-Dom",
        "Tailwind CSS",
        "UUID",
        "React Icons",
        "MongoDB",
        "React Toastify",
        "Vite",
      ],
    },
    {
      id: "Linktree",
      title: "LINK TREE 🎄",
      images: [
        "Linktree/Join.jpeg",
        "Linktree/homePage.jpeg",
        "Linktree/profile.jpeg",
        "Linktree/profile2.O.jpeg",
        "Linktree/profileEdit.jpeg",
      ],
      features: [
        "Aesthetic Design",
        "Dynamic Routing",
        "No Page Refresh",
        "Notification Bar",
        "Smooth Transitions",
        "Custom Profile Links",
        "Social Media Integration",
        "User Authentication",
      ],
      dependencies: [
        "NextJS",
        "Tailwind CSS",
        "React",
        "React Toastify",
        "MongoDB",
        "Mongoose",
        "Next-Auth",
      ],
    },
    {
      id: "UrlShortener",
      title: "URL SHORTENER 🔗",
      images: [
        "UrlShort/home.jpeg",
        "UrlShort/nofill.jpeg",
        "UrlShort/fill.jpeg",
        "UrlShort/link.jpeg",
        "UrlShort/done.jpeg",
      ],
      features: [
        "URL Shortening Algorithm",
        "Custom Short URLs",
        "Click Analytics",
        "QR Code Generation",
        "Link Management",
        "Copy to Clipboard",
        "Responsive Design",
        "Real-time Validation",
      ],
      dependencies: [
        "NextJS",
        "Tailwind CSS",
        "React",
        "React Toastify",
        "MongoDB",
        "Mongoose",
        "ShortId",
        "QR Code Generator",
      ],
    },
  ];

  const socialLinks = [
    { href: "https://github.com/AD1TYA-A1", icon: "github.png", alt: "GitHub" },
    { href: "https://www.instagram.com/4d1tya.ownsssss", icon: "instagram.png", alt: "Instagram" },
    { href: "https://www.facebook.com", icon: "facebook.png", alt: "Facebook" },
    { href: "https://www.twitter.com", icon: "twitter.png", alt: "Twitter" },
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
        crossOrigin="anonymous"
      />
      <Script src="https://cdn.lordicon.com/lordicon.js" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
        crossOrigin="anonymous"
      />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <button className="flex items-center gap-2 hover:text-purple-400 transition-colors group">
                <lord-icon
                  src="https://cdn.lordicon.com/obyhgzls.json"
                  trigger="loop"
                  stroke="bold"
                  state="loop-cycle"
                  colors="primary:#848484,secondary:#e88c30,tertiary:#ffc738,quaternary:#ebe6ef"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="text-xs font-bold tracking-widest hidden sm:block">
                  ADITYA DEV X
                </span>
              </button>
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">
              PROJECTS
            </h1>
          </div>
        </header>

        {/* Projects Section */}
        <main className="container mx-auto px-4 py-12 space-y-24">
          {projects.map((project, index) => (
            <div key={project.id}>
              <article className="max-w-6xl mx-auto">
                {/* Project Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 lg:mb-12 tracking-wider border-2 border-gray-700 rounded-lg py-4 px-6 inline-block mx-auto w-full max-w-md">
                  {project.title}
                </h2>

                {/* Carousel */}
                <div className="mb-8 lg:mb-12 rounded-xl overflow-hidden shadow-2xl">
                  <div id={`carousel${project.id}`} className="carousel slide">
                    <div className="carousel-inner">
                      {project.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                        >
                          <img
                            src={img}
                            className="d-block w-100 object-cover"
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            style={{ maxHeight: "500px" }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel${project.id}`}
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel${project.id}`}
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                {/* Features & Dependencies Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Features Card */}
                  <div className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-yellow-400 mb-4 tracking-wider">
                      TOP FEATURES
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm lg:text-base font-semibold text-gray-300 flex items-start"
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dependencies Card */}
                  <div className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-yellow-400 mb-4 tracking-wider">
                      DEPENDENCIES
                    </h3>
                    <ul className="space-y-2">
                      {project.dependencies.map((dep, idx) => (
                        <li
                          key={idx}
                          className="text-sm lg:text-base font-semibold text-gray-300 flex items-start"
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{dep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16 lg:mt-24" />
              )}
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="bg-zinc-900 border-t border-gray-800 py-12 mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Find Me On:</h2>
            <div className="flex items-center justify-center gap-6 mb-6">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className="w-10 h-10 sm:w-12 sm:h-12 hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
            <div className="text-center text-gray-500 font-bold">
              <p className="text-sm">©Copyright {new Date().getFullYear()}</p>
              <p className="text-xs mt-2">We Trust your Priorities ❤️</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;