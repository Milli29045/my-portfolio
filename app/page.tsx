"use client";
import { Sora, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
const roles = [
  "Full-Stack Web Developer",
  "React Developer",
  "Next.js Developer",
  "MERN Stack Developer",
];

function TypingText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentRole.substring(0, text.length + 1));

          if (text.length + 1 === currentRole.length) {
            setDeleting(true);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          if (text.length === 1) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-cyan-400">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const projects = [
  {
    name: "Smart School",
    description:
      "A modern educational website designed to provide school information and an engaging online experience.",
    technology: "Next.js",
    link: "https://smart-school-khaki.vercel.app/",
  },
  {
    name: "FraudShield",
    description:
      "A fraud detection platform designed to help users identify suspicious apps, messages, websites and security threats.",
    technology: "Next.js",
    link: "https://fraudshield-test.vercel.app/",
  },
  {
    name: "Fashion Hub",
    description:
      "A modern fashion e-commerce store featuring clothing collections, product browsing, shopping cart and user authentication.",
    technology: "React.js",
    link: "https://fashion-hub-milli.vercel.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MERN Stack",
  "PHP",
  "Laravel",
  "MySQL",
  "Prisma",
  "PostgreSQL",
  "Git & GitHub",
  "Responsive Design",
];

const services = [
  {
    title: "Business Websites",
    description:
      "Modern and responsive websites to help businesses build their online presence.",
    icon: "✦",
  },
  {
    title: "School Websites",
    description:
      "Professional educational websites for schools and institutions.",
    icon: "▣",
  },
  {
    title: "E-commerce Websites",
    description:
      "Online shopping websites with product collections and cart functionality.",
    icon: "🛍",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-cyan-400/20 bg-[#020b20]/90 px-5 py-4 shadow-[0_4px_25px_rgba(0,180,255,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight"
          >
            <span className="text-3xl text-cyan-400 transition duration-300 group-hover:rotate-12">
              {"</>"}
            </span>
            <span className="text-white">
              Malaika <span className="text-cyan-400">Mohsin</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className={`${body.className} hidden items-center gap-8 md:flex text-base font-semibold tracking-wide text-white`}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="relative py-2 text-white transition-all duration-300 hover:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {name}
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
<div className="flex items-center gap-2">
  <a
    href="#contact"
    className="group flex items-center gap-1 rounded-full border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2.5 text-sm font-bold text-[#020b20]"
  >
    Hire Me
    <span>→</span>
  </a>

  <ThemeToggle />
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
       className={`${body.className} relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden px-6 pt-8 pb-16`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(2, 6, 23, 0.82), rgba(2, 6, 23, 0.82)), url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2000&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-6 font-semibold tracking-[0.3em] text-cyan-400">
            HELLO, I'M MALAIKA MOHSIN
          </p>

          <h1 className={`${display.className} text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl`}>
            <TypingText />
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build modern, responsive, and powerful web applications
            using React.js, Next.js, Laravel, Node.js, Express.js,
            MongoDB, and MySQL. Turning ideas into digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-cyan-400/60 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              Contact Me
            </a>

            <a
              href="/malaika-cv.pdf"
              download="malaika-cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400 px-7 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-[#020817]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {["React.js", "Next.js", "Laravel", "MongoDB", "MERN Stack"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative w-full overflow-hidden bg-[#020b20] px-6 py-12 mt-20 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#0875ff,transparent_35%),radial-gradient(circle_at_80%_70%,#063b80,transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Profile Section */}
          <div className="relative flex flex-col items-center">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border-[5px] border-cyan-400 shadow-[0_0_35px_#00cfff] sm:h-[380px] sm:w-[380px] overflow-hidden group">
              <img
                src="/profile.png"
                alt="Malaika Mohsin"
                className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="relative -mt-5 rounded-full border border-cyan-400 bg-[#020b20] px-8 py-4 text-center shadow-[0_0_20px_#0875ff]">
              <p className="font-bold tracking-wide text-cyan-400 text-sm">
                FULL-STACK DEVELOPER
              </p>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Malaika Mohsin
              </h3>
            </div>
          </div>

          {/* About Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400 px-5 py-2.5 font-bold text-cyan-400 text-sm">
              <span className="text-lg">●</span>
              ABOUT ME
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Who Am I
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1">
                As A Developer?
              </span>
            </h2>

            <div className="mt-6 border-l-4 border-cyan-400 pl-6 text-base leading-8 text-gray-300">
              I'm <strong className="text-white">Malaika Mohsin</strong>,
              a passionate Full-Stack Web Developer interested in building
              modern, responsive and user-friendly websites. I work with
              cutting-edge technologies and love turning creative ideas
              into powerful digital solutions.
            </div>

            <p className="mt-4 text-base leading-8 text-gray-300">
              My technology interests include React.js, Next.js, Laravel,
              Node.js, Express.js and MongoDB.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-cyan-500/50 bg-cyan-500/5 px-3 py-4 text-center transition hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,204,255,0.2)]">
                <span className="text-2xl text-cyan-400">{"</>"}</span>
                <p className="mt-2 font-semibold text-sm">Clean Code</p>
              </div>

              <div className="rounded-xl border border-cyan-500/50 bg-cyan-500/5 px-3 py-4 text-center transition hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,204,255,0.2)]">
                <span className="text-2xl text-cyan-400">⚡</span>
                <p className="mt-2 font-semibold text-sm">Fast Performance</p>
              </div>

              <div className="rounded-xl border border-cyan-500/50 bg-cyan-500/5 px-3 py-4 text-center transition hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,204,255,0.2)]">
                <span className="text-2xl text-cyan-400">♥</span>
                <p className="mt-2 font-semibold text-sm">Client Satisfaction</p>
              </div>
            </div>

            <a
              href="#skills"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-base font-bold text-[#020b20] shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              Learn More <span className="text-xl">→</span>
            </a>
          </div>

        </div>
      </section>
<Stats />
      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 font-semibold text-cyan-400">
          MY EXPERTISE
        </p>

        <h2 className="mb-10 text-4xl font-bold">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center font-medium transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-cyan-400">
            WHAT I DO
          </p>

          <h2 className="mb-10 text-4xl font-bold">
            My Services
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="mb-5 text-3xl text-cyan-400">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
     <Projects projects={projects} />

      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#020b20] px-6 py-20 text-white"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-4 font-bold tracking-[0.3em] text-cyan-400">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Let's Work <span className="text-cyan-400">Together</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Have a project in mind or looking for a passionate developer?
              Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid items-center gap-12 rounded-3xl border border-cyan-500/30 bg-[#071832]/80 p-7 shadow-[0_0_35px_rgba(0,180,255,0.08)] md:grid-cols-2 md:p-12">
            <div>
              <h3 className="text-3xl font-bold leading-snug">
                Let's Build Something
                <span className="block text-cyan-400">Amazing Together!</span>
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                I am a passionate Full-Stack Web Developer specializing in
                modern, responsive and user-friendly web applications.
                I work with HTML, CSS, JavaScript, React.js, Next.js,
                Node.js, Express.js, Laravel and MongoDB.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-2xl text-cyan-400">
                  ✉
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Email Address</p>
                  <a
                    href="mailto:malikashoukat777@gmail.com"
                    className="break-all font-semibold text-white transition hover:text-cyan-400"
                  >
                    malikashoukat777@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="mailto:malikashoukat777@gmail.com?subject=Project%20Inquiry"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-[#020b20] shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                <span>Send Me an Email</span>
                <span className="text-xl">→</span>
              </a>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-cyan-400/30 shadow-[0_0_30px_rgba(0,200,255,0.15)]">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                  alt="Developer working on a computer"
                  className="h-[320px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020b20] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-2xl font-bold text-white">
                    Let's Connect!
                  </p>
                  <p className="mt-2 text-sm text-cyan-300">
                    Turning ideas into digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923281717213"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_30px_rgba(37,211,102,0.7)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L0 24l6.28-1.65a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.19-1.24-6.18-3.49-8.42ZM12.09 21.8h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.45-4.44 9.89-9.92 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-[#020817] px-6 pt-16 pb-8 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-slate-700/60 pb-12 md:grid-cols-3">
            
            <div>
              <a href="#home" className="text-3xl font-extrabold tracking-tight">
                Malaika <span className="text-cyan-400">Mohsin.</span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Full-Stack Web Developer passionate about building
                modern, responsive and powerful digital experiences.
                Let's turn your ideas into reality.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://wa.me/923281717213"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-green-400 hover:bg-green-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L0 24l6.28-1.65a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.19-1.24-6.18-3.49-8.42ZM12.09 21.8h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.45-4.44 9.89-9.92 9.89Z"/>
                  </svg>
                </a>

                <a
                  href="mailto:malikashoukat777@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
                >
                  ✉
                </a>

                <a
                  href="https://github.com/Milli29045"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
                  </svg>
                </a>

                <a
                  href="https://youtube.com/@its_web.developer?si=6OcWkoV_uGhZxD1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-red-500 hover:bg-red-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-400">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Skills", "#skills"],
                  ["Services", "#services"],
                  ["Projects", "#projects"],
                  ["Contact", "#contact"],
                ].map(([name, link]) => (
                  <a
                    key={name}
                    href={link}
                    className="transition hover:translate-x-1 hover:text-cyan-400"
                  >
                    → {name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm text-slate-400">
                <a
                  href="mailto:malikashoukat777@gmail.com"
                  className="flex items-center gap-3 transition hover:text-cyan-400"
                >
                  <span className="text-xl text-cyan-400">✉</span>
                  malikashoukat777@gmail.com
                </a>

                <a
                  href="https://wa.me/923281717213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-green-400"
                >
                  <span className="text-xl text-green-400">☏</span>
                  +92 328 1717213
                </a>
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Let's Talk <span>→</span>
              </a>
            </div>

          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center text-sm text-slate-500 sm:flex-row">
            <p>
              © 2026 <span className="font-semibold text-cyan-400">Malaika Mohsin</span>. All Rights Reserved.
            </p>

            <a href="#home" className="transition hover:text-cyan-400">
              Back to Top ↑
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}