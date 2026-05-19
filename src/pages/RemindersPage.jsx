import { useState } from "react";

const MORNING_STEPS = ["Cleanser", "Toner", "Vitamin C Serum", "Moisturizer", "Sunscreen"];
const EVENING_STEPS = ["Cleanser", "Toner", "Treatment/Serum", "Eye Cream", "Night Moisturizer"];

export default function RemindersPage({ onHome }) {
  const [morning, setMorning] = useState({ active: false, time: "08:00" });
  const [evening, setEvening] = useState({ active: false, time: "22:00" });

  const toggleRoutine = async (setter) => {
    if (!("Notification" in window)) {
      // fallback: just toggle without notifications
      setter((prev) => ({ ...prev, active: !prev.active }));
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      setter((prev) => ({ ...prev, active: !prev.active }));
    } else {
      // still toggle visually even if denied — user can see the state
      setter((prev) => ({ ...prev, active: !prev.active }));
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f5f0ff 50%, #e0f2fe 100%)" }}
    >
      <nav className="flex items-center gap-2 px-6 py-4">
        <button
          onClick={onHome}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
        >
          <HomeIcon />
          Home
        </button>
        <span className="text-gray-400 text-sm">Home</span>
        <span className="text-gray-400 text-sm">/</span>
        <span className="text-pink-500 text-sm font-medium">Reminders</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pb-16 space-y-4">
        <div className="pt-2 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <CalendarIcon />
            <h1
              className="text-3xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Routine Reminders
            </h1>
          </div>
          <p className="text-gray-500 text-sm">
            Set up daily reminders to maintain a consistent skincare routine
          </p>
        </div>

        {/* Browser notifications info banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 flex gap-3">
          <InfoIcon />
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-0.5">Browser Notifications</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Enable browser notifications to receive reminders at your scheduled times.
              Click "Enable" on the notification permission prompt when it appears.
            </p>
          </div>
        </div>

        {/* Morning Routine */}
        <RoutineCard
          label="Morning Routine"
          icon={<SunIcon />}
          routine={morning}
          steps={MORNING_STEPS}
          onToggle={() => toggleRoutine(setMorning)}
          onTimeChange={(t) => setMorning((p) => ({ ...p, time: t }))}
        />

        {/* Evening Routine */}
        <RoutineCard
          label="Evening Routine"
          icon={<MoonIcon />}
          routine={evening}
          steps={EVENING_STEPS}
          onToggle={() => toggleRoutine(setEvening)}
          onTimeChange={(t) => setEvening((p) => ({ ...p, time: t }))}
        />
      </div>
    </div>
  );
}

function RoutineCard({ label, icon, routine, steps, onToggle, onTimeChange }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <p className="text-base font-bold text-gray-800">{label}</p>
            <p className="text-xs text-gray-400">{routine.active ? "Active" : "Inactive"}</p>
          </div>
        </div>
        {/* Toggle switch */}
        <button
          onClick={onToggle}
          role="switch"
          aria-checked={routine.active}
          aria-label={`Toggle ${label}`}
          className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
            routine.active ? "bg-pink-500" : "bg-gray-200"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
              routine.active ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <ClockIcon />
        <span className="text-sm font-semibold text-gray-700">Reminder Time:</span>
        <input
          type="time"
          value={routine.time}
          onChange={(e) => onTimeChange(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
      </div>

      <div className="flex items-start gap-3">
        <BellIcon />
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Routine Steps:</p>
          <div className="flex flex-wrap gap-2">
            {steps.map((step, i) => (
              <span
                key={step}
                className="border border-gray-200 rounded-lg px-3 py-1 text-xs text-gray-600"
              >
                {i + 1}. {step}
              </span>
            ))}
          </div>
        </div>
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
function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}
