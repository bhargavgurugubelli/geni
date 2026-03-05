"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb";



export default function AdmissionProcessPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    classGrade: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile || !form.classGrade || form.classGrade === "Select Class") {
      setError("Please fill out all fields and select a class.");
      return;
    }
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/admission-form/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          grade: form.classGrade,
        }),
      });

      if (response.ok) {
        setSuccess("Your request was submitted successfully.");
        setForm({ name: "", email: "", mobile: "", classGrade: "" });
      } else {
        setError("Failed to submit. Please check your data.");
      }
    } catch (err) {
      setError("An error occurred during submission.");
    } finally {
      setSubmitting(false);
    }
  }
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
        <Header />





        {/* PAGE HEADING */}
        <div className="max-w-6xl mx-auto mt-36">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Admissions
          </h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
          <Breadcrumb />
        </div>
      </section>

      {/* BEGIN OUR JOURNEY SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
          Begin Our Journey
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* LEFT IMAGE */}
          <div className="md:w-1/2">
            <img
              src="/logo.png"
              alt="Begin Journey"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">{success}</p>}
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email ID"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                value={form.classGrade}
                onChange={(e) => setForm({ ...form, classGrade: e.target.value })}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Class</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={`Class ${i + 1}`}>
                    Class {i + 1}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md mt-2 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
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
