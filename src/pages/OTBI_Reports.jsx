import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OTBI_Reports() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const features = [
    {
      title: "Introduction to OTBI",
      description:
        "Understand Oracle Transactional Business Intelligence, its architecture, capabilities, and role in Oracle Fusion reporting.",
    },
    {
      title: "Subject Areas",
      description:
        "Learn how to select appropriate subject areas and understand facts, dimensions, attributes, and measures.",
    },
    {
      title: "Creating Analyses",
      description:
        "Build analyses using columns, filters, sorting, grouping, totals, and aggregation functions.",
    },
    {
      title: "Filters & Prompts",
      description:
        "Create report filters, dashboard prompts, presentation variables, and parameter-driven reports.",
    },
    {
      title: "Calculated Measures",
      description:
        "Create formulas, derived metrics, conditional expressions, and calculations for business analysis.",
    },
    {
      title: "Charts & Visualizations",
      description:
        "Present business information using bar charts, pie charts, line charts, tables, and pivot tables.",
    },
    {
      title: "Interactive Dashboards",
      description:
        "Combine analyses, prompts, dashboard pages, and visualizations into interactive reporting experiences.",
    },
    {
      title: "Oracle Fusion HCM Reporting",
      description:
        "Explore employee, department, workforce, and other supported HCM reporting subject areas.",
    },
    {
      title: "Oracle Fusion ERP Reporting",
      description:
        "Analyze financial, procurement, supplier, invoice, and other supported ERP business information.",
    },
    {
      title: "Oracle Fusion SCM Reporting",
      description:
        "Explore supported supply chain, inventory, purchasing, and operational reporting subject areas.",
    },
    {
      title: "Report Security & Performance",
      description:
        "Understand data security, role-based access, query efficiency, and troubleshooting techniques.",
    },
    {
      title: "Real-Time Projects & Interviews",
      description:
        "Develop practical dashboards and analyses while preparing for Oracle OTBI technical interviews.",
    },
  ];

  const projects = [
    {
      title: "Employee Workforce Dashboard",
      description:
        "Build a workforce dashboard showing employee counts, department distribution, and supported workforce metrics.",
      technologies: "HCM Subject Areas · Analyses · Charts",
    },
    {
      title: "Financial Performance Dashboard",
      description:
        "Create financial analyses for suitable account balances, expenses, or other available financial measures.",
      technologies: "ERP Subject Areas · Measures · Filters",
    },
    {
      title: "Procurement Analysis",
      description:
        "Analyze purchasing activity, supplier information, and procurement trends using available subject areas.",
      technologies: "Procurement · Tables · Pivot Views",
    },
    {
      title: "Interactive Management Dashboard",
      description:
        "Combine multiple analyses with dashboard prompts and filters to help users explore business performance.",
      technologies: "Dashboard Pages · Prompts · Visualizations",
    },
  ];

  const benefits = [
    {
      icon: "📊",
      title: "Hands-On Training",
      description:
        "Learn OTBI reporting through practical exercises and business-focused examples.",
    },
    {
      icon: "📈",
      title: "Dashboard Development",
      description:
        "Build interactive dashboards and meaningful visualizations for business users.",
    },
    {
      icon: "🏢",
      title: "Business Scenarios",
      description:
        "Explore reporting requirements across Oracle Fusion HCM, ERP, and SCM.",
    },
    {
      icon: "🎯",
      title: "Interview Preparation",
      description:
        "Practice subject-area selection, formulas, filters, and real-world reporting questions.",
    },
  ];

  const technologies = [
    "Oracle OTBI",
    "Oracle Fusion HCM",
    "Oracle Fusion ERP",
    "Oracle Fusion SCM",
    "Subject Areas",
    "Facts & Dimensions",
    "Analyses",
    "Filters & Prompts",
    "Calculated Measures",
    "Dashboard Development",
    "Charts & Graphs",
    "Pivot Tables",
    "Aggregation Functions",
    "Presentation Variables",
    "Role-Based Security",
    "Report Troubleshooting",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Oracle OTBI Reports Training
              </h1>

              <p className="mt-6 text-lg leading-8 text-red-50">
                Learn Oracle Transactional Business Intelligence (OTBI) and
                develop interactive analyses, dashboards, subject-area reports,
                filters, prompts, calculated measures, charts, and real-time
                Oracle Fusion reporting solutions.
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
                <span>✓ Interactive Dashboards</span>
                <span>✓ Real-Time Scenarios</span>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Business intelligence analytics dashboard"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Course */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-red-700">
              About the Course
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Turn Oracle Fusion Data into Business Insights
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Oracle Transactional Business Intelligence enables users to
              analyze transactional information from Oracle Fusion Cloud
              Applications through predefined subject areas. Learn to build
              analyses, filter data, calculate measures, and present information
              through interactive dashboards.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              This course focuses on practical reporting requirements across
              supported HCM, ERP, and SCM subject areas, with an emphasis on
              business analysis and report usability.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">What You Will Learn</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Select the correct subject areas for business requirements.",
                "Create analyses with filters, sorting, and aggregation.",
                "Build dashboard prompts and interactive pages.",
                "Create calculated measures and formulas.",
                "Design charts, tables, and pivot views.",
                "Understand security and reporting troubleshooting.",
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

      {/* OTBI Concepts */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Core OTBI Reporting Concepts
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Understand the building blocks required to develop useful and
              reliable Oracle Fusion reports.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Subject Areas",
                description:
                  "Predefined business data structures that provide access to related reporting attributes and measures.",
                icon: "🗂️",
              },
              {
                title: "Analyses",
                description:
                  "Reports created by selecting columns, applying filters, and organizing data.",
                icon: "📋",
              },
              {
                title: "Calculated Measures",
                description:
                  "Formulas and expressions used to derive useful business metrics.",
                icon: "🧮",
              },
              {
                title: "Dashboards",
                description:
                  "Pages that combine analyses and prompts into an interactive business view.",
                icon: "📊",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
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
              OTBI Course Modules
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Progress from OTBI fundamentals to subject-area analysis,
              dashboards, calculated measures, and enterprise reporting
              projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 font-bold text-red-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Workflow */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              OTBI Report Development Workflow
            </h2>

            <p className="mt-4 text-gray-300">
              Follow a structured approach to building a business analysis.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand Requirements",
                description:
                  "Identify business questions, required metrics, and report filters.",
              },
              {
                number: "02",
                title: "Select Subject Area",
                description:
                  "Choose a suitable subject area and the required attributes and measures.",
              },
              {
                number: "03",
                title: "Build & Validate",
                description:
                  "Create analyses, apply filters, and verify totals and results.",
              },
              {
                number: "04",
                title: "Publish Dashboard",
                description:
                  "Organize analyses into dashboards and configure suitable prompts and access.",
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
              Real-Time OTBI Project Scenarios
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
            Develop the reporting and analytical skills used in Oracle Fusion
            Cloud business intelligence.
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
              Build practical Oracle reporting skills with structured exercises
              and business-oriented examples.
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

      {/* Training Details */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Training Highlights</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Hands-on OTBI analysis development",
                "Subject-area exploration",
                "Filters and dashboard prompts",
                "Calculated measures and expressions",
                "Charts, tables, and pivot views",
                "Dashboard design and troubleshooting",
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
                "Fresh graduates interested in Oracle reporting",
                "Oracle Fusion functional consultants",
                "Oracle technical consultants",
                "ERP, HCM, and SCM reporting professionals",
                "Business analysts and reporting developers",
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
                Basic knowledge of Oracle Fusion business processes and
                reporting concepts is helpful. SQL knowledge is beneficial,
                although OTBI primarily uses predefined subject areas rather
                than arbitrary SQL queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Career Opportunities
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Develop the foundation needed to pursue Oracle Fusion reporting and
            business intelligence roles.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Oracle OTBI Developer",
              "Oracle Fusion Reporting Consultant",
              "Oracle BI Analyst",
              "Oracle Fusion Functional Consultant",
              "Business Intelligence Developer",
            ].map((role) => (
              <span
                key={role}
                className="rounded-full border border-red-200 bg-red-50 px-5 py-3 font-medium text-red-800"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-red-700 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Start Your Oracle OTBI Career
          </h2>

          <p className="mt-5 text-lg leading-8 text-red-50">
            Learn OTBI analyses, subject areas, dashboards, calculated measures,
            and practical Oracle Fusion reporting scenarios with Inspiration
            Academy.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="mt-8 bg-white text-red-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200"
          >
            Contact Us
          </button>

          <p className="mt-5 text-sm text-red-100">
            Contact the academy to confirm course availability, fees, and batch
            schedules.
          </p>
        </div>
      </section>
    </div>
  );
}
