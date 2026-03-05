"use client";

import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function AdmissionsPage() {
  const steps = [
    {
      title: "Submit Application",
      desc: "Complete the online form or visit our admissions office.",
      icon: <FaDiceOne />,
    },
    {
      title: "Meet with Counselor",
      desc: "Discuss your child's needs and our educational approach.",
      icon: <FaDiceTwo />,
    },
    {
      title: "Child Observation",
      desc: "Assess your child's readiness for placement.",
      icon: <FaDiceThree />,
    },
    {
      title: "School Tour",
      desc: "Explore our facilities and learning environment.",
      icon: <FaDiceFour />,
    },
    {
      title: "Admission Decision",
      desc: "Receive notification, next steps and required documents.",
      icon: <FaDiceFive />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO – MATCHED STYLE */}
      {/* HERO */}
<section className="relative bg-[#202a22] text-white min-h-[80vh] overflow-hidden">

  {/* Floating dots */}
  <div className="absolute inset-0 pointer-events-none">
    <span className="ball ball-1" />
    <span className="ball ball-2" />
    <span className="ball ball-3" />
    <span className="ball ball-4" />
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
    <div className="pt-48 md:pt-56">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Admissions Process
      </h1>

      <p className="text-sm md:text-base opacity-80">
        Admissions › Admissions Process
      </p>
    </div>
  </div>
</section>


      <main className="flex-1">
        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 py-14 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how GENESIS SCHOOL’s vibrant community and learning
            programmes can meet your child’s educational needs. Our admissions
            process provides a clear and welcoming pathway.
          </p>
        </section>

        {/* STEPS */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">
                  <span className="text-5xl text-[#c9a227]">
                    {s.icon}
                  </span>
                </div>

                <h3 className="font-semibold mt-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-3">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              For more detailed information or assistance, please contact our
              admissions office.
            </p>

            <Link
              href="/admissions/schedule"
              className="inline-block bg-[#202a22] text-white px-8 py-3 rounded-full hover:opacity-90"
            >
              Schedule a Visit
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* HERO DOT ANIMATION */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.8;
          animation: float 10s infinite ease-in-out;
        }
        .ball-1 { top: 25%; left: 15%; }
        .ball-2 { top: 60%; left: 30%; animation-delay: 2s; }
        .ball-3 { top: 35%; right: 22%; animation-delay: 4s; }
        .ball-4 { bottom: 25%; right: 35%; animation-delay: 6s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
