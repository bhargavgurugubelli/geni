"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

const values = [
  {
    no: "01",
    title: "Curiosity",
    desc: "Inspiring a love for learning and inquiry.",
    color: "bg-yellow-300",
  },
  {
    no: "02",
    title: "Creativity",
    desc: "Encouraging innovation and original thinking.",
    color: "bg-blue-300",
  },
  {
    no: "03",
    title: "Collaboration",
    desc: "Fostering teamwork and collective problem-solving.",
    color: "bg-teal-300",
  },
  {
    no: "04",
    title: "Character & Excellence",
    desc: "Building integrity, resilience, and a pursuit of excellence.",
    color: "bg-red-300",
  },
  {
    no: "05",
    title: "Leadership & Global Citizenship",
    desc: "Developing responsible leaders with a global perspective.",
    color: "bg-slate-300",
  },
  {
    no: "06",
    title: "Community",
    desc: "Strengthening connections and inclusivity within and beyond the school.",
    color: "bg-green-300",
  },
];

export default function VisionPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16 overflow-hidden">
        <span className="ball ball-1 top-[20%] left-[15%]" />
        <span className="ball ball-2 top-[60%] left-[30%] delay-[2s]" />
        <span className="ball ball-3 top-[35%] right-[20%] delay-[4s]" />
        <span className="ball ball-4 bottom-[20%] right-[35%] delay-[6s]" />

        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Vision & Values
          </h1>
          <Breadcrumb />
        </div>
      </section>

      {/* VISION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg p-6 bg-white flex items-center justify-center">
            <Image src="/logo.png" alt="Our Vision" fill className="object-contain p-4" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Genesis School, our vision is to nurture confident, compassionate,
              and curious learners who are prepared to thrive in a rapidly
              evolving global society.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We aim to create an inclusive learning environment that encourages
              critical thinking, creativity, and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES FLOWCHART SECTION */}
      <section className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-20">
            Our Core Values
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">

            {[
              {
                no: "01",
                title: "Curiosity",
                desc: "Inspiring a love for learning and inquiry.",
                color: "bg-yellow-400",
              },
              {
                no: "02",
                title: "Creativity",
                desc: "Encouraging innovation and original thinking.",
                color: "bg-blue-700",
              },
              {
                no: "03",
                title: "Collaboration",
                desc: "Fostering teamwork and collective problem-solving.",
                color: "bg-teal-400",
              },
              {
                no: "04",
                title: "Character & Excellence",
                desc: "Building integrity, resilience, and a pursuit of excellence.",
                color: "bg-red-600",
              },
              {
                no: "05",
                title: "Leadership & Global Citizenship",
                desc: "Developing responsible leaders with a global perspective.",
                color: "bg-slate-700",
              },
              {
                no: "06",
                title: "Community",
                desc: "Strengthening connections and inclusivity within and beyond the school.",
                color: "bg-green-600",
              },
            ].map((item, index) => {
              const widths = [
                "max-w-[520px]",
                "max-w-[580px]",
                "max-w-[640px]",
                "max-w-[700px]",
                "max-w-[760px]",
                "max-w-[820px]",
              ];

              return (
                <div key={item.no} className="flex items-center gap-6">

                  {/* NUMBER */}
                  <div className="text-3xl font-bold text-gray-400 w-12">
                    {item.no}
                  </div>

                  {/* ARROW CARD */}
                  <div
                    className={`${item.color} ${widths[index]} w-full relative text-white px-10 py-8 text-lg md:text-xl shadow-lg`}
                    style={{
                      clipPath:
                        "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 4% 50%)",
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}


          </div>
        </div>
      </section>


      <Footer />

      {/* Arrow Shape */}
      <style global jsx>{`
        .clip-arrow {
          clip-path: polygon(
            0 0,
            calc(100% - 25px) 0,
            100% 50%,
            calc(100% - 25px) 100%,
            0 100%,
            20px 50%
          );
        }
      `}</style>
    </>
  );
}
