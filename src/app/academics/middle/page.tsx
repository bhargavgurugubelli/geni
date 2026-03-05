"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb";


export default function MiddlePage() {




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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Middle School</h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
          <Breadcrumb />
          <p className="text-lg md:text-xl mt-2"></p>
        </div>
      </section>

      {/* MIDDLE SCHOOL SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-12">Middle School</h2>

        <div className="flex flex-col gap-16">

          {/* Introduction (Image Left) */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/123.webp"
                alt="Middle School Skills & Enrichment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <p className="text-gray-700 mb-4">
                Creating thoughtful, intentional, self-directed learners. Middle School is often considered a transformational and challenging time. Physical, intellectual, social, and emotional changes are rapid and intense. Students benefit from rigorous academics, social-emotional support, and enrichment & clubs, which build confidence and prepare them for greater agency in high school.
              </p>
              <p className="text-gray-700">
                We offer an integrated curriculum up to Grade 8. The State Curriculum emphasizes critical thinking, problem-solving, and interdisciplinary learning, ensuring students are prepared for success in their academic stream.
              </p>
            </div>
          </div>

          {/* Core and Additional Subjects (Image Right) */}
          <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/middle.jpg"
                alt="Practical Life Activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Core and Additional Subjects</h3>
              <p className="text-gray-700 mb-4">
                The curriculum emphasizes core subjects including Mathematics, Science, and English. Additional subjects and electives support diverse interests and career paths.
              </p>
              <ul className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Math</li>
                <li>English</li>
                <li>Science</li>
                <li>Global Perspectives/Social</li>
                <li>Second language: Hindi/Telugu</li>
                <li>Third language: French</li>
                <li>Compulsory Telugu (Grade 1-8)</li>
                <li>ICT / Python / AI Program</li>
              </ul>
            </div>
          </div>

          {/* Essential Skills & Enrichment (Image Left) */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="md:w-1/3">
              <img
                src="/montessor.jpg"
                alt="Middle School Skills & Enrichment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Essential Skills & Enrichment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <strong>Critical Thinking & Problem Solving:</strong> Encouraging analytical skills and innovative thinking.
                </li>
                <li>
                  <strong>Research & Inquiry:</strong> Independent research and project work through mastery projects and global perspectives.
                </li>
                <li>
                  <strong>Leadership & Collaboration:</strong> Fostering teamwork and leadership abilities via group projects and extracurricular activities.
                </li>
                <li>
                  <strong>Clubs, Sports & Enrichment Program:</strong> Diverse sports including cricket, basketball, football, athletics; clubs like debate, drama, robotics, environmental initiatives; enrichment programs continuing HI program into high school.
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
