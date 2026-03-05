"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Brain,
  TrendingUp,
  BookOpen,
  Sparkles,
  Puzzle,
} from "lucide-react";

const differentiators = [
  {
    id: 1,
    title: "Personalized Learning",
    description:
      "Our Montessori-based Preschool emphasizes individualized learning, accommodating each child's unique needs and interests.",
    color: "bg-yellow-400",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Unique Pedagogy",
    description:
      "Our Presentation–Exploration–Mastery model fosters curiosity, critical thinking, and deep understanding of concepts.",
    color: "bg-slate-500",
    icon: Brain,
  },
  {
    id: 3,
    title: "Transformative Growth",
    description:
      "We emphasize academic excellence alongside social-emotional learning, preparing students with essential 21st-century skills.",
    color: "bg-cyan-300",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Literacy Excellence",
    description:
      "From early phonics to advanced literacy programs, we build a strong foundation in reading and writing.",
    color: "bg-red-400",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Celebrating Uniqueness",
    description:
      "Our enrichment programs nurture diverse talents and encourage exploration.",
    color: "bg-amber-400",
    icon: Sparkles,
  },
  {
    id: 6,
    title: "Diverse Extracurriculars",
    description:
      "A broad range of clubs and activities supports holistic development beyond academics.",
    color: "bg-blue-600",
    icon: Puzzle,
  },
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8f6]">
      <Header />

      {/* HERO */}
      <section className="relative bg-[#202a22] text-white min-h-[80vh] overflow-hidden">

        {/* FLOATING YELLOW BALLS */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="hero-ball ball-1"></span>
          <span className="hero-ball ball-2"></span>
          <span className="hero-ball ball-3"></span>
          <span className="hero-ball ball-4"></span>
          <span className="hero-ball ball-5"></span>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <div className="pt-48 md:pt-56">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why Us
            </h1>
            <p className="text-sm md:text-base opacity-80">
              Admissions › Why Us
            </p>
          </div>
        </div>

      </section>


      {/* MAIN */}
      <main className="flex-1">
        {/* INTRO */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-gray-700 leading-relaxed">
            Education at Genesis School transcends traditional methods by embracing a holistic approach
            that celebrates each child’s unique potential and prepares them for a fulfilling future.
          </p>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Our Differentiators
          </h2>

          <div className="space-y-6">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-6 px-6 py-6"
                >
                  {/* Left Color Strip */}
                  <div className={`absolute left-0 top-0 h-full w-2 ${item.color}`} />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${item.color}`}
                  >
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Number */}
                  <div className="text-3xl font-bold text-gray-200 group-hover:text-gray-300 transition">
                    {String(item.id).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}