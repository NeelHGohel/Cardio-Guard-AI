import Card from "./../../components/Card";
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
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
          <User className="text-white" size={32} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          About the Developer
        </h1>
        <p className="text-gray-600">
          Passionate about building AI-powered healthcare solutions
        </p>
      </div>

      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white shadow-xl animate-stagger-1">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-32 h-32 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl border-2 border-white border-opacity-30 flex items-center justify-center shadow-2xl">
              <User className="text-white" size={64} />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Gohel Neel</h2>
            <p className="text-lg text-white opacity-90 mb-4">
              Full-Stack Developer & ML Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/NeelHGohel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gohelneel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Academic Details */}
      <Card className="animate-stagger-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <GraduationCap className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Academic Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-indigo-600 transition-all group">
            <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
              <Award className="text-indigo-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                Enrollment Number
              </p>
              <p className="font-semibold text-gray-900">23010101089</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-indigo-600 transition-all group">
            <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
              <Briefcase className="text-indigo-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Course</p>
              <p className="font-semibold text-gray-900">B.Tech - CSE</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-indigo-600 transition-all group">
            <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
              <GraduationCap className="text-indigo-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Semester</p>
              <p className="font-semibold text-gray-900">6th Semester</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-indigo-600 transition-all group">
            <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-indigo-600 transition-all">
              <Sparkles className="text-indigo-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                University
              </p>
              <p className="font-semibold text-gray-900">Darshan University</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Project Guide */}
      <Card className="animate-stagger-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Award className="text-amber-500" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Project Guide</h3>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 opacity-20 rounded-xl blur-md"></div>
              <div className="relative w-16 h-16 bg-white rounded-xl border-2 border-amber-500 border-opacity-30 flex items-center justify-center shadow-lg">
                <GraduationCap className="text-amber-500" size={32} />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-1">
                Prof. Jayesh Vagadiya
              </h4>
              <p className="text-gray-600 font-medium mb-3">
                Assistant Professor
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Department of Computer Science & Engineering
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-amber-500 border border-amber-200">
                  Project Mentor
                </span>
                <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-amber-500 border border-amber-200">
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
          <div className="p-2 bg-green-50 rounded-lg">
            <Heart className="text-green-600" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">About Me</h3>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          I am a passionate software developer with a strong interest in
          building real-world applications using modern web technologies and
          machine learning. I enjoy learning new technologies and applying them
          to solve practical problems, particularly in the healthcare domain.
        </p>

        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <div className="flex items-start gap-3">
            <Sparkles className="text-blue-400 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Project Motivation
              </p>
              <p className="text-sm text-gray-700">
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
          <div className="p-2 bg-red-50 rounded-lg">
            <Code className="text-red-500" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">What I Do</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-200 hover:border-indigo-600 group">
            <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-all">
              <div className="w-2 h-2 bg-indigo-600 rounded-full group-hover:bg-white"></div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Full-Stack Development
              </p>
              <p className="text-sm text-gray-600">
                Build modern web applications using Next.js and React
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-gray-200 hover:border-indigo-600 group">
            <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-all">
              <div className="w-2 h-2 bg-indigo-600 rounded-full group-hover:bg-white"></div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Machine Learning
              </p>
              <p className="text-sm text-gray-600">
                Build and deploy ML models for real-world applications
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Technologies */}
      <Card className="animate-stagger-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Cpu className="text-blue-400" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Technology Stack</h3>
        </div>

        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-3">
              Frontend Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Flutter"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 rounded-lg border border-indigo-200 font-medium text-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & ML */}
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-3">
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
                  className="px-4 py-2 bg-gradient-to-br from-green-50 to-green-100 text-green-600 rounded-lg border border-green-200 font-medium text-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-3">
              Development Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {["GitHub", "Gitlab", "Postman"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600 rounded-lg border border-gray-200 font-medium text-sm hover:shadow-md hover:scale-105 hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
