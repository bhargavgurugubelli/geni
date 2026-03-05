"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const quotes = [
  {
    id: 1,
    name: "Dipti & Mayuresh Jejurkar",
    text:
      "Our daughter Manva’s journey at GENESIS School has been truly wonderful and fulfilling. From the very beginning, we noticed a positive change in her confidence, curiosity, and eagerness to learn. The Book Bag Program played a significant role in helping her start reading at the early age of four years and six months, which exceeded our expectations. The teachers are extremely caring, patient, and attentive, ensuring that each child receives personalized guidance. The nurturing environment, well-structured curriculum, and continuous encouragement have made learning enjoyable for Manva. As parents, we feel reassured knowing she is growing academically, emotionally, and socially in such a supportive atmosphere.",
    photo: "/placeholder-avatar1.png",
  },
  {
    id: 2,
    name: "Hima Kanumuru",
    text:
      "GENESIS School has been an integral part of our family for many years, with our elder son Siddharth studying here for the past seven years and our younger son Abhinav joining five years ago. What we value most is the school’s holistic approach that goes beyond academics to focus on values, discipline, confidence building, and independent thinking. The teachers consistently motivate children to express themselves freely while maintaining strong academic foundations. Transparent communication with parents and a nurturing environment have helped our children grow into confident, responsible individuals. GENESIS is truly a school we trust wholeheartedly.",
    photo: "/placeholder-avatar2.png",
  },
  {
    id: 3,
    name: "Archana Anoor",
    text:
      "Our experience with GENESIS School has been extremely positive, as it introduced our child to structured learning, language skills, and logical thinking at a very early stage. The dedication and commitment shown by the teachers are commendable, as they make continuous efforts to understand each child’s strengths and areas for improvement. We especially appreciate the regular updates and open communication that keep parents well informed about academic progress and overall development. GENESIS maintains a perfect balance between academic excellence and emotional well-being, creating a warm and safe environment where children feel confident, valued, and motivated every day.",
    photo: "/placeholder-avatar3.png",
  },
];

export default function ParentReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () =>
    setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#f6f8fb] relative overflow-hidden">
      {/* BACKGROUND MAP */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image src="/bg-map.png" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Parent Reviews
        </h2>

        {/* MAIN ROW */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="text-2xl text-gray-500 hover:text-[#c9a227] transition"
          >
            ←
          </button>

          {/* IMAGE */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src={quotes[index].photo}
              alt={quotes[index].name}
              width={144}
              height={144}
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              {quotes[index].text}
            </p>

            <p className="mt-6 font-semibold text-[#e07b3a] text-lg">
              {quotes[index].name}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Parent at GENESIS School
            </p>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            aria-label="Next review"
            className="text-2xl text-gray-500 hover:text-[#c9a227] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
