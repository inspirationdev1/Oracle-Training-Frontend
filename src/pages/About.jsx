import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center text-red-700 mb-6">
            About Inspiration Training Academy
          </h1>

          <p className="text-gray-700 text-lg leading-8 text-justify">
            <strong>Inspiration Training Academy</strong> is committed to
            preparing students and working professionals for successful careers
            in the software industry through practical, industry-focused
            technical training. Our programs are designed to bridge the gap
            between academic knowledge and real-world application by combining
            expert instruction with hands-on learning.
          </p>

          <p className="text-gray-700 text-lg leading-8 text-justify mt-6">
            We specialize in professional training in
            <strong>
              {" "}
              Oracle Fusion Technical, React.js, Angular, and .NET{" "}
            </strong>
            technologies. Our curriculum includes live coding sessions,
            real-time projects, assignments, interview preparation, resume
            building, and guidance from experienced industry professionals.
            Every course emphasizes practical implementation, enabling learners
            to build confidence and develop job-ready skills.
          </p>

          <p className="text-gray-700 text-lg leading-8 text-justify mt-6">
            Whether you are a student, a recent graduate, or an experienced
            professional looking to upgrade your skills, Inspiration Training
            Academy provides a supportive learning environment with flexible
            online and classroom training options. Our goal is to empower every
            learner with the technical expertise needed to excel in today's
            competitive IT industry and build a successful professional career.
          </p>
        </div>
      </div>
    </section>
  );
}
