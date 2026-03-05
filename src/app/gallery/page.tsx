"use client";

import React, { useState, useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

interface GalleryImage {
  id: number;
  title: string;
  image_url: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/gallery/list/");
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        }
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      }
    }
    fetchGallery();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] py-16 px-6 md:px-16">
        <div className="absolute inset-0 pointer-events-none">
          <span className="ball ball-1" />
          <span className="ball ball-2" />
          <span className="ball ball-3" />
          <span className="ball ball-4" />
        </div>



        {/* ================= HEADER ================= */}
        <Header />

        {/* HERO TEXT */}
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl mt-2">Life at Genesis School</p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Our School Moments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="h-56 bg-gray-200 rounded-xl shadow overflow-hidden relative group">
              <img src={img.image_url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
          {images.length === 0 && (
            <div className="col-span-full py-10 text-center text-gray-500">
              No gallery images found.
            </div>
          )}
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
