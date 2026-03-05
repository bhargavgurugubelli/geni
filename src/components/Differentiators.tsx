// components/Differentiators.tsx
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Dynamic Educational Pathways",
    icon: "learning",
  },
  {
    id: 2,
    title: "Personalized Learning",
    icon: "user-group",
  },
  {
    id: 3,
    title: "Unique Pedagogy",
    icon: "book",
  },
  {
    id: 4,
    title: "Transformative Growth",
    icon: "arrow-up",
  },
  {
    id: 5,
    title: "Literacy Excellence",
    icon: "library",
  },
  {
    id: 6,
    title: "Celebrating Uniqueness",
    icon: "sparkles",
  },
  {
    id: 7,
    title: "Diverse Extracurriculars",
    icon: "star",
  },
  {
    id: 8,
    title: "State-of-the-Art Facilities",
    icon: "building",
  },
];

// 🎨 ICON BACKGROUND COLORS (cycled)
const colors = [
  "bg-amber-400",
  "bg-sky-600",
  "bg-teal-400",
  "bg-rose-400",
  "bg-indigo-500",
  "bg-emerald-500",
  "bg-orange-400",
  "bg-purple-500",
];

// ICONS
function Icon({ name }: { name: string }) {
  const common = "w-10 h-10";
  switch (name) {
    case "learning":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M3 7l9-4 9 4-9 4L3 7z" stroke="white" strokeWidth="1.4" />
          <path d="M21 14v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" stroke="white" strokeWidth="1.4" />
        </svg>
      );
    case "user-group":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.4" />
          <path d="M2 20c1.5-4 7-4 9-4s7.5 0 9 4" stroke="white" strokeWidth="1.4" />
        </svg>
      );
    case "book":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M3 19.5A2.5 2.5 0 0 1 5.5 17H20" stroke="white" strokeWidth="1.4" />
          <path d="M21 6.5V17a2.5 2.5 0 0 0-2.5 2.5H7" stroke="white" strokeWidth="1.4" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M12 19V5" stroke="white" strokeWidth="1.6" />
          <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="1.6" />
        </svg>
      );
    case "library":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M4 19V5h4v14" stroke="white" strokeWidth="1.4" />
          <path d="M10 19V5h4v14" stroke="white" strokeWidth="1.4" />
          <path d="M16 19V5h4v14" stroke="white" strokeWidth="1.4" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path
            d="M12 3l1.6 3.2L17 8l-3.4 1.8L12 13l-1.6-3.2L7 8l3.4-1.8L12 3z"
            stroke="white"
            strokeWidth="1.3"
          />
        </svg>
      );
    case "star":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path
            d="M12 17.3L6.2 20l1-5.8L3 10.5l5.9-.9L12 4l3.1 5.6 5.9.9-4.2 3.7L17.8 20 12 17.3z"
            stroke="white"
            strokeWidth="1.3"
          />
        </svg>
      );
    case "building":
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24">
          <path d="M4 20V4h16v16" stroke="white" strokeWidth="1.4" />
          <path d="M9 20V9h6v11" stroke="white" strokeWidth="1.4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Differentiators() {
  const columns = 4;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Our Differentiators
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {items.map((it, i) => {
            const isEndOfRow = (i + 1) % columns === 0;

            return (
              <div
                key={it.id}
                className="relative flex flex-col items-center text-center px-6 py-10"
              >
                {/* ICON */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg ${colors[i % colors.length]}`}
                >
                  <Icon name={it.icon} />
                </div>

                {/* TITLE ONLY */}
                <h3 className="mt-6 font-semibold text-gray-800 text-base">
                  {it.title}
                </h3>

                {/* VERTICAL DIVIDER */}
                {!isEndOfRow && (
                  <span className="hidden sm:block absolute right-0 top-12 h-40 w-px bg-gray-300"></span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-20">
          <Link
            href="/initiatives-details"
            className="px-10 py-4 bg-[#436873] text-white rounded-full shadow-lg hover:bg-[#36555d] transition text-lg"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
