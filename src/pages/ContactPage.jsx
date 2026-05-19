import { useState } from "react";

const RESPONSE_TIMES = [
  { label: "General Inquiries", time: "Within 24 hrs" },
  { label: "Skin Advice", time: "Within 48 hrs" },
  { label: "Urgent Issues", time: "Same day" },
];

const COMMON_QUESTIONS = [
  "How do I find products for my skin type?",
  "Can I use multiple products together?",
  "Are your recommendations dermatologist-approved?",
];

export default function ContactPage({ onHome }) {
  const [form, setForm] = useState({
    name: "", email: "", category: "General Inquiry", subject: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend
    console.log("contact form:", form);
    setSent(true);
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f5f0ff 50%, #e0f2fe 100%)" }}
    >
      {/* Nav */}
      <nav className="flex items-center gap-2 px-8 py-5">
        <button
          onClick={onHome}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
        >
          <HomeIcon />
          Home
        </button>
        <span className="text-gray-400 text-sm">Home</span>
        <span className="text-gray-400 text-sm">/</span>
        <span className="text-pink-500 text-sm font-medium">Contact</span>
      </nav>

      <div className="max-w-5xl mx-auto px-8 pb-16">
        {/* Header */}
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f472b6, #818cf8)" }}>
            <ChatIcon />
          </div>
          <h1
            className="text-4xl font-bold mb-3"
            style={{
              background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
            Have a question about your skin or our products? We'd love to hear from you.
            Our skincare experts are here to help.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <InfoCard
            icon={<MailIcon />}
            iconBg="bg-pink-500"
            label="EMAIL US"
            main="support@glowup.com"
            sub="We reply within 24 hours"
          />
          <InfoCard
            icon={<PhoneIcon />}
            iconBg="bg-blue-500"
            label="CALL US"
            main="+1 (800) 456-GLOW"
            sub="Mon-Fri, 9am – 6pm EST"
          />
          <InfoCard
            icon={<PinIcon />}
            iconBg="bg-purple-500"
            label="VISIT US"
            main="123 Glow Ave, NY 10001"
            sub="By appointment only"
          />
        </div>

        {/* Bottom two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Send a Message form — takes 2/3 */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-base font-bold text-gray-800 mb-5">Send a Message</h2>

            {sent ? (
              <div className="text-center py-10">
                <p className="text-2xl mb-2">✅</p>
                <p className="text-sm font-semibold text-gray-700">Message sent!</p>
                <p className="text-xs text-gray-400 mt-1">We'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs text-pink-500 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Full Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Email Address <span className="text-pink-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Category
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200 transition bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Skin Advice</option>
                      <option>Product Question</option>
                      <option>Urgent Issue</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Message <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Describe your skin concern or question in detail..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2 active:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #db2777 0%, #6366f1 100%)",
                    transition: "filter 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
                >
                  <SendIcon />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right sidebar — 1/3 */}
          <div className="space-y-4">
            {/* Response Times */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <div className="flex items-center gap-2 mb-4">
                <ClockIcon />
                <p className="text-base font-bold text-gray-800">Response Times</p>
              </div>
              <div className="space-y-3">
                {RESPONSE_TIMES.map((r) => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{r.label}</span>
                    <span className="text-sm font-semibold text-pink-500">{r.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Questions */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <p className="text-base font-bold text-gray-800 mb-3">Common Questions</p>
              <ul className="space-y-2.5">
                {COMMON_QUESTIONS.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-pink-400 font-bold flex-shrink-0">›</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <p className="text-base font-bold text-gray-800 mb-3">Follow Us</p>
              <div className="flex gap-3 mb-2">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center hover:bg-pink-100 transition">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition">
                  <TwitterIcon />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition">
                  <FacebookIcon />
                </a>
              </div>
              <p className="text-sm text-gray-400">DM us for quick skincare tips and product updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, iconBg, label, main, sub }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex items-center gap-4">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-400 tracking-wider mb-0.5">{label}</p>
        <p className="text-base font-bold text-gray-800">{main}</p>
        <p className="text-sm text-gray-400">{sub}</p>
      </div>
    </div>
  );
}

/* ─── Icons ──────────────────────────────────────────────── */
function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="#ec4899" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
