import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CorporateTraining() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const programs = [
    {
      title: "Oracle Fusion HCM",
      description:
        "Train HR and technical teams on workforce structures, core HR processes, employee lifecycle transactions, security, and reporting.",
      topics: "Core HR · Workforce Structures · Roles & Security · HCM Reporting",
    },
    {
      title: "Oracle Fusion ERP",
      description:
        "Build practical knowledge of enterprise finance and procurement processes, including how teams work with transactions and business controls.",
      topics: "Financials · Payables · Receivables · General Ledger · Procurement",
    },
    {
      title: "Oracle Fusion SCM",
      description:
        "Help supply chain teams understand supported inventory, purchasing, order management, and operational business flows.",
      topics: "Inventory · Purchasing · Order Management · Supply Chain Processes",
    },
    {
      title: "Oracle Integration Cloud (OIC)",
      description:
        "Upskill integration teams to design, test, monitor, and troubleshoot integrations between Oracle Fusion and connected applications.",
      topics: "Integrations · Connections · Mappings · REST/SOAP · Monitoring",
    },
    {
      title: "VBS / VBCS",
      description:
        "Introduce teams to low-code application development, user interface customization, business objects, and service integrations.",
      topics: "Visual Builder · UI Design · Business Objects · Service Connections",
    },
    {
      title: "BI Publisher & OTBI",
      description:
        "Develop reporting skills for operational and management needs through formatted reports, analyses, dashboards, and business metrics.",
      topics: "Data Models · RTF Templates · Analyses · Dashboards · Report Security",
    },
  ];

  const deliveryOptions = [
    {
      icon: "🏢",
      title: "On-Site Corporate Training",
      description:
        "Instructor-led sessions delivered at your office, aligned to your team's schedule, learning goals, and business environment.",
    },
    {
      icon: "💻",
      title: "Live Online Training",
      description:
        "Interactive remote sessions for distributed teams, with demonstrations, guided exercises, Q&A, and trainer feedback.",
    },
    {
      icon: "🧩",
      title: "Customized Learning Paths",
      description:
        "Training plans shaped around team roles, current skill levels, project responsibilities, and the Oracle Fusion modules you use.",
    },
    {
      icon: "🛠️",
      title: "Practical Workshops",
      description:
        "Hands-on exercises and scenario-based workshops that help learners connect concepts to day-to-day enterprise requirements.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand Your Goals",
      description:
        "Discuss your business objectives, team roles, current knowledge, target modules, and expected learning outcomes.",
    },
    {
      number: "02",
      title: "Build the Training Plan",
      description:
        "Define the curriculum, delivery format, schedule, practice activities, and learning milestones for your team.",
    },
    {
      number: "03",
      title: "Learn Through Practice",
      description:
        "Combine instructor-led explanations with demonstrations, guided exercises, and business-oriented scenarios.",
    },
    {
      number: "04",
      title: "Review Progress",
      description:
        "Use exercises, knowledge checks, feedback, and a final review to identify strengths and areas for further development.",
    },
  ];

  const outcomes = [
    "Improve team familiarity with Oracle Fusion Cloud applications.",
    "Build shared understanding of relevant business processes and terminology.",
    "Strengthen practical configuration, integration, or reporting skills where included in the training plan.",
    "Help new team members prepare for project responsibilities.",
    "Support consistent learning across functional and technical teams.",
    "Identify further upskilling needs through exercises and review sessions.",
  ];

  const technologies = [
    "Oracle Fusion Cloud",
    "HCM",
    "ERP Financials",
    "SCM",
    "Oracle Integration Cloud (OIC)",
    "VBS / VBCS",
    "BI Publisher",
    "OTBI Reports",
    "SQL / PL/SQL Fundamentals",
    "REST & SOAP APIs",
    "HDL / HSDL Concepts",
    "Roles & Security",
    "Business Process Workflows",
    "Data Loads & Validation",
    "Integrations & Troubleshooting",
    "Practical Business Scenarios",
  ];

  const audiences = [
    "Corporate IT and application teams",
    "Oracle Fusion functional consultants",
    "Technical consultants and developers",
    "Integration and reporting teams",
    "Business analysts and process owners",
    "Project teams preparing for implementation or support",
    "New hires and teams requiring structured upskilling",
    "Organizations planning cross-functional Oracle Fusion learning",
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Business-Aligned Curriculum",
      description:
        "Prioritize topics that map to your team's responsibilities, project scope, and learning objectives.",
    },
    {
      icon: "👥",
      title: "Team-Based Learning",
      description:
        "Create a common foundation across team members while allowing content to reflect different job roles.",
    },
    {
      icon: "📚",
      title: "Structured Training",
      description:
        "Organize learning into clear modules, demonstrations, exercises, and review checkpoints.",
    },
    {
      icon: "🤝",
      title: "Trainer Interaction",
      description:
        "Give participants opportunities to ask questions, discuss scenarios, and clarify technical concepts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-500 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide">
              INSPIRATION ACADEMY · CORPORATE LEARNING
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Oracle Fusion Corporate Training
            </h1>
            <p className="mt-6 text-lg leading-8 text-red-50">
              Empower your workforce with practical Oracle Fusion Cloud
              training tailored to your organization's goals. Upskill
              functional, technical, integration, and reporting teams through
              structured learning, guided exercises, and business-focused
              scenarios.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {!currentUser && (
                <>
                  <button
                    type="button"
                    onClick={() => navigate("/sign-up")}
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-red-700 transition hover:bg-gray-100"
                  >
                    Get Started
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/sign-in")}
                    className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-red-700"
                  >
                    Login
                  </button>
                </>
              )}
              <a
                href="#programs"
                className="rounded-lg border border-white/80 px-6 py-3 transition hover:bg-white hover:text-red-700"
              >
                Explore Programs
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-red-50">
              <span>✓ Customized Learning Paths</span>
              <span>✓ Practical Workshops</span>
              <span>✓ Flexible Delivery Options</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Corporate team collaborating during professional training"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-5 left-4 right-4 rounded-xl bg-white p-5 text-gray-800 shadow-xl sm:left-8 sm:right-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
                Training built around your team
              </p>
              <p className="mt-1 text-lg font-bold">
                Functional · Technical · Integration · Reporting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Corporate Learning Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Build Oracle Fusion Skills That Support Business Goals
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Every organization has different systems, responsibilities, and
              skill requirements. Our corporate training approach starts with
              your team's objectives and shapes the learning plan around the
              Oracle Fusion applications and capabilities relevant to your
              environment.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Programs can be planned for functional users, technical teams,
              developers, integration specialists, report developers, or
              cross-functional project groups. Final topics, schedule, and
              delivery format can be agreed during training consultation.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">What Your Team Can Gain</h3>
            <ul className="mt-6 space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-green-600">✓</span>
                  <span className="leading-7 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training programs */}
      <section id="programs" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Training Programs
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Oracle Fusion Corporate Training Tracks
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Select a focused learning track or combine modules into a
              cross-functional program based on your team's requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <article
                key={program.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 font-bold text-red-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-bold">{program.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {program.description}
                </p>
                <div className="mt-5 rounded-lg bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Example topics
                  </p>
                  <p className="mt-2 text-sm leading-6 text-red-700">
                    {program.topics}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Flexible Corporate Training Formats
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Choose a delivery model that works with your team's location,
              availability, and learning requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryOptions.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
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

      {/* Process */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-wider text-red-300">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From Training Needs to Practical Learning
            </h2>
            <p className="mt-4 text-gray-300">
              A clear process helps keep corporate training focused and
              relevant.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
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

      {/* Practical approach */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-red-700">
              Applied Learning
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Learn Through Business-Focused Exercises
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Depending on the selected track, sessions can include instructor
              demonstrations, guided practice, process walkthroughs, report
              building, integration concepts, data validation, and
              troubleshooting discussions. Exercises should be aligned with
              the agreed syllabus and the access available to participants.
            </p>
            <div className="mt-7 space-y-4">
              {[
                "Role-based exercises for functional and technical learners",
                "Scenario discussions based on common enterprise workflows",
                "Guided practice with checkpoints and trainer feedback",
                "Knowledge reviews and recommendations for next learning steps",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="font-bold text-green-600">✓</span>
                  <span className="leading-7 text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
              alt="Team participating in a collaborative training workshop"
              className="h-full min-h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Technology tags */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Technologies & Topics
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-gray-600">
            Training topics can be selected and combined according to your
            organization’s Oracle Fusion landscape and team responsibilities.
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

      {/* Audience */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Who Is This For?</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Corporate training can be arranged for teams at different stages
              of their Oracle Fusion journey, from foundational awareness to
              selected technical or reporting topics.
            </p>
            <ul className="mt-6 space-y-4">
              {audiences.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-red-700">→</span>
                  <span className="leading-7 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Plan a Training Program</h3>
            <p className="mt-4 leading-7 text-gray-600">
              To help shape a suitable program, organizations can identify the
              Oracle Fusion modules, participant roles, current skill levels,
              preferred delivery format, and target timeline.
            </p>
            <div className="mt-6 space-y-4">
              {[
                ["Training scope", "Modules, topics, and expected outcomes"],
                ["Participants", "Team size, roles, and experience levels"],
                ["Delivery", "On-site or live online sessions"],
                ["Schedule", "Preferred dates and session availability"],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                >
                  <h4 className="font-semibold text-gray-800">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="mt-7 w-full rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
            >
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Choose Inspiration Academy?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              A practical, structured approach to professional Oracle Fusion
              learning for teams and organizations.
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

      {/* CTA */}
      <section id="contact" className="bg-red-700 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-semibold uppercase tracking-wider text-red-100">
            Corporate Training Enquiries
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Upskill Your Team in Oracle Fusion
          </h2>
          <p className="mt-5 text-lg leading-8 text-red-50">
            Tell us about your organization’s training goals and the Oracle
            Fusion topics your team wants to learn. We can discuss a suitable
            curriculum, delivery format, and schedule based on your needs.
          </p>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-red-700 transition hover:bg-gray-100"
          >
            Contact Us
          </button>
          <p className="mt-5 text-sm text-red-100">
            Training scope, availability, duration, and commercial terms can be
            confirmed during consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
