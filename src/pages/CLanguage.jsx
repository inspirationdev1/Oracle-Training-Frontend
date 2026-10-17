import React from "react";
import { Link } from "react-router-dom";

export default function CLanguage() {
  const modules = [
    {
      title: "Module 1",
      topics: "Introduction to C++, IDE Setup, Program Structure, Input & Output"
    },
    {
      title: "Module 2",
      topics: "Variables, Data Types, Operators & Expressions"
    },
    {
      title: "Module 3",
      topics: "Decision Making, Loops & Pattern Programs"
    },
    {
      title: "Module 4",
      topics: "Functions, Recursion & Scope"
    },
    {
      title: "Module 5",
      topics: "Arrays, Strings & Searching Techniques"
    },
    {
      title: "Module 6",
      topics: "Pointers, References & Dynamic Memory"
    },
    {
      title: "Module 7",
      topics: "Classes, Objects & Constructors"
    },
    {
      title: "Module 8",
      topics: "Inheritance, Polymorphism & Abstraction"
    },
    {
      title: "Module 9",
      topics: "Templates, STL & Exception Handling"
    },
    {
      title: "Module 10",
      topics: "File Handling, Projects & Interview Preparation"
    }
  ];

  const benefits = [
    "Live Online Training",
    "Hands-on Coding",
    "Real-Time Projects",
    "Assignments",
    "Interview Preparation",
    "Resume Building",
    "Placement Assistance",
    "Certificate of Completion"
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                C++ Technical Training
              </h1>

              <p className="mt-6 text-lg leading-8">
                Master C++ programming from fundamentals to advanced
                Object-Oriented Programming concepts. Learn through
                practical coding sessions, real-world examples,
                mini projects, and interview-focused exercises.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
                >
                  Enroll Now
                </Link>

                <Link
                  to="/about"
                  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700"
                >
                  Download Syllabus
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                alt="C++ Programming"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* About Course */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            About the Course
          </h2>

          <p className="text-gray-700 text-lg leading-8">
            Our C++ Technical Training is designed for students,
            beginners, and software professionals who want to build
            strong programming skills. The course starts with the
            basics of C++ and progresses to advanced concepts such as
            Object-Oriented Programming (OOP), Standard Template
            Library (STL), file handling, and project development.
            Every topic includes practical coding exercises and
            interview-oriented examples.
          </p>

        </div>
      </section>

      {/* Modules */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Course Modules
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-700">
                  {module.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {module.topics}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="bg-blue-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Training Highlights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg"
              >
                <h3 className="font-semibold text-lg text-blue-700">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Skills You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-gray-50 rounded-xl shadow p-8">
              <ul className="space-y-3 list-disc ml-5">
                <li>C++ Programming Fundamentals</li>
                <li>Problem Solving Techniques</li>
                <li>Object-Oriented Programming</li>
                <li>Pointers & Memory Management</li>
                <li>Data Structures Basics</li>
                <li>File Handling</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8">
              <ul className="space-y-3 list-disc ml-5">
                <li>Templates & STL</li>
                <li>Exception Handling</li>
                <li>Debugging Techniques</li>
                <li>Mini Projects</li>
                <li>Interview Questions</li>
                <li>Coding Best Practices</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Become a Professional C++ Developer
          </h2>

          <p className="mt-6 text-lg leading-8">
            Join our comprehensive C++ Technical Training and gain the
            programming skills required for software development,
            competitive programming, and technical interviews.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Register Today
          </Link>

        </div>

      </section>

    </div>
  );
}