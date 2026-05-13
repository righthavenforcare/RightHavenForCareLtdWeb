"use client";

import { FormEvent, useState } from "react";

const enquiryOptions = [
  "Appointment Booking",
  "General Enquiry",
  "Care Assessment",
  "Staffing Enquiry",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState(enquiryOptions[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `${enquiryType} - Contact Form`;
    const bodyLines = [
      `Name: ${name}`,
      `Contact Number: ${phone}`,
      `Email: ${email}`,
      `Enquiry Type: ${enquiryType}`,
      "",
      "Message:",
      message || "No message provided.",
    ];

    const mailtoHref = `mailto:info@righthavenforcare.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoHref;
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
      />
      <input
        type="tel"
        placeholder="Your contact number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
      />
      <select
        value={enquiryType}
        onChange={(event) => setEnquiryType(event.target.value)}
        required
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition focus:border-(--brand)"
      >
        {enquiryOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <textarea
        placeholder="Your message"
        rows={7}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-(--brand) px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(12,119,111,0.62)] transition hover:bg-(--brand-dark)"
      >
        Send Now
      </button>
    </form>
  );
}
