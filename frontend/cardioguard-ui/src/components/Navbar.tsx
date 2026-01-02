"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartPulse,
  LayoutDashboard,
  Activity,
  Shield,
  Brain,
  BarChart2,
  User,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/disclaimer", icon: Activity, label: "Predict Risk" },
    { href: "/accuracy", icon: Shield, label: "Accuracy" },
    { href: "/model", icon: Brain, label: "Algorithm" },
    { href: "/insights", icon: BarChart2, label: "Insights" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-lg shadow-md">
              <HeartPulse className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#111827]">
                CardioGuard AI
              </h1>
              <p className="text-xs text-[#6B7280] leading-none">
                Risk Prediction
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#EEF2FF] text-[#4F46E5]"
                        : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
                    }
                  `}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <Link href="/about">
            <button className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#6B7280] transition-all hover:border-[#4F46E5] hover:text-[#4F46E5]">
              <User size={18} />
              <span className="hidden sm:inline">About</span>
            </button>
          </Link>
          {/* <button className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#6B7280] transition-all hover:border-[#4F46E5] hover:text-[#4F46E5]">
            <User size={18} />
            <span className="hidden sm:inline">Profile</span>
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-[#E5E7EB] px-4 py-2">
        <div className="flex items-center gap-2 overflow-x-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#4F46E5] text-white"
                      : "text-[#6B7280] hover:bg-[#F9FAFB]"
                  }
                `}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
