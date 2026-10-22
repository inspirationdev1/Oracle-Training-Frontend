import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function VBS() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const modules = [
    {
      title: "Introduction to VBS & VBCS",
      description:
        "Understand Visual Builder, Visual Builder Studio, their architecture, features, and differences.",
    },
    {
      title: "Visual Application Development",
      description:
        "Create responsive web applications using visual designers, pages, layouts, and reusable components.",
    },
    {
      title: "Page Design & UI Components",
      description:
        "Build forms, tables, dashboards, navigation menus, dialogs, and responsive user interfaces.",
    },
    {
      title: "Business Objects & Data",
      description:
        "Understand business objects, fields, relationships, data management, and generated REST endpoints.",
    },
    {
      title: "REST API Integration",
      description:
        "Connect applications to Oracle Fusion REST APIs and external services using service connections.",
    },
    {
      title: "Variables, Actions & Events",
      description:
        "Manage application variables, action chains, page events, service calls, and conditional behavior.",
    },
    {
      title: "JavaScript, HTML & CSS",
      description:
        "Customize application behavior and styling with JavaScript, HTML, CSS, and expressions.",
    },
    {
      title: "Oracle Fusion Extensions",
      description:
        "Learn how supported Fusion Cloud Applications can be extended with custom pages and user experiences.",
    },
    {
      title: "Forms, Tables & Validation",
      description:
        "Create data-entry screens with validation, CRUD operations, search, filtering, and pagination.",
    },
    {
      title: "Security & Application Access",
      description:
        "Understand authentication, authorization, user roles, service security, and secure application design.",
    },
    {
      title: "Git, Projects & CI/CD",
      description:
        "Use Visual Builder Studio projects, Git repositories, branches, code reviews, and build pipelines.",
    },
    {
      title: "Deployment & Real-Time Projects",
      description:
        "Test, publish, troubleshoot, and maintain applications through practical project scenarios.",
    },
  ];

  const projects = [
    {
      title: "Employee Management Application",
      description:
        "Create an employee directory with employee forms, searchable tables, validations, and REST API integration.",
      technologies: "Pages · Forms · Tables · REST APIs",
    },
    {
      title: "Oracle Fusion Data Dashboard",
      description:
        "Build a dashboard that displays business information retrieved from supported Oracle Fusion REST services.",
      technologies: "Service Connections · Variables · Charts",
    },
    {
      title: "Purchase Request Application",
      description:
        "Develop a request-entry interface with validation, status tracking, and integration with a suitable backend service.",
      technologies: "Forms · Actions · Business Logic",
    },
    {
      title: "Fusion Cloud Application Extension",
      description:
        "Explore how to add a custom user interface to a supported Oracle Fusion application using VB Studio.",
      technologies: "App UI · Extension · Git · Deployment",
    },
  ];

  const benefits = [
    {
      title: "Hands-On Learning",
      description:
        "Practice building applications through guided exercises and real-world use cases.",
      icon: "💻",
    },
    {
      title: "Practical Projects",
      description:
        "Develop forms, dashboards, business applications, and API-connected interfaces.",
      icon: "🚀",
    },
    {
      title: "Oracle Cloud Skills",
      description:
        "Learn application development and extension concepts used across Oracle Cloud projects.",
      icon: "☁️",
    },
    {
      title: "Interview Preparation",
      description:
        "Practice technical questions, project explanations, and application development scenarios.",
      icon: "🎯",
    },
  ];

  const technologies = [
    "Oracle Visual Builder",
    "Visual Builder Studio",
    "VBCS Fundamentals",
    "Responsive Web Applications",
    "Oracle Fusion Extensions",
    "REST APIs",
    "Business Objects",
    "Service Connections",
    "Action Chains",
    "JavaScript",
    "HTML & CSS",
    "Git & Version Control",
    "Build Pipelines",
    "Application Deployment",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-white/30 px-4 py-2 text-sm">
                Oracle Cloud Application Development
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Oracle VBS & VBCS Training
              </h1>

              <p className="mt-6 text-lg leading-8 text-red-50">
                Learn Oracle Visual Builder and Visual Builder Studio to create
                responsive applications, build custom interfaces, integrate REST
                APIs, work with Oracle Fusion Cloud Applications, and understand
                application development, version control, and deployment.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {/* <a
                  href="#contact"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-red-700 transition hover:bg-gray-100"
                >
                  Enroll Now
                </a> */}
                {!currentUser && (
                  <div className="flex items-center gap-4">
                    {/* Enroll Button */}
                    <button
                      type="button"
                      onClick={() => navigate("/sign-up")}
                      className="bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      Enroll Now
                    </button>

                    {/* Login Button */}
                    <button
                      type="button"
                      onClick={() => navigate("/sign-in")}
                      // className="bg-red-700 text-white font-semibold px-6 py-3 rounded-lg border border-white hover:bg-red-800 transition duration-300"
                      className="bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      Login
                    </button>
                  </div>
                )}

                <a
                  href="#syllabus"
                  className="rounded-lg border border-white px-6 py-3 transition hover:bg-white hover:text-red-700"
                >
                  View Syllabus
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-red-50">
                <span>✓ Practical Training</span>
                <span>✓ API Integration</span>
                <span>✓ Project-Based Learning</span>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Application development on a computer"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-red-700">
              About the Course
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Build Modern Oracle Cloud Applications
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Oracle Visual Builder enables developers to create responsive web
              applications using visual development tools, REST services, and
              application data. Visual Builder Studio provides a collaborative
              development environment with source control, development
              workflows, and tools for extending supported Oracle Cloud
              Applications.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              This course introduces both technologies and explains when to use
              standalone visual applications versus extensions embedded in
              Oracle Fusion Cloud Applications.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">What You Will Learn</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Design responsive application pages.",
                "Build forms, tables, and dashboards.",
                "Connect REST APIs and Oracle Fusion data.",
                "Use variables, events, and action chains.",
                "Create and manage application data.",
                "Understand Git, deployment, and CI/CD.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-green-600">✓</span>
                  <span className="leading-7 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VBS vs VBCS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Understand VBS vs VBCS
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Learn the differences between building standalone applications and
              managing development projects or Fusion extensions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="inline-block rounded-lg bg-red-100 px-4 py-2 font-bold text-red-700">
                VBCS / Visual Builder
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Visual Application Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Formerly called Visual Builder Cloud Service (VBCS), Oracle
                Visual Builder provides visual development tools and a managed
                hosting environment for supported standalone applications.
              </p>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✓ Responsive web applications</li>
                <li>✓ Visual page designer and UI components</li>
                <li>✓ Business objects and REST endpoints</li>
                <li>✓ External REST service connections</li>
                <li>✓ Application publishing and lifecycle</li>
              </ul>
            </article>

            <article className="rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="inline-block rounded-lg bg-blue-100 px-4 py-2 font-bold text-blue-700">
                VBS / VB Studio
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Development & Fusion Extensions
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Visual Builder Studio provides team collaboration, source
                control, build and delivery automation, and tools for developing
                extensions for supported Oracle Fusion Cloud Applications.
              </p>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✓ Git repositories and branches</li>
                <li>✓ Custom Fusion application extensions</li>
                <li>✓ Code review and collaboration</li>
                <li>✓ Build and deployment pipelines</li>
                <li>✓ Development issue tracking</li>
              </ul>
            </article>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-6 text-gray-500">
            Note: Visual Builder and Visual Builder Studio are distinct
            offerings. Their capabilities and deployment targets differ. Confirm
            the availability and entitlements of the specific Oracle Cloud
            services required for your training environment.
          </p>
        </div>
      </section>

      {/* Course Modules */}
      <section id="syllabus" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Training Curriculum
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Course Modules
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Progress from visual application fundamentals to API integration,
              Oracle Fusion extensions, and deployment workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <article
                key={module.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 font-bold text-red-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-bold">{module.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Application Development Workflow
            </h2>

            <p className="mt-4 text-gray-300">
              Understand the steps involved in developing and delivering an
              Oracle Cloud application.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Design",
                description:
                  "Plan pages, layouts, components, and user interactions.",
              },
              {
                number: "02",
                title: "Develop",
                description:
                  "Build forms, connect services, and implement application logic.",
              },
              {
                number: "03",
                title: "Test",
                description:
                  "Validate API responses, business rules, security, and responsive layouts.",
              },
              {
                number: "04",
                title: "Deploy",
                description:
                  "Publish applications or deploy supported extensions through the relevant workflow.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-gray-700 bg-gray-800 p-6"
              >
                <span className="text-sm font-bold text-red-300">
                  STEP {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-gray-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Projects */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Practical Training
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Real-Time Project Scenarios
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <span className="text-sm font-bold text-red-700">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-xl font-bold">{project.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-700">
                    Skills Covered
                  </p>

                  <p className="mt-2 text-sm leading-6 text-red-700">
                    {project.technologies}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Technologies Covered
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center leading-7 text-gray-600">
            Develop a foundation in visual development, APIs, application
            customization, and cloud delivery practices.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 font-medium transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Choose Inspiration Academy?
            </h2>

            <p className="mt-4 text-gray-600">
              Learn through practical exercises and guided application projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-xl bg-white p-7 text-center shadow-md transition hover:shadow-xl"
              >
                <div className="text-4xl">{benefit.icon}</div>

                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Training Highlights</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Practical application development",
                "Responsive user interface design",
                "REST API integration",
                "Oracle Fusion extension concepts",
                "Application testing and debugging",
                "Version control and deployment",
                "Technical interview preparation",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-green-600">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Who Can Join?</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Fresh graduates interested in Oracle Cloud",
                "Frontend developers",
                "Oracle Fusion technical consultants",
                "JavaScript and REST API developers",
                "Application developers learning low-code tools",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-red-700">→</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-red-50 p-4">
              <h4 className="font-semibold text-red-800">
                Recommended Prerequisites
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Basic knowledge of HTML, CSS, JavaScript, and REST APIs is
                helpful. Beginners can start with the fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-red-700 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Start Your Oracle VBS & VBCS Learning Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-red-50">
            Learn visual application development, Oracle Fusion extensions, REST
            integrations, and practical project implementation with Inspiration
            Academy.
          </p>

          {/* <a
            href="mailto:info@inspirationsms.com?subject=Oracle%20VBS%20VBCS%20Training%20Enquiry"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-red-700 transition hover:bg-gray-100"
          >
            Contact Us
          </a> */}
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="mt-8 bg-white text-red-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200"
          >
            Contact Us
          </button>

          <p className="mt-5 text-sm text-red-100">
            Contact the academy to confirm course availability, batch schedules,
            and fees.
          </p>
        </div>
      </section>
    </div>
  );
}
