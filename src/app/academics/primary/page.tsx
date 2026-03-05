"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

export default function PrimaryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>

        {/* HEADER */}
        <Header />



        {/* HERO TEXT */}
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Primary School</h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
          <Breadcrumb />
          <p className="text-lg md:text-xl mt-2"></p>
        </div>
      </section>

      {/* PRIMARY SCHOOL SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Primary School</h2>

        <div className="flex flex-col gap-16">

          {/* Introduction (Image Left) */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/002.jpeg"
                alt="Practical Life Activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <p className="text-gray-700 mb-4">
                It takes curiosity, an open mind, and freedom to see things in a new way.
                From Grade 1 onwards, students enter the "Knowledge Phase," a time when their natural inclination towards abstraction and intellectual exploration becomes more pronounced. At Genesis, we embrace this phase with a focus on developing independent learning skills while deepening their sense of community. Emphasis is placed on language development and logical reasoning, with interdisciplinary projects that merge subjects, stimulating curiosity, creativity and problem-solving. Through hands-on activities and collaborative work, students cultivate both academic and social skills.
              </p>
              <p className="text-gray-700">
                Genesis follows the State Curriculum, integrating key learning objectives and foundational concepts to ensure students are well-prepared for their academic journey.
              </p>
            </div>
          </div>

          {/* Subjects Offered (Image Right) */}
          <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/logo_final.png"
                alt="Practical Life Activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Subjects Offered</h3>
              <ul className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Math</li>
                <li>English</li>
                <li>Science</li>
                <li>Global Perspectives/Social</li>
                <li>Second language: Hindi/Telugu</li>
                <li>Third language: Hindi, Telugu &  (Grade 4 & 5 6 & 7)</li>
                <li>Compulsory Telugu (Grade 1-7)</li>
                <li>ICT</li>
              </ul>
            </div>
          </div>

          {/* Key Features (Image Left) */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/001.jpeg"
                alt="Practical Life Activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Key Features of Our Curriculum</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <strong>Optimized Learning Environment:</strong> Classrooms are equipped with appropriate resources to create an engaging learning environment and facilitate deeper understanding of mathematical and scientific concepts through interactive learning.
                </li>
                <li>
                  <strong>Collaborative Learning:</strong> Small group presentations and collaborative projects promote teamwork, critical thinking, and active participation.
                </li>
                <li>
                  <strong>Student-Centered Classrooms:</strong> Designed to engage students through dynamic activities and student-led exploration, moving away from traditional teacher-directed instruction.
                </li>
                <li>
                  <strong>In-Class Topic-Based Library:</strong> A diverse collection of resources supports ongoing learning, encourages independent research, and sparks intellectual curiosity.
                </li>
                <li>
                  <strong>Focus on Emotional and Social Development:</strong> Programs and activities support the development of social-emotional skills, resilience, and self-regulation.
                </li>
              </ul>
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
  );
}
