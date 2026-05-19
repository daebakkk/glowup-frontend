const MORNING_STEPS = [
  { name: "Cleanser", desc: "Gentle cleanser to remove overnight oils", time: "1 minute" },
  { name: "Toner", desc: "Balance your skin's pH", time: "30 seconds" },
  { name: "Vitamin C Serum", desc: "Brightens and protects against free radicals", time: "1 minute" },
  { name: "Eye Cream", desc: "Hydrate and protect delicate eye area", time: "30 seconds" },
  { name: "Moisturizer", desc: "Lock in hydration", time: "1 minute" },
  { name: "Sunscreen SPF 30+", desc: "Essential protection from UV damage", time: "1 minute" },
];

const EVENING_STEPS = [
  { name: "Oil Cleanser", desc: "Remove makeup and sunscreen", time: "1 minute" },
  { name: "Water-Based Cleanser", desc: "Deep clean pores", time: "1 minute" },
  { name: "Toner", desc: "Prep skin for treatments", time: "30 seconds" },
  { name: "Treatment Serum", desc: "Address specific skin concerns", time: "1 minute" },
  { name: "Eye Cream", desc: "Repair and hydrate overnight", time: "30 seconds" },
  { name: "Night Moisturizer", desc: "Rich hydration for repair", time: "1 minute" },
];

const PRO_TIPS = [
  "Wait 1-2 minutes between steps to allow products to absorb properly",
  "Always apply products from thinnest to thickest consistency",
  "Use gentle upward motions when applying products",
  "Don't forget your neck and decolletage!",
];

export default function DailyRoutinePage({ onHome }) {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f5f0ff 50%, #e0f2fe 100%)" }}
    >
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
        <span className="text-pink-500 text-sm font-medium">Daily Routine</span>
      </nav>

      <div className="max-w-3xl mx-auto px-8 pb-16 space-y-5">
        <div className="text-center pt-2 pb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ClockHeaderIcon />
            <h1
              className="text-4xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Daily Routine
            </h1>
          </div>
          <p className="text-gray-500 text-base">Personalized routine for your skin</p>
        </div>

        <RoutineSection
          label="Morning Routine"
          subtitle="Start your day with protection and hydration"
          icon={<SunIcon />}
          steps={MORNING_STEPS}
          badgeClass="bg-pink-500"
          timeClass="text-gray-500 border-gray-200"
        />

        <RoutineSection
          label="Evening Routine"
          subtitle="Repair and restore your skin overnight"
          icon={<MoonIcon />}
          steps={EVENING_STEPS}
          badgeClass="bg-blue-500"
          timeClass="text-pink-500 border-pink-200"
        />

        <div className="bg-pink-50 rounded-2xl border border-pink-100 p-8">
          <p className="text-base font-bold text-gray-800 mb-3">Pro Tips</p>
          <ul className="space-y-2">
            {PRO_TIPS.map((tip, i) => (
              <li key={i} className="text-base text-gray-600 flex items-start gap-2">
                <span className="text-pink-400 flex-shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RoutineSection({ label, subtitle, icon, steps, badgeClass, timeClass }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <div className="flex items-center gap-3 mb-5">
        {icon}
        <div>
          <p className="text-base font-bold text-gray-800">{label}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div
            key={step.name}
            className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3"
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${badgeClass}`}
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-gray-800">{step.name}</p>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
            <span
              className={`flex-shrink-0 border rounded-full px-3 py-1 text-xs font-medium ${timeClass}`}
            >
              {step.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function ClockHeaderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-yellow-50 rounded-xl p-1.5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-blue-50 rounded-xl p-1.5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
