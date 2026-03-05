"use client";

import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function CampusPage() {
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
              Our Campuses
            </h1>

            <p className="text-sm md:text-base opacity-80">
              About Us › Our Campuses
            </p>
          </div>
        </div>
      </section>



      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-gray-700 max-w-4xl">
            GENESIS began as a Montessori preschool and has grown into a
            full-fledged K–12 institution. Our campuses are thoughtfully
            designed to provide safe, nurturing, and stimulating environments
            for holistic development.
          </p>
        </section>

        {/* MAIN CAMPUS */}
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10 items-start">
          {/* IMAGE */}
          <div className="md:col-span-2">
            <Image
              src="/444.jpeg"
              alt="Genesis Campus"
              width={1200}
              height={700}
              className="rounded-xl object-cover w-full h-[420px]"
            />

            <h2 className="mt-6 text-2xl font-bold">
              Genesis School Campus
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Our campus is designed to support collaborative
              learning, creativity, and academic excellence. The campus
              includes modern classrooms, activity zones, science labs,
              libraries, and outdoor play areas.
            </p>
          </div>

          {/* INFO CARD */}
          <div className="bg-[#355c6b] text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-4">
              Genesis Campus
            </h3>

            <p className="text-sm leading-relaxed opacity-90">
              Day Care – Grade 7 <br />
              Visakha A Colony <br />
              Srikakulam – 532001
            </p>

            <div className="mt-6">
              <p className="text-sm opacity-80">Phone Number</p>
              <p className="font-semibold mt-1">
                +91 72072 07342
              </p>
            </div>
          </div>
        </section>


      </main>

      <Footer />

      {/* HERO DOT ANIMATION */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 9px;
          height: 9px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.75;
          animation: float 10s infinite ease-in-out;
        }
        .ball-1 { top: 25%; left: 15%; }
        .ball-2 { top: 55%; left: 30%; animation-delay: 2s; }
        .ball-3 { top: 35%; right: 22%; animation-delay: 4s; }
        .ball-4 { bottom: 25%; right: 35%; animation-delay: 6s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}