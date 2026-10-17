import React from "react";

export default function OIC() {
  const modules = [
    {
      number: "01",
      title: "Introduction to Oracle OIC",
      description:
        "Understand Oracle Integration Cloud architecture, its components, integration patterns, and enterprise use cases.",
      topics: ["OIC Architecture", "Integration Instances", "Connections"],
    },
    {
      number: "02",
      title: "Connections & Adapters",
      description:
        "Configure connections between Oracle Fusion Applications and external systems using standard adapters.",
      topics: ["REST Adapter", "SOAP Adapter", "ERP Cloud Adapter"],
    },
    {
      number: "03",
      title: "Integration Development",
      description:
        "Build integrations using triggers, invokes, mappings, and orchestration activities.",
      topics: ["App-Driven", "Scheduled Integrations", "Orchestration"],
    },
    {
      number: "04",
      title: "REST & SOAP APIs",
      description:
        "Integrate third-party applications and enterprise systems using API-based communication.",
      topics: ["HTTP Methods", "JSON & XML", "API Authentication"],
    },
    {
      number: "05",
      title: "Data Mapping & Transformation",
      description:
        "Transform payloads between source and target systems using OIC mapping tools.",
      topics: ["Mapper", "XSLT Basics", "JSON & XML Mapping"],
    },
    {
      number: "06",
      title: "Oracle Fusion Integration",
      description:
        "Connect Oracle Fusion ERP, HCM, and SCM with external applications and business systems.",
      topics: ["Business Events", "Fusion REST APIs", "ERP Integrations"],
    },
    {
      number: "07",
      title: "File-Based Integrations",
      description:
        "Develop integrations for importing, exporting, and processing enterprise files.",
      topics: ["Stage File", "SFTP", "CSV & ZIP Processing"],
    },
    {
      number: "08",
      title: "Scheduled & Event-Driven Flows",
      description:
        "Automate recurring data transfers and build event-based integration workflows.",
      topics: ["Schedules", "Business Events", "Polling Patterns"],
    },
    {
      number: "09",
      title: "Error Handling & Recovery",
      description:
        "Handle runtime failures, build fault policies, and design reliable integration processes.",
      topics: ["Scope Fault Handlers", "Retries", "Reprocessing"],
    },
    {
      number: "10",
      title: "Monitoring & Troubleshooting",
      description:
        "Monitor integration instances, inspect activity streams, and diagnose runtime issues.",
      topics: ["Instance Tracking", "Activity Stream", "Error Logs"],
    },
    {
      number: "11",
      title: "Security & Deployment",
      description:
        "Configure secure connections, manage credentials, and move integrations between environments.",
      topics: ["Credentials", "Certificates", "Packages & Deployment"],
    },
    {
      number: "12",
      title: "Real-Time Project & Interview Preparation",
      description:
        "Develop end-to-end integration solutions and prepare for OIC technical interviews.",
      topics: ["Project Development", "Scenarios", "Mock Interviews"],
    },
  ];

  const benefits = [
    {
      title: "Practical Training",
      description:
        "Learn integration development through guided, hands-on exercises.",
      icon: "⚙️",
    },
    {
      title: "Real-Time Scenarios",
      description:
        "Practice business integration scenarios based on enterprise requirements.",
      icon: "🔗",
    },
    {
      title: "Project Guidance",
      description:
        "Understand the complete lifecycle from requirements to deployment.",
      icon: "🚀",
    },
    {
      title: "Career Preparation",
      description:
        "Prepare your resume, practice interview questions, and explain integration designs confidently.",
      icon: "🎯",
    },
  ];

  const technologies = [
    "Oracle Integration Cloud",
    "Oracle Fusion ERP",
    "Oracle Fusion HCM",
    "Oracle Fusion SCM",
    "REST & SOAP APIs",
    "ERP Cloud Adapter",
    "FTP & SFTP",
    "JSON & XML",
    "XSLT & Data Mapping",
    "Scheduled Integrations",
    "Fault Handling",
    "Integration Monitoring",
  ];

  const projectExamples = [
    {
      title: "Employee Data Integration",
      description:
        "Integrate employee information between Oracle Fusion HCM and an external HR application.",
      flow: "HR Application → OIC → Oracle Fusion HCM",
    },
    {
      title: "Supplier & Invoice Integration",
      description:
        "Process supplier or invoice data from an external system and load it into Oracle Fusion ERP.",
      flow: "External ERP → OIC → Fusion ERP",
    },
    {
      title: "Scheduled File Import",
      description:
        "Read files from SFTP, transform records, and send the data to a target application.",
      flow: "SFTP → OIC → Data Mapping → Target API",
    },
    {
      title: "Third-Party API Integration",
      description:
        "Call an external REST API, transform its response, and update a business application.",
      flow: "Source Application → OIC → REST API",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium">
                Oracle Cloud Integration Training
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Oracle Integration Cloud (OIC) Training
              </h1>

              <p className="mt-6 text-lg leading-8 text-red-50">
                Become an Oracle Integration Cloud Developer by learning
                integration design, REST and SOAP APIs, Oracle Fusion
                integrations, adapters, data mapping, scheduled flows, error
                handling, monitoring, and end-to-end project development.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-red-700 transition hover:bg-gray-100"
                >
                  Enroll Now
                </a>

                <a
                  href="#syllabus"
                  className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-red-700"
                >
                  Explore Syllabus
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-red-50">
                <span>✓ Hands-on Learning</span>
                <span>✓ Real-Time Scenarios</span>
                <span>✓ Project-Based Training</span>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                alt="Cloud integration and enterprise technology"
                className="w-full rounded-2xl object-cover shadow-2xl lg:h-[440px]"
              />

              <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-white/30 bg-white p-5 text-gray-800 shadow-xl sm:left-8 sm:right-8">
                <p className="text-sm font-medium text-gray-500">
                  Learn the complete integration lifecycle
                </p>
                <p className="mt-2 text-lg font-bold">
                  Design. Integrate. Transform. Deploy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-wider text-red-700">
              About the Course
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Learn to Connect Applications with Oracle OIC
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Oracle Integration Cloud is an integration platform used to
              connect cloud applications, on-premises systems, APIs, and
              enterprise data sources. This training covers how to design,
              develop, test, monitor, and maintain integrations for business
              requirements.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Learn how OIC works with Oracle Fusion ERP, HCM, and SCM, along
              with third-party applications, file systems, and REST or SOAP
              services.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">What You Will Learn</h3>

            <ul className="mt-6 space-y-4">
              {[
                "Create and configure OIC connections.",
                "Build integrations using triggers and invoke activities.",
                "Map and transform data between applications.",
                "Work with Oracle Fusion REST APIs and adapters.",
                "Handle errors and troubleshoot failed integrations.",
                "Deploy integrations and monitor production instances.",
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

      {/* Course Modules */}
      <section id="syllabus" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Training Curriculum
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Oracle OIC Course Modules
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Follow a structured learning path from OIC fundamentals to
              integration development, deployment, and troubleshooting.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.number}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 font-bold text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                  {module.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">{module.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {module.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {module.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-red-300">
              Integration Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Understand How OIC Works
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              Learn how applications exchange data through a centralized
              integration layer.
            </p>
          </div>

          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
            <div className="flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-gray-800 p-6 text-center">
              <span className="text-3xl">🖥️</span>
              <h3 className="mt-3 font-bold">Source System</h3>
              <p className="mt-2 text-sm text-gray-300">
                Oracle Fusion, files, or external applications
              </p>
            </div>

            <div className="flex items-center justify-center text-3xl text-red-300">
              →
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-red-400 bg-red-900/40 p-6 text-center">
              <span className="text-3xl">🔗</span>
              <h3 className="mt-3 font-bold">Oracle Integration Cloud</h3>
              <p className="mt-2 text-sm text-gray-200">
                Connections, orchestration, mapping, and error handling
              </p>
            </div>

            <div className="flex items-center justify-center text-3xl text-red-300">
              →
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-gray-800 p-6 text-center">
              <span className="text-3xl">☁️</span>
              <h3 className="mt-3 font-bold">Target System</h3>
              <p className="mt-2 text-sm text-gray-300">
                Fusion ERP, HCM, SCM, or third-party services
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-gray-300">
            Depending on the business requirement, integrations can be
            application-triggered, scheduled, event-driven, or file-based. The
            exact flow depends on the source, target, and available connections.
          </p>
        </div>
      </section>

      {/* Real-Time Projects */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Hands-On Practice
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Real-Time OIC Project Scenarios
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Practice typical enterprise integration requirements and
              understand how to design solutions from end to end.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projectExamples.map((project, index) => (
              <article
                key={project.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-100 font-bold text-red-700">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Sample Integration Flow
                  </p>
                  <p className="mt-2 break-words font-mono text-sm leading-6 text-red-700">
                    {project.flow}
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
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Technologies Covered
            </h2>
            <p className="mt-4 text-gray-600">
              Learn the tools and concepts used in Oracle cloud integration
              projects.
            </p>
          </div>

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
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Inspiration Academy
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Why Choose Our OIC Training?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
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
                "Step-by-step practical exercises",
                "Online instructor-led sessions",
                "Integration design and implementation",
                "Error handling and troubleshooting",
                "Project development guidance",
                "Interview questions and mock interviews",
                "Resume and career preparation",
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
                "Fresh graduates interested in cloud integration",
                "Java, .NET, or other application developers",
                "Oracle Fusion functional and technical consultants",
                "Middleware and integration developers",
                "IT professionals moving to Oracle Cloud",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-red-600">→</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-red-50 p-4">
              <p className="font-semibold text-red-800">Recommended basics</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Basic knowledge of APIs, JSON or XML, and application concepts
                is helpful. Prior OIC experience is not required for the
                introductory modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Career Opportunities After OIC Training
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            Build the skills needed to pursue roles involving Oracle Cloud
            integrations, enterprise APIs, and application connectivity. Career
            opportunities depend on your practical skills and experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Oracle OIC Developer",
              "Oracle Integration Consultant",
              "Oracle Technical Consultant",
              "Cloud Integration Developer",
              "Oracle Middleware Developer",
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
      <section
        id="contact"
        className="bg-gradient-to-r from-red-800 to-red-600 py-16 text-white md:py-20"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-wider text-red-100">
            Start Learning Today
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Build Your Oracle OIC Career
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-red-50">
            Learn Oracle Integration Cloud with practical exercises, enterprise
            integration scenarios, and guided project development at Inspiration
            Academy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@inspirationsms.com?subject=Oracle%20OIC%20Training%20Enquiry"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-red-700 transition hover:bg-gray-100"
            >
              Enquire Now
            </a>

            <a
              href="#syllabus"
              className="rounded-lg border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-red-700"
            >
              View Course Modules
            </a>
          </div>

          <p className="mt-6 text-sm text-red-100">
            Contact the academy to confirm batch schedules, fees, and training
            availability.
          </p>
        </div>
      </section>
    </div>
  );
}
