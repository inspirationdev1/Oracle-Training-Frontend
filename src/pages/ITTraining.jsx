import React from "react";

function ITTraining() {
  const features = [
    "Experienced Industry Trainers",
    "Practical Hands-on Sessions",
    "Real-Time Project Experience",
    "Interview Preparation",
    "Resume Building Assistance",
    "Mock Interviews",
    "Flexible Online & Offline Training",
    "Career Guidance",
    "Placement Support",
    "Small Batch Size",
    "Updated Course Curriculum",
  ];
  const teaching = [
    "Instructor-led Live Sessions",
    "Practical Coding Exercises",
    "Real-world Case Studies",
    "Assignments After Every Module",
    "Mini Projects",
    "Capstone Project",
    "Interview Questions & Answers",
    "Resume Preparation",
    "Live Doubt-Clearing Sessions",
  ];
  const who = [
    "Students",
    "Fresh Graduates",
    "Software Developers",
    "Working Professionals",
    "Career Switchers",
    "IT Consultants",
    "Anyone interested in Oracle Fusion or Frontend Development",
  ];
  const values = [
    "Excellence in Training",
    "Practical Learning",
    "Student Success",
    "Continuous Innovation",
    "Professional Integrity",
    "Lifelong Learning",
    "Industry Relevance",
  ];
  const oracle = [
    "Oracle Fusion HCM",
    "Oracle ERP Cloud",
    "Oracle SCM Cloud",
    "Oracle Financials",
    "Oracle Integration Cloud (OIC)",
    "Oracle Visual Builder Cloud Service (VBCS)",
    "Oracle SQL",
    "Integration Development",
    "REST & SOAP Web Services",
  ];
  const react = [
    "JavaScript ES6+",
    "JSX",
    "Components",
    "Props & State",
    "React Hooks",
    "Routing",
    "Forms & Validation",
    "API Integration",
    "Redux",
    "Context API",
    "Authentication",
    "Real-Time Projects",
  ];
  const angular = [
    "TypeScript",
    "Components",
    "Directives",
    "Services",
    "Dependency Injection",
    "Routing",
    "Reactive Forms",
    "RxJS",
    "HTTP Client",
    "Authentication",
    "State Management",
    "Enterprise Projects",
  ];
  const Card = ({ title, color, items }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition">
      <h3 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {items.map((i) => (
          <li key={i}>✔ {i}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <section className="text-center">
          {/* <span className="text-pink-600 font-semibold uppercase">
            I.T Training
          </span> */}
          <h1 className="text-5xl font-bold mt-4">
            Welcome to{" "}
            <span className="text-blue-700">Inspiration I.T. Training</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-6 text-gray-600 leading-8">
            Inspiration I.T. Training is a professional IT training institute
            dedicated to helping students, graduates, job seekers and working
            professionals build successful careers. We specialize in Oracle
            Fusion Cloud Technologies, ReactJS and Angular with practical,
            industry-focused training.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
              Explore Courses
            </button>
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become one of the most trusted IT training institutes by
              empowering learners with practical technical skills, confidence
              and career opportunities.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Our Mission
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Deliver high-quality training</li>
              <li>✔ Real-time projects</li>
              <li>✔ Interview preparation</li>
              <li>✔ Job-ready skills</li>
              <li>✔ Modern technologies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-10">
            Our Training Programs
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card
              title="Oracle Fusion Cloud"
              color="text-blue-700"
              items={oracle}
            />
            <Card
              title="ReactJS Development"
              color="text-sky-600"
              items={react}
            />
            <Card
              title="Angular Development"
              color="text-red-600"
              items={angular}
            />
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f} className="bg-white rounded-xl p-5 shadow">
                ✅ {f}
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Approach</h2>
            <ul className="space-y-2">
              {teaching.map((t) => (
                <li key={t}>📘 {t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-4">Who Can Join?</h2>
            <ul className="space-y-2">
              {who.map((w) => (
                <li key={w}>🎓 {w}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-8">
            We are committed to helping every learner achieve career success
            through quality education, practical knowledge and continuous
            mentorship.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div
                key={v}
                className="bg-blue-700 text-white rounded-xl p-5 text-center"
              >
                {v}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-pink-600 text-white text-center py-16 px-8">
          <h2 className="text-5xl font-bold">Your Career Starts Here</h2>
          <p className="mt-4 text-xl">Learn. Practice. Build. Grow.</p>
          <p className="max-w-3xl mx-auto mt-6">
            Whether your goal is to become an Oracle Fusion Consultant, React
            Developer or Angular Developer, we provide the knowledge, mentorship
            and practical experience to help you succeed.
          </p>
          <button className="mt-8 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg">
            Enroll Today
          </button>
        </section>
      </div>
    </div>
  );
}
export default ITTraining;
