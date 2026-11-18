
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Featured Projects",
    description: "Projects built with modern technologies",
  },
  {
    value: 3,
    suffix: "+",
    label: "Live Websites",
    description: "Websites available online",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
    description: "Tools and technologies I work with",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="relative w-full overflow-hidden bg-[#020817] px-6 py-16 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,195,255,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
            MY ACHIEVEMENTS
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            My Journey in <span className="text-cyan-400">Numbers</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            A quick look at my projects, experience, and technical skills.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-cyan-400/20 bg-[#07152c]/80 p-8 text-center shadow-[0_0_25px_rgba(0,195,255,0.05)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,195,255,0.15)]"
            >
              <h3 className="text-5xl font-extrabold text-cyan-400">
                {counts[index]}
                {stat.suffix}
              </h3>

              <h4 className="mt-4 text-xl font-bold text-white">
                {stat.label}
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
