"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb";

export default function PhilosophyPage() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* HEADER */}
        <Header /> {/* ✅ Use Header here */}

        {/* HERO SECTION */}
        <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
          <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>
          <div className="max-w-6xl mx-auto mt-36">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Philosophy</h1>
            {/* Breadcrumb (RIGHT AFTER HEADING) */}
                    <Breadcrumb />
            <p className="text-lg md:text-xl mt-2">
              
            </p>

          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
          <h2 className="text-3xl font-bold text-green-900 mb-12">Core Philosophies</h2>

          <div className="flex flex-col gap-12">
            {/* Montessori */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="md:w-1/3">
                <img
                  src="/montesory.jpg"
                  alt="Montessori"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Montessori</h3>
                <p className="text-gray-700">
                  Dr. Maria Montessori founded the Montessori method in the early 1900s. Her scientific approach to education was shaped around the individual needs of the child. The goal was to develop the child and their whole personality.

                  Built on three primary principles – observation, individual freedom, and preparation of the environment – Montessori classroom is designed as an environment where children could freely choose from a number of developmentally appropriate activities.
                </p>
              </div>
            </div>

            {/* Multiple Intelligence */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="md:w-1/3">
                <img
                  src="/multipleinteligence.jpg"
                  alt="Multiple Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Multiple Intelligence</h3>
                <p className="text-gray-700">
                  Genesis believes in multiple intelligences theory. Every child is exposed to a broad list of activities to identify their dominant intelligence in our school. MI theory suggests that no one set of teaching strategies will work best for all students at all times. All children have different proclivities in the eight intelligences, so any particular strategy is likely to be successful with several students, and yet, not for others.

                  Our MI program allows the child to explore different intelligence’s until 6/7 years of age. The curriculum is designed to align with international music, classical music, dance, gymnastics, art, and kinetics programs.
                </p>
              </div>
            </div>

            {/* Higher Intelligence */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="md:w-1/3">
                <img
                  src="/higherinteligence.jpg"
                  alt="Higher Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Higher Intelligence</h3>
                <p className="text-gray-700">
                  In Genesis, after 6-7 years of age, each child is identified with their higher or dominant Intelligence (HI). They are then encouraged to pursue that stream to a higher level. The programs are created to span a period of 10 years. Each child spends long periods of time on a regular basis to kindle the HI element in them & find their inner joy.

                  It is a curriculum designed to align with international music, classical music, dance, gymnastics, art, and kinetics programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        {/* ✅ HERO ANIMATION STYLES */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 10s infinite ease-in-out;
        }

        .ball-1 {
          top: 20%;
          left: 15%;
        }

        .ball-2 {
          top: 60%;
          left: 30%;
          animation-delay: 2s;
        }

        .ball-3 {
          top: 35%;
          right: 20%;
          animation-delay: 4s;
        }

        .ball-4 {
          bottom: 20%;
          right: 35%;
          animation-delay: 6s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #c9a227, #2ecc71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      </div>
    </>
  );
}
