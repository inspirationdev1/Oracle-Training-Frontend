import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../environment";

export default function Contact({ listing }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailfrom, setEmailfrom] = useState("");
  const [formData, setFormData] = useState({});

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    if (id === "name") setName(value);
    else if (id === "phone") setPhone(value);
    else if (id === "message") setMessage(value);
    else if (id === "emailfrom") setEmailfrom(value);
  };

  const handleEmail = async () => {
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      
      const res = await fetch(`${baseUrl}/auth/sendemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.message || "Failed to send enquiry email.");
      }

      setSuccess("Enquiry email sent successfully!");

      // Clear the form after successful submission
      setName("");
      setPhone("");
      setEmailfrom("");
      setMessage("");
      setFormData({});
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full py-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 px-5 py-7 text-white sm:px-10 sm:py-9">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-100">
            Get in touch
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Start Your IT Career Today
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-red-50 sm:text-base">
            Contact Inspiration Academy for Oracle Fusion Cloud, Oracle
            Integration Cloud (OIC), VB/VBCS, and BI/OTBI Reports training. Our
            team will help you choose the right training program.
          </p>
        </div>

        {/* Form and Contact Information */}
        <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-5 lg:gap-10 lg:p-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h3 className="mb-2 text-xl font-bold text-slate-800">
              Send Us an Enquiry
            </h3>

            <p className="mb-6 text-sm text-slate-500">
              Fill in your details and we will help you get started.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEmail();
              }}
              className="space-y-5"
            >
              {/* Name and Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={onChange}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={15}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="emailfrom"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>

                <input
                  type="email"
                  name="emailfrom"
                  id="emailfrom"
                  value={emailfrom}
                  onChange={onChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={message}
                  onChange={onChange}
                  placeholder="Tell us which course you are interested in..."
                  className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-4 focus:ring-red-200 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Enquiry"}
                {!loading && <span aria-hidden="true">→</span>}
              </button>

              {/* Success Message */}
              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                  ✓ {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  ✕ {error}
                </div>
              )}

              <p className="text-xs leading-5 text-slate-500">
                Your email application will open with your enquiry details.
              </p>
            </form>
          </div>

          {/* Contact Details */}
          <aside className="rounded-xl bg-slate-50 p-5 sm:p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-800">
              Contact Information
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Have questions about our training programs? We are happy to help.
            </p>

            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Training Programs
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Oracle Fusion Cloud
                    <br />
                    Oracle Integration Cloud
                    <br />
                    BI Reports & OTBI Reports
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xl">
                  ✉️
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-slate-800">Email Us</h4>
                  <a
                    href="mailto:info@inspiration-academy.net"
                    className="mt-1 block break-all text-sm text-red-700 hover:underline"
                  >
                    info@inspiration-academy.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-xl">
                  💼
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Career Support
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Practical training, real-time projects, interview
                    preparation, and career guidance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-red-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">
                Ready to upgrade your skills?
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-600">
                Send your enquiry and take the next step in your IT career.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
