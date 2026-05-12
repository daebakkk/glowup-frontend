import { useState } from "react";

const QUICK_TAGS = [
  "Acne",
  "Hyperpigmentation",
  "Dark Spots",
  "Wrinkles",
  "Dryness",
  "Redness",
  "Large Pores",
  "Oily Skin",
  "Sensitive Skin",
];

const NAV_CARDS = [
  {
    id: "get-started",
    title: "Get Started",
    description: "Tell us about your skin to get personalized recommendations",
    icon: <UserCardIcon />,
    iconBg: "bg-pink-100",
    page: "skinProfile",
  },
  {
    id: "for-you",
    title: "For You",
    description: "Browse all skincare products with detailed information",
    icon: <SparkleCardIcon />,
    iconBg: "bg-blue-100",
    page: "recommendations",
  },
  {
    id: "reminders",
    title: "Routine Reminders",
    description: "Set reminders for your morning and evening skincare routine",
    icon: <CalendarIcon />,
    iconBg: "bg-pink-100",
    page: "reminders",
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Have questions? Send us an email",
    icon: <MailIcon />,
    iconBg: "bg-blue-100",
    page: null,
  },
  {
    id: "daily-routine",
    title: "Daily Routine",
    description: "View recommended daily skincare steps",
    icon: <ClockIcon />,
    iconBg: "bg-pink-100",
    page: null,
  },
  {
    id: "top-matches",
    title: "Top Matches",
    description: "Complete your profile to see top product matches",
    icon: <BadgeIcon />,
    iconBg: "bg-blue-100",
    page: null,
  },
];

const DAILY_TIPS = [
  "Always apply sunscreen as the last step of your morning routine",
  "Patch test new products before applying to your entire face",
  "Consistency is key — give products at least 4–6 weeks to show results",
];

export default function HomePage({ onNavigate }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searching for:", search);
  };

  const handleTagClick = (tag) => {
    setSearch(tag);
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #f5f0ff 50%, #e0f2fe 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <SparkleHeaderIcon />
            <h1
              className="text-4xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skincare Hub
            </h1>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Your personalized skincare companion — get recommendations, set
            reminders, and discover products tailored to your skin.
          </p>
        </div>

        {/* Search card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-pink-500 uppercase mb-4">
            Search by Skin Concern
          </p>

          <form onSubmit={handleSearch} className="flex gap-3 mb-4">
            <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-pink-200 transition">
              <SearchIcon />
              <input
                type="text"
                placeholder="e.g. acne, dark spots, dryness, redness..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 text-sm text-gray-700 placeholder-gray-300 outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-xl text-white text-sm font-semibold flex-shrink-0 transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                background: "linear-gradient(90deg, #f472b6 0%, #818cf8 100%)",
              }}
            >
              Find Products
            </button>
          </form>

          {/* Quick-select tags */}
          <div className="flex flex-wrap gap-2">
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  search === tag
                    ? "border-pink-400 bg-pink-50 text-pink-600"
                    : "border-pink-200 text-pink-500 hover:bg-pink-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Nav cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {NAV_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => card.page && onNavigate?.(card.page)}
              className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-left hover:shadow-md hover:border-pink-100 transition-all group"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${card.iconBg}`}
              >
                {card.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-1 group-hover:text-pink-500 transition-colors">
                  {card.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Daily tips card */}
        <div className="bg-pink-50 rounded-2xl border border-pink-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookIcon />
            <p className="text-sm font-bold text-gray-800">Daily Skincare Tips</p>
          </div>
          <ul className="space-y-2">
            {DAILY_TIPS.map((tip, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Icons ──────────────────────────────────────────────── */
function SparkleHeaderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#ec4899" strokeLinejoin="round" />
      <path d="M19 2L19.75 5.25L23 6L19.75 6.75L19 10L18.25 6.75L15 6L18.25 5.25L19 2Z" fill="#f9a8d4" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function UserCardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function SparkleCardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#3b82f6" strokeLinejoin="round" />
      <path d="M19 2L19.75 5.25L23 6L19.75 6.75L19 10L18.25 6.75L15 6L18.25 5.25L19 2Z" fill="#93c5fd" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}
