import React from "react";

export default function AngularTraining() {
  const modules = [
    "TypeScript Fundamentals",
    "Angular Architecture",
    "Components & Templates",
    "Data Binding",
    "Directives & Pipes",
    "Services & Dependency Injection",
    "Routing & Navigation",
    "Reactive & Template-Driven Forms",
    "HTTP Client & REST APIs",
    "RxJS Observables",
    "Authentication & Authorization",
    "Angular Material",
    "State Management (NgRx)",
    "Unit Testing",
    "Deployment",
    "Real-Time Project",
  ];

  const highlights = [
    "Live Online & Classroom Training",
    "100% Practical Sessions",
    "Industry Expert Trainers",
    "Real-Time Project Development",
    "Interview Preparation",
    "Resume Building",
    "Placement Assistance",
    "Recorded Sessions",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Angular Technical Training
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-100">
              Master Angular from beginner to advanced level with hands-on
              projects. Learn TypeScript, Components, Routing, RxJS, REST APIs,
              Angular Material, Authentication, Deployment, and build
              enterprise-grade web applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Enroll Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-700">
                Download Syllabus
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Angular Training"
              className="rounded-xl shadow-xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Course Modules
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
              >
                <h3 className="font-semibold text-lg">{module}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Learn through practical coding exercises and real-world
                  examples.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Training Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow p-6 text-center"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-bold mb-5">Technologies Covered</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Angular CLI</li>
              <li>TypeScript</li>
              <li>RxJS</li>
              <li>REST APIs</li>
              <li>Angular Material</li>
              <li>Bootstrap & Tailwind CSS</li>
              <li>JWT Authentication</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-bold mb-5">Who Can Join?</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Students</li>
              <li>Fresh Graduates</li>
              <li>Software Developers</li>
              <li>JavaScript Developers</li>
              <li>Working Professionals</li>
              <li>Career Switchers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Build Modern Web Applications with Angular
          </h2>

          <p className="mt-5 text-lg">
            Join our expert-led Angular Technical Training and gain practical
            experience through live projects, coding assignments, and interview
            preparation.
          </p>

          <button className="mt-8 bg-white text-red-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200">
            Register Today
          </button>
        </div>
      </section>
    </div>
  );
}
