import React from "react";

export default function OracleFusionTraining_Orig() {
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

  const Card = ({ title, color, description, items }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition duration-300">
      <h3 className={`text-2xl font-bold mb-3 ${color}`}>{title}</h3>
      <p className="text-gray-600 leading-7 mb-5">{description}</p>
      <ul className="space-y-2 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const ListCard = ({ title, items, icon = "✓" }) => (
    <div className="bg-white rounded-2xl shadow p-7">
      <h3 className="text-2xl font-bold text-blue-700 mb-5">{title}</h3>
      <ul className="space-y-3 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span>{icon}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const scrollToContact = () => {
    document.getElementById("oracle-fusion-contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-16">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 text-white text-center px-6 py-16 md:py-24">
          <p className="uppercase tracking-[0.2em] text-blue-100 font-semibold">
            Inspiration I.T. Training
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Oracle Fusion Cloud Training
          </h1>

          <p className="max-w-4xl mx-auto mt-6 text-lg md:text-xl leading-8 text-blue-50">
            Build your expertise in Oracle Fusion Cloud applications with
            functional, technical and integration training designed around
            real-world enterprise business processes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
            <button
              onClick={() =>
                document
                  .getElementById("oracle-fusion-courses")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="bg-white text-blue-800 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Training Modules
            </button>

            <button
              onClick={scrollToContact}
              className="border border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition"
            >
              Contact Us
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {[
              ["Functional", "Business process training"],
              ["Technical", "Reporting and development"],
              ["Integration", "Cloud application connectivity"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="bg-white/10 border border-white/20 rounded-xl p-5"
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-blue-100 mt-2">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wider">
              About the Course
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
              Learn Oracle Fusion with Practical Business Scenarios
            </h2>
            <p className="text-gray-600 leading-8">
              Oracle Fusion Cloud is an enterprise application platform used by
              organizations to manage finance, human resources, procurement,
              supply chain and other business operations. Our training focuses
              on understanding application functionality, business processes,
              configuration concepts and the technical skills used in
              implementation and support projects.
            </p>
            <p className="text-gray-600 leading-8 mt-4">
              Learners can focus on a functional module, technical development,
              integrations or reporting based on their experience and career
              objectives.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              What You Will Learn
            </h3>
            <ul className="space-y-4">
              {[
                "Navigate Oracle Fusion Cloud applications",
                "Understand enterprise business processes",
                "Explore configuration and implementation concepts",
                "Work with reporting and data migration tools",
                "Understand integrations using APIs and OIC",
                "Prepare for project scenarios and technical interviews",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Training Modules */}
        <section id="oracle-fusion-courses" className="scroll-mt-8">
          <div className="text-center mb-10">
            <p className="text-blue-700 font-semibold uppercase tracking-wider">
              Training Curriculum
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our Oracle Fusion Training Modules
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              Explore functional and technical learning paths covering commonly
              used Oracle Fusion Cloud modules and related tools. Course
              coverage can be tailored to your learning goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {modules.map((module) => (
              <Card key={module.title} {...module} />
            ))}
          </div>
        </section>

        {/* Project Lifecycle */}
        <section className="bg-white rounded-2xl shadow p-7 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Oracle Fusion Implementation Lifecycle
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              Understand how Oracle Fusion implementation projects progress from
              business requirements through configuration, testing and ongoing
              support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectPhases.map((phase, index) => (
              <div
                key={phase}
                className="rounded-xl bg-blue-50 border border-blue-100 p-5"
              >
                <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold mb-3">
                  {index + 1}
                </div>
                <p className="font-semibold text-gray-800">{phase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching and Audience */}
        <section className="grid lg:grid-cols-2 gap-8">
          <ListCard title="Our Teaching Approach" items={teaching} icon="📘" />
          <ListCard title="Who Can Join?" items={who} icon="🎓" />
        </section>

        {/* Career Opportunities */}
        <section>
          <div className="text-center mb-9">
            <h2 className="text-3xl md:text-4xl font-bold">
              Career Opportunities
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
              Build relevant knowledge for Oracle Fusion implementation,
              development, integration, reporting and support roles. Career
              outcomes depend on your skills, experience and the requirements of
              individual employers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {careerRoles.map((role) => (
              <div
                key={role}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="text-2xl mb-3">💼</div>
                <h3 className="font-semibold text-gray-800">{role}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose Inspiration I.T. Training?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-xl p-5 shadow flex gap-3 items-start"
              >
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600 leading-8">
              We aim to provide structured learning, practical demonstrations,
              guided exercises and career-focused preparation to help learners
              develop their Oracle Fusion knowledge and professional confidence.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold text-indigo-700 mb-5">
              Our Core Values
            </h2>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="bg-blue-50 text-blue-800 rounded-full px-4 py-2 font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Enrollment */}
        <section
          id="oracle-fusion-contact"
          className="scroll-mt-8 rounded-3xl bg-gradient-to-r from-blue-800 to-indigo-700 text-white text-center py-14 md:py-16 px-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Start Your Oracle Fusion Learning Journey
          </h2>
          <p className="mt-5 text-lg md:text-xl">
            Learn. Practice. Understand. Grow.
          </p>
          <p className="max-w-3xl mx-auto mt-5 leading-8 text-blue-50">
            Whether you want to become an Oracle Fusion Functional Consultant,
            Technical Consultant, OIC Developer or Reporting Specialist, begin
            by choosing the training path that matches your career goals.
          </p>

          <a
            href="https://oracle.inspiration-academy.net/"
            className="inline-block mt-8 bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Enquire About Training
          </a>
        </section>
      </div>
    </div>
  );
}
