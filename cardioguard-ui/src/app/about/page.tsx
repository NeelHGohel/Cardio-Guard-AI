import Link from "next/link";
import {
  User,
  GraduationCap,
  Code2,
  Sparkles,
  Heart,
  Github,
  Linkedin,
  Award,
  Briefcase,
  Cpu,
  Mail,
  ExternalLink,
  Layers,
  Terminal,
  Database,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      {/* Header Background */}
      {/* <div className="bg-slate-900 pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-md rounded-xl mb-6 border border-white/10">
            <User className="text-indigo-300" size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About the Developer
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about bridging the gap between complex machine learning
            algorithms and accessible, human-centric healthcare solutions.
          </p>
        </div>
      </div> */}

      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20 space-y-8">
        {/* Main Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Profile Sidebar */}
            <div className="md:w-1/3 bg-slate-50 border-r border-slate-100 p-8 flex flex-col items-center text-center">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-32 h-32 bg-white rounded-full p-1 border-2 border-white shadow-lg">
                  <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                    <User className="text-slate-300" size={64} />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                Gohel Neel
              </h2>
              <p className="text-indigo-600 font-medium mb-6">
                Full-Stack Developer & ML Enthusiast
              </p>

              <div className="flex gap-3 justify-center w-full">
                <a
                  href="https://github.com/NeelHGohel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-slate-700 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:text-indigo-600 hover:border-indigo-100 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gohelneel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-slate-700 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:text-indigo-600 hover:border-indigo-100 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Profile Content */}
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                  <Heart size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">My Mission</h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8">
                I am a passionate software developer with a strong interest in
                building real-world applications using modern web technologies
                and machine learning. I enjoy learning new technologies and
                applying them to solve practical problems, particularly in the
                healthcare domain.
              </p>

              <div className="p-5 bg-indigo-50/50 rounded-xl border border-indigo-100">
                <div className="flex items-start gap-4">
                  <Sparkles
                    className="text-indigo-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      Project Motivation
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      CardioGuard AI was developed to demonstrate the practical
                      application of machine learning in healthcare. This
                      project combines my passion for coding with the goal of
                      creating tools that can potentially save lives through
                      early detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Academic Details
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400">
                    <Award size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    Enrollment
                  </span>
                </div>
                <span className="font-mono text-sm font-semibold text-slate-900">
                  23010101089
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400">
                    <Briefcase size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    Course
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  B.Tech - CSE
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400">
                    <Layers size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    Semester
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  6th Semester
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    University
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  Darshan University
                </span>
              </div>
            </div>
          </div>

          {/* Project Guide */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-50 rounded-lg text-amber-500">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Project Guide
              </h3>
            </div>

            <div className="flex-1 bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-xl border border-amber-100 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Award size={120} />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-amber-100 flex items-center justify-center mb-4 text-amber-500">
                  <GraduationCap size={32} />
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  Prof. Jayesh Vagadiya
                </h4>
                <p className="text-amber-600 font-medium text-sm mb-4">
                  Assistant Professor
                </p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Department of Computer Science & Engineering
                  <br />
                  Providing technical guidance and mentorship.
                </p>

                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-amber-200 rounded-lg text-xs font-semibold text-amber-700">
                    Project Mentor
                  </span>
                  <span className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-amber-200 rounded-lg text-xs font-semibold text-amber-700">
                    Technical Advisor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Full-Stack Development
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Building responsive, modern web applications using the Next.js
                  ecosystem, React, and robust backend integrations.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Machine Learning
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Developing predictive models and intelligent systems using
                  Python, Scikit-learn, and data analytics pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Technology Stack
            </h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                <Globe size={14} /> Frontend Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Flutter"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                <Terminal size={14} /> Backend & AI
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Scikit-learn", "Node.js", "Express.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 text-sm font-medium hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                <Database size={14} /> Tools & DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                {["GitHub", "GitLab", "Postman"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 text-sm font-medium hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
