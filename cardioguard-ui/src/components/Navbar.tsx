// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   HeartPulse,
//   Menu,
//   X,
//   ChevronRight,
//   Activity,
//   BarChart3,
//   FileText,
//   ShieldCheck,
//   LayoutDashboard
// } from "lucide-react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect for navbar visual stability
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "/", label: "Dashboard", icon: LayoutDashboard },
//     { href: "/predict", label: "Predict", icon: Activity },
//     { href: "/accuracy", label: "Accuracy", icon: BarChart3 },
//     { href: "/insights", label: "Insights", icon: FileText },
//     { href: "/disclaimer", label: "Disclaimer", icon: ShieldCheck },
//   ];

//   return (
//     <nav
//       className={`
//         sticky top-0 z-50 w-full transition-all duration-200 border-b
//         ${scrolled
//           ? "bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm"
//           : "bg-white border-transparent"
//         }
//       `}
//       aria-label="Main Navigation"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">

//           {/* Brand Logo */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
//             aria-label="CardioGuard AI Dashboard"
//           >
//             <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white transition-colors group-hover:bg-indigo-700">
//               <HeartPulse size={20} strokeWidth={2.5} />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-lg font-bold text-slate-900 leading-none">
//                 CardioGuard
//               </span>
//               <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-none mt-0.5">
//                 Clinical AI Platform
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             <ul className="flex items-center gap-1">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       className={`
//                         relative px-3 py-2 text-sm font-medium transition-colors rounded-md
//                         ${isActive
//                           ? "text-indigo-600"
//                           : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
//                         }
//                       `}
//                       aria-current={isActive ? "page" : undefined}
//                     >
//                       {link.label}
//                       {isActive && (
//                         <span className="absolute inset-x-0 -bottom-6 h-0.5 bg-indigo-600 rounded-t-full" />
//                       )}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>

//             <div className="h-6 w-px bg-slate-200" aria-hidden="true" />

//             <div className="flex items-center gap-4">
//               {/* Status Indicator */}
//               <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//                 </span>
//                 <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">System Online</span>
//               </div>

//               <Link
//                 href="/about"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
//               >
//                 <span>About</span>
//                 <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               aria-expanded={isOpen}
//               aria-controls="mobile-menu"
//               aria-label="Toggle navigation menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Dropdown */}
//       <div
//         id="mobile-menu"
//         className={`
//           lg:hidden border-t border-slate-100 bg-white overflow-hidden transition-all duration-300 ease-in-out
//           ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
//         `}
//       >
//         <div className="p-4 space-y-1">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`
//                   flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
//                   ${isActive
//                     ? "bg-indigo-50 text-indigo-700"
//                     : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }
//                 `}
//                 aria-current={isActive ? "page" : undefined}
//               >
//                 <link.icon size={18} className={isActive ? "text-indigo-600" : "text-slate-400"} />
//                 {link.label}
//               </Link>
//             );
//           })}

//           <div className="pt-4 mt-2 border-t border-slate-100">
//             <Link
//               href="/predict"
//               onClick={() => setIsOpen(false)}
//               className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//             >
//               Start New Assessment
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartPulse,
  Menu,
  X,
  ChevronRight,
  Activity,
  BarChart3,
  FileText,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/disclaimer", label: "Predict", icon: Activity },
    { href: "/accuracy", label: "Accuracy", icon: BarChart3 },
    { href: "/model", label: "Model", icon: ShieldCheck },
    { href: "/insights", label: "Insights", icon: FileText },
  ];

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full transition-all duration-200
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white border-b border-transparent"
        }
      `}
      aria-label="Primary Navigation"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= DESKTOP GRID ================= */}
        <div className="grid grid-cols-3 items-center h-20">
          {/* LEFT: BRAND */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 p-1"
              aria-label="CardioGuard Home"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 text-white shadow-sm">
                <HeartPulse size={20} strokeWidth={2.2} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 leading-none">
                  CardioGuard
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                  Clinical AI Platform
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
relative flex items-center justify-center h-10 px-3 text-sm font-semibold rounded-md transition-colors
                        ${
                          isActive
                            ? "text-indigo-600"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }
                      `}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-indigo-600 rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="hidden lg:flex justify-end items-center gap-4">
            {/* <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                System Online
              </span>
            </div> */}

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              About
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition
                  ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-slate-700 hover:bg-white hover:text-slate-900"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <link.icon
                  size={18}
                  className={isActive ? "text-indigo-600" : "text-slate-400"}
                />
                {link.label}
              </Link>
            );
          })}

          <div className="pt-4 mt-3 border-t border-slate-200">
            <Link
              href="/disclaimer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Start New Assessment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
