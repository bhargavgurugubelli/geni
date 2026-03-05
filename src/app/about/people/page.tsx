"use client";

import React from "react";
import Header from "@/components/Header/Header"; // ✅ Import updated Header
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { FaUserTie } from "react-icons/fa";
import Image from "next/image";


export default function OurPeoplePage() {
  const teamMembers = [
    {
      title: "Management",
      description: "Leaders who guide the institution with experience and vision.",
    },
    {
      title: "Faculty",
      description: "Highly trained educators dedicated to student growth.",
    },
    {
      title: "Support Staff",
      description: "The backbone ensuring smooth everyday functioning.",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* HEADER */}
        <Header /> {/* ✅ Pass activePage to highlight menu */}

        {/* HERO SECTION */}
        <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
          <div className="absolute inset-0 pointer-events-none">
            <span className="ball ball-1" />
            <span className="ball ball-2" />
            <span className="ball ball-3" />
            <span className="ball ball-4" />
          </div>
          <div className="max-w-6xl mx-auto mt-36">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our People</h1>
            {/* Breadcrumb (RIGHT AFTER HEADING) */}
            <Breadcrumb />
            <p className="text-lg md:text-xl mt-2">

            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            The People Who Make Us Strong
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Director Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center p-8 text-center">
              <div className="w-72 h-72 rounded-full bg-gray-200 mb-6 overflow-hidden flex-shrink-0 relative shadow-inner">
                <Image src="/people1.jpeg" alt="Narayan Rao" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Narayan Rao</h3>
              <p className="text-lg text-[#c9a227] font-semibold mb-4">Director</p>
              <p className="text-gray-600 leading-relaxed max-w-md">
                "Our vision is to provide unparalleled education where every student feels seen, heard, and empowered to reach their ultimate potential."
              </p>
            </div>

            {/* Correspondent Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center p-8 text-center">
              <div className="w-72 h-72 rounded-full bg-gray-200 mb-6 overflow-hidden flex-shrink-0 relative shadow-inner">
                <Image src="/people2.jpeg" alt="Ruby" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Ruby</h3>
              <p className="text-lg text-[#c9a227] font-semibold mb-4">Correspondent</p>
              <p className="text-gray-600 leading-relaxed max-w-md">
                "We focus on creating a supportive network between parents, teachers, and students to build a solid foundation for lifelong learning."
              </p>
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
