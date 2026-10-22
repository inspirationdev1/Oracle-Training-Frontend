import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OracleFusionTraining() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const features = [
    "Experienced Oracle Fusion Trainers",
    "Real-Time Business Scenarios",
    "Hands-on Functional Exercises",
    "Configuration and Setup Practice",
    "End-to-End Business Process Training",
    "Real-Time Project Experience",
    "Interview Preparation",
    "Resume Building Assistance",
    "Mock Interviews",
    "Flexible Online Training",
    "Industry-Relevant Curriculum",
    "Career Guidance and Mentorship",
  ];

  const teaching = [
    "Instructor-led Live Sessions",
    "Oracle Fusion Navigation and Architecture",
    "Module-wise Functional Training",
    "Business Process Demonstrations",
    "Configuration and Setup Exercises",
    "Practical Assignments After Each Module",
    "Real-Time Business Scenarios",
    "Implementation Lifecycle Overview",
    "Interview Questions and Answers",
    "Live Doubt-Clearing Sessions",
  ];

  const who = [
    "Fresh Graduates",
    "Working Professionals",
    "ERP Functional Consultants",
    "Finance Professionals",
    "HR Professionals",
    "Supply Chain Professionals",
    "Software Developers",
    "ERP Career Switchers",
    "Experienced Oracle EBS Professionals",
  ];

  const modules = [
    {
      title: "Oracle Fusion HCM",
      color: "text-blue-700",
      description:
        "Learn cloud-based Human Capital Management and employee lifecycle processes.",
      items: [
        "Global HR and Workforce Structures",
        "Legal Entities and Business Units",
        "Jobs, Grades and Positions",
        "Worker and Employee Management",
        "Absence Management",
        "Recruiting and Talent Management Overview",
        "Security Roles and Data Access",
        "HCM Reporting Basics",
      ],
    },
    {
      title: "Oracle Fusion Financials",
      color: "text-emerald-700",
      description:
        "Understand enterprise finance processes and financial configuration.",
      items: [
        "General Ledger (GL)",
        "Accounts Payable (AP)",
        "Accounts Receivable (AR)",
        "Cash Management",
        "Fixed Assets",
        "Tax Configuration Overview",
        "Financial Reporting",
        "Period Close Processes",
      ],
    },
    {
      title: "Oracle Fusion SCM",
      color: "text-orange-700",
      description:
        "Explore procurement, inventory and supply chain operations.",
      items: [
        "Procurement and Purchasing",
        "Supplier Management",
        "Purchase Requisitions",
        "Purchase Orders",
        "Receiving and Deliveries",
        "Inventory Management",
        "Order Management Overview",
        "Supply Chain Business Flows",
      ],
    },
    {
      title: "Oracle Fusion Technical",
      color: "text-purple-700",
      description:
        "Develop the technical skills required for Oracle Fusion extensions,reporting and integrations.",
      items: [
        "Oracle Fusion Architecture",
        "OTBI and BI Publisher Reports",
        "Data Models and Report Templates",
        "SQL and PL/SQL Fundamentals",
        "File-Based Data Import (FBDI)",
        "REST and SOAP APIs",
        "Oracle Integration Cloud (OIC)",
        "Visual Builder and Extensions Overview",
      ],
    },
    {
      title: "Oracle Integration Cloud",
      color: "text-cyan-700",
      description:
        "Learn how enterprise applications exchange data using cloud integrations.",
      items: [
        "OIC Architecture and Connections",
        "App-Driven Integrations",
        "REST and SOAP Adapters",
        "Mappings and Transformations",
        "Lookups and Variables",
        "Scheduled Integrations",
        "Fault Handling and Monitoring",
        "Oracle Fusion API Integration",
      ],
    },
    {
      title: "Reporting and Data Migration",
      color: "text-pink-700",
      description:
        "Learn reporting, data loading and validation techniques used in implementations.",
      items: [
        "Oracle Transactional Business Intelligence (OTBI)",
        "BI Publisher Reports",
        "SQL-Based Data Analysis",
        "FBDI Templates and Data Loading",
        "Data Validation and Reconciliation",
        "Report Parameters and Layouts",
        "Error Analysis and Troubleshooting",
        "Business Data Verification",
      ],
    },
  ];

  const projectPhases = [
    "Requirement Gathering",
    "Business Process Analysis",
    "Solution Design",
    "Configuration and Setup",
    "Data Migration",
    "Integrations and Reporting",
    "Testing and Issue Resolution",
    "User Acceptance Testing",
    "Deployment Overview",
    "Post-Go-Live Support",
  ];

  const careerRoles = [
    "Oracle Fusion HCM Consultant",
    "Oracle Fusion Financials Consultant",
    "Oracle Fusion SCM Consultant",
    "Oracle Fusion Technical Consultant",
    "Oracle Integration Cloud Developer",
    "Oracle BI Publisher / OTBI Developer",
    "Oracle Fusion Support Consultant",
    "Oracle ERP Implementation Consultant",
  ];

  const values = [
    "Practical Learning",
    "Industry-Relevant Training",
    "Business Process Understanding",
    "Technical Excellence",
    "Professional Integrity",
    "Continuous Learning",
    "Career Development",
    "Student Success",
  ];

  const scrollToContact = () => {
    document.getElementById("oracle-fusion-contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToCourses = () => {
    document.getElementById("oracle-fusion-courses")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-600 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium">
                Inspiration I.T. Training
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Oracle Fusion Cloud Training
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-50">
                Build your expertise in Oracle Fusion Cloud applications with
                functional, technical and integration training designed around
                real-world enterprise business processes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={scrollToCourses}
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore Training Modules
                </button>
                {/* <button
                  onClick={scrollToContact}
                  className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-800"
                >
                  Contact Us
                </button> */}
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  // className="mt-8 bg-white text-red-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200"
                  className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-800"
                >
                  Contact Us
                </button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Functional", "Business process training"],
                  ["Technical", "Reporting and development"],
                  ["Integration", "Cloud application connectivity"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/20 bg-white/10 p-4"
                  >
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-blue-100">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                alt="Cloud technology and connected enterprise systems"
                className="w-full rounded-2xl object-cover shadow-2xl lg:h-[440px]"
              />
              <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-white/30 bg-white p-5 text-gray-800 shadow-xl sm:left-8 sm:right-8">
                <p className="text-sm font-medium text-gray-500">
                  Learn across functional and technical paths
                </p>
                <p className="mt-2 text-lg font-bold">
                  Understand. Configure. Integrate. Deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-blue-700">
              About the Course
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Learn Oracle Fusion with Practical Business Scenarios
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Oracle Fusion Cloud is an enterprise application platform used by
              organizations to manage finance, human resources, procurement,
              supply chain and other business operations. Our training focuses
              on understanding application functionality, business processes,
              configuration concepts and the technical skills used in
              implementation and support projects.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Learners can focus on a functional module, technical development,
              integrations or reporting based on their experience and career
              objectives.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">What You Will Learn</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Navigate Oracle Fusion Cloud applications",
                "Understand enterprise business processes",
                "Explore configuration and implementation concepts",
                "Work with reporting and data migration tools",
                "Understand integrations using APIs and OIC",
                "Prepare for project scenarios and technical interviews",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-green-600">✓</span>
                  <span className="leading-7 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section
        id="oracle-fusion-courses"
        className="scroll-mt-8 bg-white py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-700">
              Training Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Our Oracle Fusion Training Modules
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Explore functional and technical learning paths covering commonly
              used Oracle Fusion Cloud modules and related tools. Course
              coverage can be tailored to your learning goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <article
                key={module.title}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className={`mt-5 text-xl font-bold ${module.color}`}>
                  {module.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {module.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {module.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Lifecycle */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-300">
              Project Delivery
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Oracle Fusion Implementation Lifecycle
            </h2>
            <p className="mt-4 leading-7 text-gray-300">
              Understand how Oracle Fusion implementation projects progress from
              business requirements through configuration, testing and ongoing
              support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {projectPhases.map((phase, index) => (
              <div
                key={phase}
                className="rounded-xl border border-gray-700 bg-gray-800 p-5 transition hover:border-blue-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-semibold text-gray-100">{phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching and Audience */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          {[
            { title: "Our Teaching Approach", items: teaching, icon: "📘" },
            { title: "Who Can Join?", items: who, icon: "🎓" },
          ].map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-2xl font-bold">{group.title}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-bold text-green-600">✓</span>
                    <span className="leading-7 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-700">
              Career Pathways
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Career Opportunities
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Build relevant knowledge for Oracle Fusion implementation,
              development, integration, reporting and support roles. Career
              outcomes depend on your skills, experience and the requirements of
              individual employers.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerRoles.map((role, index) => (
              <article
                key={role}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-800">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-semibold leading-6 text-gray-800">
                  {role}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-700">
              Inspiration Academy
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Why Choose Inspiration I.T. Training?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 leading-6 text-gray-700">{feature}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment and Values */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <article className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-700">Our Commitment</h2>
            <p className="mt-5 leading-8 text-gray-600">
              We aim to provide structured learning, practical demonstrations,
              guided exercises and career-focused preparation to help learners
              develop their Oracle Fusion knowledge and professional confidence.
            </p>
          </article>
          <article className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-indigo-700">
              Our Core Values
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-medium text-blue-800"
                >
                  {value}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Contact / Enrollment */}
      <section
        id="oracle-fusion-contact"
        className="scroll-mt-8 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 py-16 text-white md:py-20"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-100">
            Start Learning Today
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Start Your Oracle Fusion Learning Journey
          </h2>
          <p className="mt-5 text-lg md:text-xl">
            Learn. Practice. Understand. Grow.
          </p>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-50">
            Whether you want to become an Oracle Fusion Functional Consultant,
            Technical Consultant, OIC Developer or Reporting Specialist, begin
            by choosing the training path that matches your career goals.
          </p>
          <a
            href="https://oracle.inspiration-academy.net/"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            Enquire About Training
          </a>
        </div>
      </section>
    </div>
  );
}
