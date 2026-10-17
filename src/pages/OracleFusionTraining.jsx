import React from "react";

export default function OracleFusionTraining() {
  const features = [
    "Oracle Fusion Technical",
    "Oracle Integration Cloud (OIC)",
    "Visual Builder Studio (VBS/VBCS)",
    "BI Reports (BIP)",
    "OTBI Reports",
    "Fast Formula",
    "REST & SOAP APIs",
    "HDL & HSDL",
    "Security & Roles",
    "SQL & PL/SQL",
    "Real-Time Projects",
    "Interview Preparation",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Oracle Fusion Technical Training
              </h1>

              <p className="mt-6 text-lg text-gray-100 leading-8">
                Become an Oracle Fusion Technical Consultant by learning Oracle
                Integration Cloud (OIC), Visual Builder Studio, BI Publisher,
                OTBI Reports, Fast Formula, HDL, REST APIs and Real-Time Project
                Development.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
                  Enroll Now
                </button>

                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-700">
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Oracle Training"
                className="rounded-xl shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Course Modules
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>

                <p className="text-gray-600 mt-3">
                  Practical hands-on sessions with real industry examples.
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
            Why Choose Inspiration Academy?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Experienced Trainer</h3>
              <p>
                Learn from Oracle Fusion industry professionals with years of
                implementation experience.
              </p>
            </div>

            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Live Projects</h3>
              <p>Work on real Oracle Fusion implementation projects.</p>
            </div>

            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Placement Support</h3>
              <p>Resume preparation, mock interviews and job assistance.</p>
            </div>

            <div className="text-center p-6 shadow rounded-lg">
              <h3 className="font-bold text-xl mb-3">Recorded Sessions</h3>
              <p>Lifetime access to recorded classes and training materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Details */}

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-5">Training Highlights</h3>

              <ul className="space-y-3 list-disc pl-5">
                <li>100% Practical Sessions</li>
                <li>Weekend & Weekday Batches</li>
                <li>Online Live Training</li>
                <li>Project Based Learning</li>
                <li>Certification Guidance</li>
                <li>Interview Questions</li>
                <li>Resume Preparation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-5">Technologies Covered</h3>

              <ul className="space-y-3 list-disc pl-5">
                <li>Oracle Fusion HCM</li>
                <li>Oracle Fusion ERP</li>
                <li>Oracle OIC</li>
                <li>Visual Builder Studio</li>
                <li>BI Publisher</li>
                <li>OTBI</li>
                <li>REST APIs</li>
                <li>SOAP Services</li>
                <li>HDL Loader</li>
                <li>SQL & PL/SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-red-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Start Your Oracle Fusion Career Today
          </h2>

          <p className="mt-5 text-lg">
            Join our live online training and become an Oracle Fusion Technical
            Consultant with real-time implementation knowledge.
          </p>

          <button className="mt-8 bg-white text-red-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
