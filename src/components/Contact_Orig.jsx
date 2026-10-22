import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact_Orig({ listing }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const [emailfrom, setEmailfrom] = useState("");
  const onChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "message") {
      setMessage(e.target.value);
    } else if (e.target.id === "emailfrom") {
      setEmailfrom(e.target.value);
    }
  };

  // useEffect(() => {
  //   const fetchLandlord = async () => {
  //     try {
  //       const res = await fetch(`/api/user/${listing.userRef}`);
  //       const data = await res.json();
  //       setLandlord(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchLandlord();
  // }, [listing.userRef]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          Contact <span className="font-semibold">Inspiration Academy</span> for
          <span className="font-semibold"> Oracle Tech Training</span>
        </p>

        {/* Phone Text Box */}
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={onChange}
          placeholder="Enter your Phone #"
          required
          className="w-full border p-3 rounded-lg"
        />

        {/* Name Text Box */}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
          required
          className="w-full border p-3 rounded-lg"
        />

        {/* Email Text Box */}
        <input
          type="email"
          name="emailfrom"
          id="emailfrom"
          value={emailfrom}
          onChange={onChange}
          placeholder="Enter your email"
          required
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="message"
          id="message"
          rows="2"
          value={message}
          onChange={onChange}
          placeholder="Enter your message here..."
          className="w-full border p-3 rounded-lg"
        />
        <Link
          to={`mailto:${emailfrom}?subject=Regarding ${name}&body=${message}`}
          className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
        >
          Send Message
        </Link>
      </div>
    </>
  );
}
