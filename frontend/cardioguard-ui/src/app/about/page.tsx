// export default function AboutPage() {
//   return (
//     <div className="mx-auto max-w-4xl px-6 py-12">
//       <h1 className="mb-4 text-3xl font-bold text-gray-900">About Me</h1>

//       <p className="mb-6 text-gray-700 leading-relaxed">
//         I am a passionate software developer with a strong interest in building
//         real-world applications using modern web technologies and machine
//         learning. I enjoy learning new technologies and applying them to solve
//         practical problems.
//       </p>

//       <div className="mb-6">
//         <h2 className="mb-2 text-xl font-semibold text-gray-900">What I Do</h2>
//         <ul className="list-disc pl-5 text-gray-700 space-y-1">
//           <li>Develop full-stack web applications using Next.js</li>
//           <li>Build and deploy machine learning models</li>
//           <li>Create REST APIs using FastAPI</li>
//           <li>Focus on clean UI and scalable architecture</li>
//         </ul>
//       </div>

//       <div>
//         <h2 className="mb-2 text-xl font-semibold text-gray-900">
//           Technologies
//         </h2>
//         <p className="text-gray-700">
//           Next.js, React, Python, FastAPI, Scikit-learn, Pandas, NumPy, Tailwind
//           CSS
//         </p>
//       </div>
//     </div>
//   );
// }
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Page Title */}
      <h1 className="mb-6 text-3xl font-bold text-gray-900">About Me</h1>

      {/* Personal & Academic Details */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Personal & Academic Details
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-gray-700">
          <p>
            <span className="font-medium">Name:</span> Your Full Name
          </p>
          <p>
            <span className="font-medium">Enrollment Number:</span> XXXXXXXX
          </p>
          <p>
            <span className="font-medium">Course:</span> B.Tech / B.Sc (CS)
          </p>
          <p>
            <span className="font-medium">Semester:</span> 6th Semester
          </p>
          <p>
            <span className="font-medium">College:</span> Your College Name
          </p>
          <p>
            <span className="font-medium">University:</span> University Name
          </p>
        </div>
      </div>

      {/* About Description */}
      <p className="mb-8 text-gray-700 leading-relaxed">
        I am a passionate software developer with a strong interest in building
        real-world applications using modern web technologies and machine
        learning. I enjoy learning new technologies and applying them to solve
        practical problems.
      </p>

      {/* What I Do */}
      <div className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">What I Do</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Develop full-stack web applications using Next.js</li>
          <li>Build and deploy machine learning models</li>
          <li>Create REST APIs using FastAPI</li>
          <li>Design clean and responsive user interfaces</li>
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Technologies
        </h2>
        <p className="text-gray-700">
          Next.js, Python, FastAPI, Scikit-learn, Pandas, Tailwind CSS
        </p>
      </div>
    </div>
  );
}
