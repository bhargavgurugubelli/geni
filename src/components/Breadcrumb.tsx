"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // Show breadcrumb only for child pages
  if (paths.length < 2) return null;

  /* ---------------- Parent mapping ---------------- */
  const parentMap: Record<string, { label: string; href: string }> = {
    about: { label: "About Us", href: "/about" },
    academics: { label: "Academics", href: "/academics" },
    genesis: { label: "Genesis", href: "/genesis" },
    admissions: { label: "Admissions", href: "/admissions" },
    
  };

  /* ---------------- Child page titles ---------------- */
  const childMap: Record<string, string> = {
    // About Us
    "vision": "Vision and Values",
    "philosophy": "Our Philosophy",
    "people": "Our People",
    "campus":"Our Campuses",
    

    // Academics
    "pre-primary": "Pre-Primary School",
    "primary": "Primary School",
    "middle": "Middle School",
    "high": "High School",

    // Genesis
    "beyond-academics": "Beyond Academics",
    "initiatives":"Initiatives",

    // Admissions
    "admissions": "Admissions",
    "schedule":"Schedule",
    "initiatives-details":"Why Us",
  };

  const parent = parentMap[paths[0]];
  const childKey = paths[1];
  const childLabel =
    childMap[childKey] ||
    childKey.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="mt-2 text-sm text-white/80 flex items-center gap-2">
      {/* Parent - clickable */}
      {parent ? (
        <Link
          href={parent.href}
          className="font-medium hover:text-orange-400 transition"
        >
          {parent.label}
        </Link>
      ) : (
        <span className="font-medium capitalize">{paths[0]}</span>
      )}

      <span className="text-white/60">›</span>

      {/* Child - NOT clickable */}
      <span className="font-semibold text-white">{childLabel}</span>
    </div>
  );
}
