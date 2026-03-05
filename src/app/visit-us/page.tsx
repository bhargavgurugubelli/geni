"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

type FormState = {
  name: string;
  email: string;
  phone: string;
  grade: string;
  address: string;
};

export default function ScheduleVisitPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    grade: "",
    address: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const grades = [
    "Select",
    "Day Care",
    "Preschool",
    "Kindergarten",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
  ];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill name, email and phone.");
      return false;
    }
    if (!form.grade || form.grade === "Select") {
      setError("Please select a grade.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return false;
    }
    setError(null);
    return true;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/admissions/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          grade: form.grade,
          address: form.address,
        }),
      });

      if (response.ok) {
        setSuccess(
          "Your request was submitted successfully. Our admissions team will contact you shortly."
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          grade: "",
          address: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        setError("Failed to submit. Please check your data and try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An error occurred during submission. Is the backend running?");
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
            Schedule
          </h1>
          {/* Breadcrumb (RIGHT AFTER HEADING) */}
          <Breadcrumb />
        </div>
      </section>

      {/* FORM */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-sm p-10 md:p-14 grid md:grid-cols-2 gap-10"
          >
            {/* LEFT */}
            <div className="space-y-7">
              <Input
                label="Name*"
                value={form.name}
                onChange={(v) => update("name", v)}
              />

              <Input
                label="Email ID*"
                value={form.email}
                onChange={(v) => update("email", v)}
              />

              <Select
                label="Which grade admission are you looking for?*"
                value={form.grade}
                options={grades}
                onChange={(v) => update("grade", v)}
              />

              <Textarea
                label="Your Address"
                value={form.address}
                onChange={(v) => update("address", v)}
              />
            </div>

            <div className="space-y-7">
              <Input
                label="Phone Number*"
                value={form.phone}
                onChange={(v) => update("phone", v)}
              />
            </div>

            {/* FOOTER */}
            <div className="md:col-span-2 mt-6 space-y-4">
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-sm text-gray-500 max-w-xl">
                  We are committed to protecting your privacy. Your information
                  will only be used for admissions-related communication.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#202a22] text-white px-10 py-3 rounded-full hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <Footer />

      {/* HERO ANIMATION */}
      <style jsx>{`
        .ball {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #c9a227;
          border-radius: 50%;
          opacity: 0.75;
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
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* REUSABLE COMPONENTS */

type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

function Input({ label, value, onChange }: InputProps) {
  return (
    <label className="block text-sm text-gray-700">
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
      />
    </label>
  );
}

type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
};

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <label className="block text-sm text-gray-700">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border rounded-lg px-4 py-3 bg-white"
      >
        {options.map((o) => (
          <option key={o} value={o === "Select" ? "" : o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

type TextareaProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

function Textarea({ label, value, onChange }: TextareaProps) {
  return (
    <label className="block text-sm text-gray-700">
      {label}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border rounded-lg px-4 py-3 min-h-[120px]"
      />
    </label>
  );
}
