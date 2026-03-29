"use client";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Index from "./components/Index";
import Link from "next/link";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [skillsTop, setSkillsTop] = useState(0);
  const [contactTop, setContactTop] = useState(0);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update skills section position
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        setSkillsTop(window.scrollY + rect.top);
      }

      // Update contact section position
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setContactTop(window.scrollY + rect.top);
      }
    };

    const handleResize = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        setSkillsTop(window.scrollY + rect.top);
      }
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setContactTop(window.scrollY + rect.top);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Skills section scroll animations (1200px to 1600px)
  const getSkillsRelativeScroll = () => {
    const startScroll = 1600;
    const endScroll = 1800;

    if (scrollY < startScroll) return 0;
    if (scrollY > endScroll) return endScroll - startScroll;

    return scrollY - startScroll;
  };

  const getSkillsAnimationStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getSkillsRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.5;
    const opacity = Math.max(0, 1 - relativeScroll / 300);
    const scale = Math.max(0.7, 1 - relativeScroll / 250);

    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: "all 0.05s ease-out",
    };
  };

  // Contact section scroll animations (2000px to 2400px)
  const getContactRelativeScroll = () => {
    const startScroll = 2800;
    const endScroll = 3000;

    if (scrollY < startScroll) return 0;
    if (scrollY > endScroll) return endScroll - startScroll;

    return scrollY - startScroll;
  };

  const getContactAnimationStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getContactRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.4;
    const opacity = Math.max(0, 1 - relativeScroll / 300);
    const scale = Math.max(0.8, 1 - relativeScroll / 200);

    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: "all 0.05s ease-out",
    };
  };

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      email: data.email,
      fName: data.fName,
      lName: data.lName,
      message: data.message,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    toast("We will Reach You Shortly ❤️ !!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    reset();
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main min-h-screen bg-red-700 text-white text-2xl overflow-x-hidden pt-20 lg:pt-28">
        <Navbar />
        <Index />
        <About />

        {/* Skills Section with Animations */}
        <div
          ref={skillsRef}
          className="skills flex flex-col items-center gap-10 justify-center w-[90vw] mx-auto "
        >
          <div
            className="mt-5 text-3xl border-5 md:tracking-[8px] tracking-[5px] md:w-82 w-52 font-bold md:h-20 h-14 flex items-center justify-center"
            style={getSkillsAnimationStyle(0)}
          >
            SKILLS
          </div>

          <div className="  flex flex-col md:gap-15 gap-8 md:items-center items-start  w-[80%]">
            <div
              className="w-[60%] md:w-full  md:pl-32 pl-0 font-bold md:text-[28px] text-[12px]  tracking-[5px]  flex md:justify-start "
              style={getSkillsAnimationStyle(1500)}
            >USING NOW:
            </div>

            {/* First row of skills */}
            <div
              className="flex w-[100%] md:gap-15 gap-8  items-center justify-center"
              style={getSkillsAnimationStyle(1500)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="html480.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="HTML_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px] ">HTML</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="css.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="CSS_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">CSS</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="js.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="JAVASCRIPT_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">JavaScript</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="tailwind.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="TAILWIND_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Tailwind</span>
              </div>
            </div>

            {/* Second row of skills */}
            <div
              className="flex w-[100%] gap-5 items-center justify-center"
              style={getSkillsAnimationStyle(2000)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="express.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="EXPRESS_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Express JS</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="bootstrap.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="BOOTSTRAP_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Bootstrap</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="mongo.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="MONGO_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Mongo DB</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="nextJS.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="NEXTJS_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Next JS</span>
              </div>
            </div>

            {/* Third row of skills */}
            <div
              className="flex w-[100%] gap-5 items-center justify-center"
              style={getSkillsAnimationStyle(200)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="git.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="GIT_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Git</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="github.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="GITHUB_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">GitHub</span>
              </div>
            </div>
          </div>

          {/* Learning Section */}
          <div className="  flex flex-col md:gap-15 gap-6 items-center w-[80%]">
            <div
              className="w-[100%]  md:pl-32 pl-0 font-bold md:text-[28px] text-[12px]  tracking-[5px]  flex"
              style={getSkillsAnimationStyle(250)}
            >
              LEARNING:
            </div>
            <div
              className="flex w-[100%] md:gap-15 gap-8  md:pl-25 "
              style={getSkillsAnimationStyle(300)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="typescript.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="TYPESCRIPT_LOGO"
                />
                <span className="font-bold  md:text-2xl text-[12px]">TypeScript</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="java.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="JAVA_LOGO"
                />
                <span className="font-bold  md:text-2xl text-[12px]">Java</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="sql.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="SQL_LOGO"
                />
                <span className="font-bold  md:text-2xl text-[12px]">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] bg-zinc-700 rounded-4xl h-[1px] md:mt-40 mt-20 md:mb-20 mb-10 flex justify-center items-center m-auto"></div>

        {/* Contact Section */}
        <div ref={contactRef} className="contact w-full py-10 px-4 flex flex-col lg:flex-row gap-10">

          {/* Form Side */}
          <div className="conInputs w-full lg:w-[60%] flex flex-col items-center gap-6">

            <div
              className="text-xl sm:text-2xl lg:text-3xl border-5 tracking-[4px] lg:tracking-[6px] w-36 sm:w-48 lg:w-72 font-bold h-10 lg:h-16 flex items-center justify-center"
              style={getContactAnimationStyle(0)}
            >
              CONTACT
            </div>

            <div
              className="text-xs sm:text-sm lg:text-[15px] font-bold text-gray-400"
              style={getContactAnimationStyle(50)}
            >
              Just drop your details we will reach you!!
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 items-center w-full max-w-lg"
              style={getContactAnimationStyle(100)}
            >
              {/* First + Last Name */}
              <div className="flex flex-col sm:flex-row gap-4 w-full px-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-xs font-bold text-indigo-400">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-10 w-full bg-zinc-700 px-4 focus:outline-2 focus:outline-purple-500 text-sm rounded-2xl font-bold"
                    {...register("fName", {
                      required: { value: true, message: "Required" },
                      minLength: { value: 3, message: "Min 3 chars" },
                      maxLength: { value: 8, message: "Max 8 chars" },
                    })}
                  />
                  {errors.fName && <span className="text-red-500 text-[10px]">{errors.fName.message}</span>}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="text-xs font-bold text-indigo-400">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-10 w-full bg-zinc-700 px-4 focus:outline-2 focus:outline-purple-500 text-sm rounded-2xl font-bold"
                    {...register("lName", {
                      required: { value: true, message: "Required" },
                      minLength: { value: 3, message: "Min 3 chars" },
                      maxLength: { value: 8, message: "Max 8 chars" },
                    })}
                  />
                  {errors.lName && <span className="text-red-500 text-[10px]">{errors.lName.message}</span>}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 w-full px-4">
                <label className="text-xs font-bold text-indigo-400">E-Mail</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="h-10 w-full bg-zinc-700 px-4 focus:outline-2 focus:outline-purple-500 text-sm rounded-2xl font-bold"
                  {...register("email", {
                    required: { value: true, message: "Required" },
                    pattern: { value: /@/, message: "Must contain @" },
                    minLength: { value: 3, message: "Min 3 chars" },
                    maxLength: { value: 30, message: "Max 30 chars" },
                  })}
                />
                {errors.email && <span className="text-red-500 text-[10px]">{errors.email.message}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 w-full px-4">
                <label className="text-xs font-bold text-indigo-400">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="h-28 w-full bg-zinc-700 px-4 py-3 focus:outline-2 focus:outline-purple-500 font-bold rounded-2xl text-sm resize-none"
                  {...register("message", {
                    required: { value: true, message: "Required" },
                    minLength: { value: 3, message: "Min 3 chars" },
                    maxLength: { value: 200, message: "Max 200 chars" },
                  })}
                />
                {errors.message && <span className="text-red-500 text-[10px]">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                className="w-32 h-10 cursor-pointer bg-yellow-300 font-bold hover:bg-yellow-500 text-black hover:w-40 transition-all duration-300 ease-in-out text-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div
            className="image w-full lg:w-[40%] flex justify-center items-center"
            style={getContactAnimationStyle(150)}
          >
            <img src="team2.jpg" alt="Join US" className="w-full max-h-[500px] object-cover rounded-2xl" />
          </div>

        </div>

        <div className="w-[90vw] bg-zinc-700 rounded-4xl  h-[1px] md:mt-40 mt-10  mb-10 flex justify-center items-center m-auto"></div>

        {/* FOOTER */}
        <div className=" w-full md:h-53 h-30 mt-4 p-3 md:mt-0  flex flex-col gap-6  items-center justify-center border-red-600 bg-zinc-900">
          <div className=" font-bold md:text-[24px] text-[12px]">Find Me On :</div>
          <div className=" md:gap-3 gap-1  w-[70%] h-16 flex items-center justify-center">
            <Link href={"https://github.com/AD1TYA-A1"}>
              <img src="github.png" alt="GitHUB" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
            <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
              <img src="instagram.png" alt="INSTAGRAM" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
            <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
              <img src="facebook.png" alt="INSTAGRAM" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
            <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
              <img src="twitter.png" alt="INSTAGRAM" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
          </div>
          <div className=" text-gray-500 font-bold md:text-[14px] text-[7px] flex flex-col items-center justify-center ">
            ©Copyright
            <div className=" text-center md:text-[10px] text-[8px]">
              We Trust your Priorities ❤️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}