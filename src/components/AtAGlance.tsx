"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: 0,
    slug: "/programs",
    label: "Our Programs",
    color: "bg-[#e45a4d]",
    image: "/program.jpg",
    title: "Our Programs",
    desc: "From Day Care to Grade 7, offering an integrated curriculum",
  },
  {
    id: 1,
    slug: "/difference",
    label: "The GENESIS Difference",
    color: "bg-[#a6d8d8]",
    image: "/differences.jpg",
    title: "The GENESIS Difference",
    desc:
      "Personalised learning, strong literacy foundations, and holistic development.",
  },
  {
    id: 2,
    slug: "/campus",
    label: "Our Campus",
    color: "bg-[#3b84a0]",
    image: "/555.jpeg",
    title: "Our Campus",
    desc:
      "A safe, modern, green campus designed to support emotional and academic growth.",
  },
  {
    id: 3,
    slug: "/admissions",
    label: "Admission Process",
    color: "bg-[#f2c94c]",
    image: "/admissionimg.jpg",
    title: "Admission Process",
    desc:
      "A simple and transparent admission process with guidance at every step.",
  },
];

export default function AtAGlance() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const shownIndex = previewIndex ?? activeIndex;
  const shown = tabs[shownIndex];

  return (
    <section id="about" className="py-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
        At a Glance
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl md:h-96">

          {/* IMAGE WITH ZOOM */}
          <div className="relative md:w-2/3 w-full md:order-2 order-1 md:h-full h-80 group overflow-hidden">
            <Image
              src={shown.image}
              alt={shown.title}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/55 flex items-center">
              <div className="px-8 text-white max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {shown.title}
                </h3>

                <p className="mt-3 text-base md:text-lg leading-relaxed">
                  {shown.desc}
                </p>

                <Link
                  href={shown.slug}
                  className="inline-block mt-6 px-6 py-3 bg-white/20 border border-white rounded-full hover:bg-white/30 text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* LEFT MENU */}
          <div className="md:w-1/3 w-full flex flex-col md:order-1 order-2">
            {tabs.map((tab, i) => {
              const isActive = i === activeIndex;

              return (
                <Link
                  key={tab.id}
                  href={tab.slug}
                  onMouseEnter={() => setPreviewIndex(i)}
                  onMouseLeave={() => setPreviewIndex(null)}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    ${tab.color}
                    text-white px-8 py-6 flex items-center justify-between
                    font-semibold transition-all flex-1 min-h-[88px]
                    ${isActive
                      ? "scale-[1.01] ring-4 ring-white/30"
                      : "opacity-95 hover:opacity-100"}
                  `}
                >
                  <span className="text-base md:text-lg">
                    {tab.label}
                  </span>

                  <span className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}