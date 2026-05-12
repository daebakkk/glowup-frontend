import { useState } from "react";

const SKIN_TYPES = [
  {
    id: "dry",
    label: "Dry",
    description: "Feels tight, flaky, or rough",
    icon: <DropsIcon />,
  },
  {
    id: "oily",
    label: "Oily",
    description: "Shiny, greasy, prone to breakouts",
    icon: <OilyIcon />,
  },
  {
    id: "combination",
    label: "Combination",
    description: "Oily T-zone, dry cheeks",
    icon: <CombinationIcon />,
  },
  {
    id: "normal",
    label: "Normal",
    description: "Balanced, not too oily or dry",
    icon: <HeartIcon />,
  },
  {
    id: "sensitive",
    label: "Sensitive",
    description: "Easily irritated or reactive",
    icon: <SensitiveIcon />,
  },
];

const SKIN_CONCERNS = [
  { id: "acne", label: "Acne & Breakouts" },
  { id: "dark-spots", label: "Dark Spots & Hyperpigmentation" },
  { id: "wrinkles", label: "Wrinkles & Fine Lines" },
  { id: "dryness", label: "Dryness & Dehydration" },
  { id: "dull", label: "Dull Skin" },
  { id: "pores", label: "Large Pores" },
  { id: "redness", label: "Redness & Irritation" },
  { id: "texture", label: "Uneven Texture" },
];

export default function SkinProfilePage({ onViewRecommendations }) {
  const [mode, setMode] = useState("edit"); // "edit" | "view"
  const [skinType, setSkinType] = useState(null);
  const [concerns, setConcerns] = useState([]);

  const handleSkinTypeSelect = (typeId) => {
    setSkinType(typeId);
  };

  const toggleConcern = (concernId) => {
    setConcerns((prev) =>
      prev.includes(concernId)
        ? prev.filter((c) => c !== concernId)
        : [...prev, concernId]
    );
  };

  const handleSaveProfile = () => {
    if (!skinType) return;
    // TODO: save to backend
    console.log("saved profile:", { skinType, concerns });
    setMode("view");
  };

  const handleEditProfile = () => {
    setMode("edit");
  };

  const handleViewRecommendations = () => {
    // TODO: navigate to recommendations page
    onViewRecommendations?.({ skinType, concerns });
    console.log("view recommendations");
  };

  const selectedSkinType = SKIN_TYPES.find((t) => t.id === skinType);
  const selectedConcernLabels = SKIN_CONCERNS.filter((c) =>
    concerns.includes(c.id)
  ).map((c) => c.label);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #f5f0ff 50%, #e0f2fe 100%)",
      }}
    >
      {/* Top nav */}
      <nav className="flex items-center gap-2 px-6 py-4">
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
          <HomeIcon />
          Home
        </button>
        <span className="text-gray-400 text-sm">Home</span>
        <span className="text-gray-400 text-sm">/</span>
        <span className="text-pink-500 text-sm font-medium">Profile</span>
      </nav>

      {/* Page header */}
      <div className="px-6 pt-4 pb-4 max-w-2xl mx-auto flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <UserIcon />
            <h1
              className="text-3xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Skin Profile
            </h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            {mode === "edit"
              ? "Tell us about your skin to get started"
              : "Manage your skin information to get better recommendations"}
          </p>
        </div>

        {/* Edit Profile button — only in view mode */}
        {mode === "view" && (
          <button
            onClick={handleEditProfile}
            className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition mt-1"
          >
            <PencilIcon />
            Edit Profile
          </button>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-16 space-y-4">
        {/* ── EDIT MODE ─────────────────────────────────────── */}
        {mode === "edit" && (
          <>
            {/* Skin type card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                What's your skin type?
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                Select the option that best describes your skin
              </p>

              <div className="space-y-3">
                {SKIN_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSkinTypeSelect(type.id)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-150 ${
                      skinType === type.id
                        ? "border-pink-400 bg-pink-50 shadow-sm"
                        : "border-gray-200 bg-white hover:border-pink-200 hover:bg-pink-50/40"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 ${
                        skinType === type.id ? "text-pink-500" : "text-gray-400"
                      }`}
                    >
                      {type.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-gray-800">
                        {type.label}
                      </span>
                      <span className="block text-xs text-gray-400 mt-0.5">
                        {type.description}
                      </span>
                    </span>
                    <span className="ml-auto">
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          skinType === type.id
                            ? "border-pink-500 bg-pink-500"
                            : "border-gray-300"
                        }`}
                      >
                        {skinType === type.id && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M2 5l2.5 2.5L8 3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Skin concerns card — only visible after a skin type is selected */}
            {skinType && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  What are your skin concerns?
                </h2>
                <p className="text-sm text-gray-400 mb-5">Select all that apply</p>

                <div className="grid grid-cols-2 gap-3">
                  {SKIN_CONCERNS.map((concern) => {
                    const checked = concerns.includes(concern.id);
                    return (
                      <button
                        key={concern.id}
                        type="button"
                        onClick={() => toggleConcern(concern.id)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left transition-all duration-150 ${
                          checked
                            ? "border-pink-400 bg-pink-50"
                            : "border-gray-200 bg-white hover:border-pink-200 hover:bg-pink-50/30"
                        }`}
                      >
                        {/* Custom checkbox */}
                        <span
                          className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all ${
                            checked
                              ? "border-pink-500 bg-pink-500"
                              : "border-gray-300"
                          }`}
                        >
                          {checked && (
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path
                                d="M1.5 4l2 2L6.5 2"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {concern.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Save Profile button — fixed bottom right */}
            {skinType && (
              <div className="fixed bottom-6 right-6 z-20">
                <button
                  onClick={handleSaveProfile}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold text-sm shadow-lg transition-opacity hover:opacity-90 active:opacity-80"
                  style={{
                    background: "linear-gradient(90deg, #f472b6 0%, #818cf8 100%)",
                  }}
                >
                  <SaveIcon />
                  Save Profile
                </button>
              </div>
            )}
          </>
        )}

        {/* ── VIEW MODE ─────────────────────────────────────── */}
        {mode === "view" && (
          <>
            {/* Skin Type card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p className="text-sm font-bold text-gray-800 mb-0.5">Skin Type</p>
              <p className="text-xs text-gray-400 mb-4">Your current skin type</p>
              <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-xl">
                {selectedSkinType?.label}
              </span>
            </div>

            {/* Skin Concerns card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p className="text-sm font-bold text-gray-800 mb-0.5">Skin Concerns</p>
              <p className="text-xs text-gray-400 mb-4">Issues you want to address</p>
              {selectedConcernLabels.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedConcernLabels.map((label) => (
                    <span
                      key={label}
                      className="border border-pink-400 text-pink-500 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">No concerns selected.</p>
              )}
            </div>

            {/* Ready for Recommendations card */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <p className="text-sm font-bold text-gray-800 mb-1">
                Ready for Recommendations?
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Based on your profile, we can suggest products tailored to your needs
              </p>
              <button
                onClick={handleViewRecommendations}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                View My Recommendations
              </button>
            </div>
          </>
        )}
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

function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
      <path d="M7 3v5h8" />
      <rect x="9" y="12" width="6" height="9" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#userGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="userGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function DropsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z" />
      <path d="M9 17c.5 1.5 2 2.5 3 2.5" />
    </svg>
  );
}

function OilyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 6 9 6 14a6 6 0 0012 0C18 9 12 2 12 2z" />
      <path d="M8 13c0 2.2 1.8 4 4 4" />
      <circle cx="16" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CombinationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M9 7c-.5 1-.5 2 0 3" />
      <path d="M15 14c.5 1 .5 2 0 3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function SensitiveIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4" />
      <circle cx="12" cy="16" r="0.8" fill="currentColor" stroke="none" />
      <path d="M9 10c.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5" />
    </svg>
  );
}
