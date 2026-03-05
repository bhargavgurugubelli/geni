"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { headerMenu } from "./MenuData";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // ✅ Show header ONLY when page is at top
  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Active menu logic
  const isActive = (item: any) => {
    if (item.href && pathname === item.href) return true;

    if (item.children) {
      return item.children.some((child: any) =>
        pathname.startsWith(child.href)
      );
    }

    return false;
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
          bg-transparent text-white
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="School Logo"
              width={120}
              height={50}
              className="brightness-200"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {headerMenu.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setOpenMenu(index);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => {
                    setOpenMenu(null);
                  }, 400);
                }}
              >
                {item.children ? (
                  <span
                    className={`flex items-center gap-1 cursor-pointer
                      ${isActive(item)
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-500"
                      }
                    `}
                  >
                    {item.title}
                    <FiChevronDown
                      className={`transition ${openMenu === index ? "rotate-180 text-orange-500" : ""
                        }`}
                    />
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition
                      ${isActive(item)
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-500"
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                )}

                {/* DROPDOWN */}
                {item.children && openMenu === index && (
                  <div className="absolute left-0 top-8 bg-[#436873] text-white w-[260px] rounded-md shadow-xl">
                    {item.children.map((child: any, i: number) => (
                      <Link
                        key={i}
                        href={child.href}
                        className={`block px-5 py-4 border-t border-white/20 first:border-t-0
                          ${pathname === child.href
                            ? "bg-orange-500 font-semibold"
                            : "hover:bg-[#517c89]"
                          }
                        `}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* VISIT US */}
          <Link
            href="/visit-us"
            className="hidden md:block px-6 py-2 rounded-full font-semibold bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            Visit Us
          </Link>

          {/* MOBILE ICON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU (RIGHT SIDE) */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#313e3b] text-white z-50
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* CLOSE ICON */}
        <div className="flex justify-end p-5">
          <button onClick={() => setMobileOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="px-6 space-y-4">
          {/* HOME LINK */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 text-white hover:text-orange-400 font-semibold"
          >
            Home
          </Link>
          {headerMenu.map((item, i) => (
            <div key={i}>
              {item.children ? (
                <>
                  <button
                    className={`flex items-center justify-between w-full font-semibold
                      ${openMenu === i || isActive(item)
                        ? "text-orange-400"
                        : "text-white"
                      }
                    `}
                    onClick={() => setOpenMenu(openMenu === i ? null : i)}
                  >
                    {item.title}
                    <FiChevronDown
                      className={`transition-transform ${openMenu === i ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {openMenu === i && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child: any, j: number) => (
                        <Link
                          key={j}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block
                            ${pathname === child.href
                              ? "text-orange-400 font-semibold"
                              : "hover:text-orange-400"
                            }
                          `}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-semibold
                    ${pathname === item.href
                      ? "text-orange-400"
                      : "hover:text-orange-400"
                    }
                  `}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
