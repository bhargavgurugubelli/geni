"use client";

import Image from "next/image";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function ProgramsPage() {

  // Scroll-based animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* NAVBAR */}
      <Header />

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] overflow-hidden">

        {/* Background Image */}


        {/* Animated yellow balls */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <div className="pt-48 md:pt-56">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Curriculum Overview
            </h1>

            <p className="text-sm md:text-base opacity-80">
              Academics › Curriculum Overview
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg font-semibold italic">
          “Curiosity is the foundation of the presence of the school”
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          We provide a diverse and enriching curriculum that supports
          students at every stage of their educational journey.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Our academic framework integrates strong foundational knowledge
          with creativity, collaboration, and real-world application.
        </p>
      </section>

      {/* PROGRAM CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="grid md:grid-cols-2 gap-6 slide-left">
          <ProgramCard
            title="Day Care"
            range="6 months and up"
            desc="A safe, nurturing, and stimulating environment focusing on early developmental milestones."
            color="#e45a4d"
          />
          <ProgramCard
            title="Preschool"
            range="18 months to 6 years"
            desc="Montessori-based learning that builds independence, language development, and early numeracy."
            color="#3fb2b2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 slide-right">
          <ProgramCard
            title="Primary School"
            range="Grade 1 - Grade 5"
            desc="Strong academic foundation focusing on literacy, numeracy, and inquiry-based learning."
            color="#2f6f88"
          />
          <ProgramCard
            title="Middle School"
            range="Grade 6 - Grade 7"
            desc="Integrated curriculum promoting analytical thinking and subject mastery."
            color="#f2c94c"
          />
        </div>
      </section>

      {/* STATE CURRICULUM */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/cambridge.png"
          alt="State Curriculum"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            State Curriculum
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A comprehensive state-recognized curriculum focused on inquiry-based learning
            and conceptual understanding.
          </p>
        </div>
      </section>

      {/* EXTRACURRICULAR */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/666.jpeg"
          alt="Extracurricular Activities"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
        <ul className="space-y-4 text-gray-700 text-lg">
          <li>✔ Sports and athletics</li>
          <li>✔ Debate, robotics, drama, and cultural clubs</li>
          <li>✔ Creative arts and leadership programs</li>
        </ul>
      </section>

      <Footer />

      {/* HERO BALL ANIMATION */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.75;
          animation: float 10s infinite ease-in-out;
        }
        .ball-1 { top: 20%; left: 15%; }
        .ball-2 { top: 55%; left: 25%; animation-delay: 2s; }
        .ball-3 { top: 35%; right: 20%; animation-delay: 4s; }
        .ball-4 { bottom: 25%; right: 30%; animation-delay: 6s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* PROGRAM CARD */
function ProgramCard({
  title,
  range,
  desc,
  color,
}: {
  title: string;
  range: string;
  desc: string;
  color: string;
}) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="p-6 md:p-8 rounded-xl text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-1 font-medium">{range}</p>
      <p className="mt-3 opacity-90 leading-relaxed">{desc}</p>
    </div>
  );
}
