import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#526a74] text-white overflow-hidden font-sans border-t-4 border-[#c9a227]"
      id="contact"
    >
      {/* Subtle background glow to replicate the dotted glow feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)' }}
      />

      <div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

        {/* LEFT COLUMN: Headings & Details (Span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-tight mb-14 max-w-2xl tracking-tight">
            Let's make something<br />great work together.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 max-w-3xl">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-200 mb-3">Call Our Office</p>
              <p className="text-lg opacity-90">+91 90 10 18 5000</p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-200 mb-3">Send A Message</p>
              <p className="text-lg opacity-90">info@genesisschool.in</p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-200 mb-3">Visit Us</p>
              <p className="text-lg opacity-90">Visakha A Colony<br />Srikakulam – 532001</p>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Quick Links (Span 2) */}
        <div className="lg:col-span-2 lg:col-start-9 flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-2 inline-block w-fit">Quick Links</h3>
          <ul className="space-y-4 text-[1.1rem] text-gray-200 font-light">
            <li><Link href="/" className="hover:text-white hover:pl-2 transition-all">Home</Link></li>
            <li><Link href="/about/vision" className="hover:text-white hover:pl-2 transition-all">About</Link></li>
            <li><Link href="/academics/primary" className="hover:text-white hover:pl-2 transition-all">Academics</Link></li>
            <li><Link href="/difference" className="hover:text-white hover:pl-2 transition-all">Genesis Life</Link></li>
            <li><Link href="/admissions/process" className="hover:text-white hover:pl-2 transition-all">Admissions</Link></li>
            <li><Link href="/gallery" className="hover:text-white hover:pl-2 transition-all">Gallery</Link></li>
            <li><Link href="/visit-us" className="hover:text-white hover:pl-2 transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT COLUMN: Logo & Socials (Span 3 text right) */}
        <div className="lg:col-span-2 lg:col-start-11 flex flex-col items-start lg:items-end justify-center h-full">
          <div className="flex flex-col items-start lg:items-end w-full lg:text-right">

            {/* Logo box */}
            <div className="mb-10 lg:-mr-4 bg-white/20 p-4 rounded-xl shadow-lg backdrop-blur-md inline-block">
              <Image
                src="/logo.png"
                alt="Genesis School"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 lg:mr-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#526a74] hover:scale-110 transition-all duration-300">
                <FaFacebookF size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#526a74] hover:scale-110 transition-all duration-300">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#526a74] hover:scale-110 transition-all duration-300">
                <FaLinkedinIn size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#526a74] hover:scale-110 transition-all duration-300">
                <FaYoutube size={15} />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT ROW */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-6 pt-8 mt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
        <p className="w-full text-center lg:text-right">
          Copyright genesisschool.in © {currentYear}. All Rights Reserved.
        </p>
      </div>

      {/* FLOAT SCROLL TEXT (Hidden on mobile) */}
      <div className="hidden 2xl:flex absolute right-6 top-[45%] -translate-y-1/2 flex-col items-center gap-6 text-xs tracking-[0.2em] text-gray-300 opacity-70">
        <span className="rotate-90 origin-center translate-y-6">SCROLL</span>
        <div className="w-[1px] h-20 bg-gray-400 mt-6"></div>
      </div>
    </footer>
  );
}
