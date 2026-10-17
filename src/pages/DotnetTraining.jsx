import React from "react";

export default function DotNetTraining() {
  const courseModules = [
    ".NET & C# Fundamentals",
    "Object-Oriented Programming (OOP)",
    "ASP.NET Core MVC",
    "ASP.NET Core Web API",
    "Entity Framework Core",
    "LINQ",
    "SQL Server",
    "Authentication & Authorization (JWT)",
    "Dependency Injection",
    "RESTful API Development",
    "Azure Fundamentals",
    "Git & GitHub",
    "Real-Time Project",
    "Interview Preparation",
    "Resume Building",
    "Placement Assistance",
  ];

  const highlights = [
    {
      title: "Expert Trainers",
      description:
        "Learn from experienced .NET professionals with real-world project expertise.",
    },
    {
      title: "Hands-on Projects",
      description:
        "Build enterprise-grade applications using ASP.NET Core and SQL Server.",
    },
    {
      title: "Flexible Batches",
      description:
        "Choose from weekday, weekend, online, or classroom sessions.",
    },
    {
      title: "Career Support",
      description:
        "Resume preparation, mock interviews, and placement assistance.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              .NET Technical Training
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-100">
              Become a professional .NET Full Stack Developer by mastering C#,
              ASP.NET Core MVC, Web API, Entity Framework Core, SQL Server,
              Azure, and real-time application development.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
                Enroll Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700">
                Download Syllabus
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=".NET Training"
              className="rounded-xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Course Modules
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseModules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >
                <h3 className="font-semibold text-lg">{module}</h3>

                <p className="text-gray-600 mt-3 text-sm">
                  Practical coding exercises with real-world examples.
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
            Why Choose Our Training?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow bg-gray-50 text-center"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold mb-5">Technologies Covered</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>C# Programming</li>
              <li>ASP.NET Core MVC</li>
              <li>ASP.NET Core Web API</li>
              <li>Entity Framework Core</li>
              <li>LINQ</li>
              <li>SQL Server</li>
              <li>JWT Authentication</li>
              <li>Azure Basics</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold mb-5">Who Should Join?</h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Students & Fresh Graduates</li>
              <li>Software Developers</li>
              <li>Java Developers moving to .NET</li>
              <li>Working Professionals</li>
              <li>Career Switchers</li>
              <li>Anyone interested in Full Stack Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Launch Your Career as a .NET Developer
          </h2>

          <p className="mt-5 text-lg">
            Learn from industry experts, build real-world applications, and
            prepare for technical interviews with our comprehensive .NET
            Technical Training program.
          </p>

          <button className="mt-8 bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
