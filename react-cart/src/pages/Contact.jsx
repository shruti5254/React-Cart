import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="custom-container mx-auto w-full py-10 min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-10 flex items-center gap-2">
        <Link to="/" className="hover:text-[var(--color-accentbkp)] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[var(--text)] font-medium">Contact</span>
      </nav>

      {sent && (
        <div className="mb-6 px-4 py-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
          Message sent! We'll get back to you within 24 hours.
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* ── Left: contact info cards ── */}
        <div className="w-full md:w-72 flex flex-col border border-gray-200 rounded-md shadow-sm overflow-hidden">
          {/* Call card */}
          <div className="flex flex-col gap-4 px-8 py-8 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accentbkp)] flex items-center justify-center">
              <MdOutlinePhone className="text-white" size="1.25em" />
            </div>
            <h6 className="font-semibold text-base !text-base">Call To Us</h6>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm font-medium">Phone: +8801611112222</p>
          </div>

          {/* Write card */}
          <div className="flex flex-col gap-4 px-8 py-8">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accentbkp)] flex items-center justify-center">
              <MdOutlineMailOutline className="text-white" size="1.25em" />
            </div>
            <h6 className="font-semibold text-base !text-base">Write To US</h6>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm font-medium">Emails: customer@exclusive.com</p>
            <p className="text-sm font-medium">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* ── Right: contact form ── */}
        <div className="flex-1 border border-gray-200 rounded-md shadow-sm px-8 py-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
            {/* Name / Email / Phone row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                name="name" value={form.name} onChange={handleChange} required
                placeholder="Your Name *"
                className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
              <input
                name="email" type="email" value={form.email} onChange={handleChange} required
                placeholder="Your Email *"
                className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
              <input
                name="phone" value={form.phone} onChange={handleChange} required
                placeholder="Your Phone *"
                className="bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition"
              />
            </div>

            {/* Message */}
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Your Message"
              rows={8}
              className="w-full bg-[var(--backgroundbkp)] rounded px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[var(--color-accentbkp)] transition resize-none flex-1"
            />

            {/* Submit */}
            <div className="flex justify-end">
              <button type="submit"
                className="px-10 py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer text-sm font-medium">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
