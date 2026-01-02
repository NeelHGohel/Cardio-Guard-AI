"use client";

import Link from "next/link";
import {
  HeartPulse,
  LayoutDashboard,
  Activity,
  Shield,
  Brain,
  BarChart2,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-8 flex items-center gap-2">
          <HeartPulse className="text-red-500" />
          CardioGuard AI
        </h1>

        <nav className="space-y-2">
          <NavLink
            href="/"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
          />
          <NavLink
            href="/disclaimer"
            icon={<Activity size={18} />}
            label="Predict Risk"
          />
          <NavLink
            href="/accuracy"
            icon={<Shield size={18} />}
            label="Accuracy"
          />
          <NavLink href="/model" icon={<Brain size={18} />} label="Algorithm" />
          <NavLink
            href="/insights"
            icon={<BarChart2 size={18} />}
            label="Insights"
          />
        </nav>
      </div>

      <ThemeToggle />
    </aside>
  );
}

function NavLink({ href, icon, label }: any) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition"
    >
      {icon}
      {label}
    </Link>
  );
}
