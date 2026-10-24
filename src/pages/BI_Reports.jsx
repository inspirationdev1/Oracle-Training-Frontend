import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseUrl } from "../environment.js";

export default function BI_Reports() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const features = [
    {
      title: "Introduction to BI Publisher",
      description:
        "Understand Oracle BI Publisher architecture, reporting components, and enterprise reporting use cases.",
    },
    {
      title: "Data Models",
      description:
        "Create data models using SQL queries, data sets, parameters, and data structures.",
    },
    {
      title: "SQL & PL/SQL",
      description:
        "Write SQL queries, joins, subqueries, aggregate functions, and PL/SQL for reporting requirements.",
    },
    {
      title: "RTF Templates",
      description:
        "Design professional PDF, Word, and other formatted reports using RTF templates.",
    },
    {
      title: "Excel & PDF Reports",
      description:
        "Generate business reports in multiple output formats with appropriate layouts and formatting.",
    },
    {
      title: "Parameters & LOVs",
      description:
        "Create report parameters, cascading parameters, and List of Values for interactive reports.",
    },
    {
      title: " bursting & Scheduling",
      description:
        "Configure report bursting, delivery destinations, and scheduled report distribution.",
    },
    {
      title: "OTBI Reporting",
      description:
        "Create analyses and dashboards using subject areas, dimensions, measures, and filters.",
    },
    {
      title: "Oracle Fusion Reports",
      description:
        "Develop reports for Oracle Fusion ERP, HCM, and SCM business requirements.",
    },
    {
      title: "Data Formatting & Expressions",
      description:
        "Apply conditional formatting, calculations, grouping, totals, and report expressions.",
    },
    {
      title: "Report Security & Troubleshooting",
      description:
        "Understand report permissions, data access, query performance, and common reporting errors.",
    },
    {
      title: "Real-Time Projects & Interviews",
      description:
        "Develop practical business reports and prepare for Oracle reporting technical interviews.",
    },
  ];

  const projects = [
    {
      title: "Employee Details Report",
      description:
        "Develop an employee report with department filters, employee details, and formatted output.",
      technologies: "SQL · Data Model · RTF · PDF",
    },
    {
      title: "Accounts Payable Invoice Report",
      description:
        "Create an invoice report containing supplier details, invoice amounts, dates, and payment status.",
      technologies: "SQL · Parameters · Grouping · Totals",
    },
    {
      title: "Purchase Order Report",
      description:
        "Design a purchase order report with supplier information, item details, quantities, and amounts.",
      technologies: "BI Publisher · RTF · Excel",
    },
    {
      title: "Scheduled and Burst Reports",
      description:
        "Configure a suitable bursting and delivery workflow for distributing reports to intended recipients.",
      technologies: "Bursting · Scheduling · Delivery",
    },
  ];

  const benefits = [
    {
      icon: "📊",
      title: "Practical Training",
      description:
        "Learn report development through guided exercises and business scenarios.",
    },
    {
      icon: "🧩",
      title: "Real-Time Projects",
      description:
        "Practice reporting requirements based on Oracle Fusion business processes.",
    },
    {
      icon: "💻",
      title: "Technical Skills",
      description:
        "Improve SQL, data modelling, template design, and report troubleshooting skills.",
    },
    {
      icon: "🎯",
      title: "Interview Preparation",
      description:
        "Prepare for technical interviews with report-development scenarios and questions.",
    },
  ];

  const technologies = [
    "Oracle BI Publisher",
    "Oracle Transactional Business Intelligence (OTBI)",
    "Oracle Fusion ERP",
    "Oracle Fusion HCM",
    "Oracle Fusion SCM",
    "SQL & PL/SQL",
    "Data Models",
    "RTF Templates",
    "Excel Templates",
    "PDF Reports",
    "Report Parameters",
    "List of Values",
    "Report Bursting",
    "Scheduled Reports",
    "XML & XSL",
    "Report Performance Tuning",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Oracle BI Reports Training
              </h1>

              <p className="mt-6 text-lg leading-8 text-red-50">
                Become an Oracle Fusion Reporting Developer by learning BI
                Publisher, OTBI, SQL, data models, RTF templates, report
                parameters, bursting, scheduling, and real-time reporting
                project development.
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
                <span>✓ Hands-On Training</span>
                <span>✓ Real-Time Reports</span>
                <span>✓ Interview Preparation</span>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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
              Build Professional Oracle Fusion Reports
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Learn to develop operational and business reports using Oracle BI
              Publisher and Oracle Transactional Business Intelligence (OTBI).
              Understand how reporting tools support enterprise requirements
              across Oracle Fusion ERP, HCM, and SCM.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Develop skills in SQL, data models, report templates,
              calculations, parameters, report scheduling, and troubleshooting
              through practical exercises.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">What You Will Learn</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Create BI Publisher data models and SQL queries.",
                "Design RTF templates for business reports.",
                "Build OTBI analyses and dashboards.",
                "Configure parameters and Lists of Values.",
                "Understand bursting and scheduled report delivery.",
                "Troubleshoot reporting and data-access issues.",
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

      {/* BI Publisher vs OTBI */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              BI Publisher vs OTBI
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Understand when to use formatted operational reports and when to
              use interactive business analytics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="inline-block rounded-lg bg-red-100 px-4 py-2 font-bold text-red-700">
                BI Publisher (BIP)
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Formatted Business Reports
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                BI Publisher is suitable for highly formatted operational
                documents, parameter-driven reports, and scheduled distribution.
              </p>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✓ SQL-based data models</li>
                <li>✓ RTF and Excel templates</li>
                <li>✓ PDF and other supported output formats</li>
                <li>✓ Parameters and Lists of Values</li>
                <li>✓ Bursting and scheduled delivery</li>
              </ul>
            </article>

            <article className="rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="inline-block rounded-lg bg-blue-100 px-4 py-2 font-bold text-blue-700">
                OTBI
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Interactive Business Analytics
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                OTBI enables users to explore transactional data through subject
                areas, analyses, filters, visualizations, and dashboards.
              </p>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✓ Subject areas and business dimensions</li>
                <li>✓ Analyses and dashboards</li>
                <li>✓ Filters and prompts</li>
                <li>✓ Charts, tables, and summaries</li>
                <li>✓ Interactive data exploration</li>
              </ul>
            </article>
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
              Course Modules
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Follow a structured learning path from SQL fundamentals through
              report design, OTBI, and enterprise reporting projects.
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
              BI Publisher Development Workflow
            </h2>

            <p className="mt-4 text-gray-300">
              Understand the major steps involved in creating a report.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Data Model",
                description:
                  "Define SQL data sets, parameters, and required data structures.",
              },
              {
                number: "02",
                title: "Template Design",
                description:
                  "Create layouts using RTF or another supported template format.",
              },
              {
                number: "03",
                title: "Test & Validate",
                description:
                  "Validate data, calculations, formatting, and report parameters.",
              },
              {
                number: "04",
                title: "Publish & Schedule",
                description:
                  "Configure report properties, access, and scheduled delivery where supported.",
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
              Real-Time Reporting Projects
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
            Learn reporting tools and technical skills used in Oracle Fusion
            reporting projects.
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
              Develop reporting skills through practical exercises and guided
              business scenarios.
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
                "Hands-on report development",
                "SQL and data model exercises",
                "RTF template design",
                "OTBI analyses and dashboards",
                "Report parameters and bursting",
                "Troubleshooting and performance basics",
                "Interview preparation",
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
                "SQL and PL/SQL developers",
                "Oracle Fusion technical consultants",
                "ERP and HCM reporting developers",
                "IT professionals moving into Oracle Cloud",
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
                Basic SQL knowledge is helpful. Beginners can start with SQL
                fundamentals before progressing to data models and advanced
                report development.
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
            Build the technical foundation needed to pursue Oracle reporting and
            business intelligence roles across enterprise applications.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Oracle BI Publisher Developer",
              "Oracle OTBI Developer",
              "Oracle Fusion Technical Consultant",
              "Oracle Reporting Consultant",
              "SQL & Reporting Developer",
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
            Start Your Oracle BI Reporting Career
          </h2>

          <p className="mt-5 text-lg leading-8 text-red-50">
            Learn BI Publisher, OTBI, SQL, report templates, and practical
            Oracle Fusion reporting scenarios with Inspiration Academy.
          </p>

          {/* <a
            href="mailto:info@inspirationsms.com?subject=Oracle%20BI%20Reports%20Training%20Enquiry"
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
            Contact the academy to confirm course availability, fees, and batch
            schedules.
          </p>
        </div>
      </section>
    </div>
  );
}
