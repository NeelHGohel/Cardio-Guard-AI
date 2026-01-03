import Card from "@/components/Card";
import {
  User,
  GraduationCap,
  Code,
  Sparkles,
  Heart,
  Github,
  Linkedin,
  Award,
  Briefcase,
  Cpu,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-page-enter">
      {/* Header Section */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl mb-4 shadow-lg">
          <User className="text-white" size={32} />
        </div>
        <h1 className="text-4xl font-bold text-[#111827] mb-2">
          About the Developer
        </h1>
        <p className="text-[#6B7280]">
          Passionate about building AI-powered healthcare solutions
        </p>
      </div>

      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] p-8 text-white shadow-xl animate-stagger-1">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 flex items-center justify-center shadow-2xl">
              <User className="text-white" size={64} />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Gohel Neel</h2>
            <p className="text-lg text-white/90 mb-4">
              Full-Stack Developer & ML Enthusiast
            </p>
            {/* <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium border border-white/30">
                B.Tech Computer Science
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium border border-white/30">
                6th Semester
              </span>
            </div> */}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/NeelHGohel"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gohelneel"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            {/* <a
              href="mailto:neelgohel@gmail.com"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all hover:scale-110"
            >
              <Mail size={20} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Academic Details */}
      <Card className="animate-stagger-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#EEF2FF] rounded-lg">
            <GraduationCap className="text-[#4F46E5]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-[#111827]">
            Academic Details
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#4F46E5] transition-all group">
            <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
              <Award className="text-[#4F46E5]" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                Enrollment Number
              </p>
              <p className="font-semibold text-[#111827]">23010101089</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#4F46E5] transition-all group">
            <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
              <Briefcase className="text-[#4F46E5]" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">Course</p>
              <p className="font-semibold text-[#111827]">B.Tech - CSE</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#4F46E5] transition-all group">
            <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
              <GraduationCap className="text-[#4F46E5]" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                Semester
              </p>
              <p className="font-semibold text-[#111827]">6th Semester</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#4F46E5] transition-all group">
            <div className="p-2 bg-white rounded-lg border border-[#E5E7EB] group-hover:border-[#4F46E5] transition-all">
              <Sparkles className="text-[#4F46E5]" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-1">
                University
              </p>
              <p className="font-semibold text-[#111827]">Darshan University</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border border-[#C7D2FE]">
          <p className="text-sm font-medium text-[#4F46E5] mb-1">
            College / Institution
          </p>
          <p className="font-semibold text-[#111827]">Your College Name</p>
        </div> */}
      </Card>

      <Card className="animate-stagger-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#FEF3C7] rounded-lg">
            <Award className="text-[#F59E0B]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-[#111827]">Project Guide</h3>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border-2 border-[#FDE68A]">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-xl blur-md"></div>
              <div className="relative w-16 h-16 bg-white rounded-xl border-2 border-[#F59E0B]/30 flex items-center justify-center shadow-lg">
                <GraduationCap className="text-[#F59E0B]" size={32} />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-[#111827] mb-1">
                Prof. Jayesh Vagadiya
              </h4>
              <p className="text-[#6B7280] font-medium mb-3">
                Assistant Professor
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                Department of Computer Science & Engineering
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-[#F59E0B] border border-[#FDE68A]">
                  Project Mentor
                </span>
                <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-[#F59E0B] border border-[#FDE68A]">
                  Technical Advisor
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* About Description */}
      <Card className="animate-stagger-3">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#ECFDF5] rounded-lg">
            <Heart className="text-[#22C55E]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-[#111827]">About Me</h3>
        </div>

        <p className="text-[#4B5563] leading-relaxed text-lg mb-6">
          I am a passionate software developer with a strong interest in
          building real-world applications using modern web technologies and
          machine learning. I enjoy learning new technologies and applying them
          to solve practical problems, particularly in the healthcare domain.
        </p>

        <div className="p-6 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] border border-[#BAE6FD]">
          <div className="flex items-start gap-3">
            <Sparkles className="text-[#38BDF8] flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold text-[#111827] mb-2">
                Project Motivation
              </p>
              <p className="text-sm text-[#4B5563]">
                CardioGuard AI was developed as part of my project to
                demonstrate the practical application of machine learning in
                healthcare. This project combines my passion for coding with the
                goal of creating tools that can potentially save lives.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* What I Do */}
      <Card className="animate-stagger-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#FEF2F2] rounded-lg">
            <Code className="text-[#EF4444]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-[#111827]">What I Do</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] hover:bg-white hover:shadow-md transition-all border border-[#E5E7EB] hover:border-[#4F46E5] group">
            <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center group-hover:bg-[#4F46E5] transition-all">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full group-hover:bg-white"></div>
            </div>
            <div>
              <p className="font-semibold text-[#111827] mb-1">
                Full-Stack Development
              </p>
              <p className="text-sm text-[#6B7280]">
                Build modern web applications using Next.js and React
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] hover:bg-white hover:shadow-md transition-all border border-[#E5E7EB] hover:border-[#4F46E5] group">
            <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center group-hover:bg-[#4F46E5] transition-all">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full group-hover:bg-white"></div>
            </div>
            <div>
              <p className="font-semibold text-[#111827] mb-1">
                Machine Learning
              </p>
              <p className="text-sm text-[#6B7280]">
                Build and deploy ML models for real-world applications
              </p>
            </div>
          </div>

          {/* <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] hover:bg-white hover:shadow-md transition-all border border-[#E5E7EB] hover:border-[#4F46E5] group">
            <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center group-hover:bg-[#4F46E5] transition-all">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full group-hover:bg-white"></div>
            </div>
            <div>
              <p className="font-semibold text-[#111827] mb-1">
                API Development
              </p>
              <p className="text-sm text-[#6B7280]">
                Create robust REST APIs using FastAPI and Python
              </p>
            </div>
          </div> */}
          {/* 
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] hover:bg-white hover:shadow-md transition-all border border-[#E5E7EB] hover:border-[#4F46E5] group">
            <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center group-hover:bg-[#4F46E5] transition-all">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full group-hover:bg-white"></div>
            </div>
            <div>
              <p className="font-semibold text-[#111827] mb-1">UI/UX Design</p>
              <p className="text-sm text-[#6B7280]">
                Design clean and responsive user interfaces with Tailwind CSS
              </p>
            </div>
          </div> */}
        </div>
      </Card>

      {/* Technologies */}
      <Card className="animate-stagger-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#F0F9FF] rounded-lg">
            <Cpu className="text-[#38BDF8]" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-[#111827]">
            Technology Stack
          </h3>
        </div>

        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <p className="text-sm font-semibold text-[#6B7280] mb-3">
              Frontend Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Flutter"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] text-[#4F46E5] rounded-lg border border-[#C7D2FE] font-medium text-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & ML */}
          <div>
            <p className="text-sm font-semibold text-[#6B7280] mb-3">
              Backend & Machine Learning
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "Scikit-learn",
                "Node.js",
                "Express.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] text-[#22C55E] rounded-lg border border-[#A7F3D0] font-medium text-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="text-sm font-semibold text-[#6B7280] mb-3">
              Development Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {["GitHub", "Gitlab", "Postman"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] text-[#6B7280] rounded-lg border border-[#E5E7EB] font-medium text-sm hover:shadow-md hover:scale-105 hover:border-[#4F46E5] hover:text-[#4F46E5] transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Contact CTA */}
      {/* <div className="p-8 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white text-center shadow-xl animate-stagger-6">
        <h3 className="text-2xl font-bold mb-2">Let's Connect!</h3>
        <p className="text-white/90 mb-6">
          Interested in collaborating or discussing technology? Feel free to
          reach out.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-white text-[#4F46E5] rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Send Email
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold hover:bg-white/30 hover:scale-105 transition-all"
          >
            View Projects
          </a>
        </div>
      </div> */}
    </div>
  );
}
