import React from "react";

export default function ReactTraining() {
  const modules = [
    "ReactJS Fundamentals",
    "JSX & Components",
    "State & Props",
    "React Hooks",
    "React Router",
    "Redux Toolkit",
    "REST API Integration",
    "Firebase Authentication",
    "React Native Basics",
    "Navigation in React Native",
    "Mobile API Integration",
    "Play Store Deployment",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                ReactJS & React Native Technical Training
              </h1>

              <p className="mt-6 text-lg text-gray-100 leading-8">
                Learn modern frontend and mobile app development with ReactJS
                and React Native. Build responsive web applications, Android/iOS
                mobile apps, integrate APIs, manage state with Redux, and work
                on real-time projects.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
                  Enroll Now
                </button>

                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700">
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="React Training"
                className="rounded-xl shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Course Modules
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>

                <p className="text-gray-600 mt-3">
                  Hands-on practical sessions with industry examples.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Inspiration Academy?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Expert Trainers</h3>
              <p>
                Learn from experienced ReactJS and React Native professionals.
              </p>
            </div>

            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Real Projects</h3>
              <p>Build production-ready web and mobile applications.</p>
            </div>

            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Placement Support</h3>
              <p>Resume preparation, mock interviews, and job assistance.</p>
            </div>

            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Recorded Sessions</h3>
              <p>Lifetime access to recorded classes and study materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-5">Training Highlights</h3>

              <ul className="space-y-3 list-disc pl-5">
                <li>100% Practical Sessions</li>
                <li>Weekend & Weekday Batches</li>
                <li>Online Live Training</li>
                <li>Project Based Learning</li>
                <li>Git & GitHub Workflow</li>
                <li>Interview Preparation</li>
                <li>Resume Building</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-5">Technologies Covered</h3>

              <ul className="space-y-3 list-disc pl-5">
                <li>React 19 / ReactJS</li>
                <li>React Native</li>
                <li>JavaScript ES6+</li>
                <li>Tailwind CSS</li>
                <li>Redux Toolkit</li>
                <li>Axios / Fetch API</li>
                <li>Firebase</li>
                <li>Node.js & Express Integration</li>
                <li>MongoDB Integration</li>
                <li>Android & iOS Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Start Your React Developer Career Today
          </h2>

          <p className="mt-5 text-lg">
            Join our live online training and become a professional ReactJS and
            React Native developer with real-time project experience.
          </p>

          <button className="mt-8 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
