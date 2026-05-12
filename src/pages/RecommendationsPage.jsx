import { useState } from "react";

// ---------------------------------------------------------------------------
// Mock product data — swap with real API data later
// Each product has: id, name, category, description, why, image (Unsplash URL)
// ---------------------------------------------------------------------------
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Gentle Hydrating Cleanser",
    category: "Cleanser",
    description: "Sulfate-free cleanser that removes impurities without stripping moisture",
    why: "Perfect for your {skinType} skin and helps with {concerns}",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
  },
  {
    id: 2,
    name: "Hydrating Rose Toner",
    category: "Toner",
    description: "Alcohol-free toner that balances and preps skin for the next steps",
    why: "Perfect for your {skinType} skin and helps with dryness and dehydration",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
  },
  {
    id: 3,
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    description: "Stabilised vitamin C that fades dark spots and boosts radiance",
    why: "Perfect for your {skinType} skin and helps with dark spots and dull skin",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
  },
  {
    id: 4,
    name: "Retinol Anti-Aging Serum",
    category: "Serum",
    description: "Time-released retinol that reduces wrinkles and improves texture",
    why: "Perfect for your {skinType} skin and helps with fine lines and wrinkles",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
  },
  {
    id: 5,
    name: "Hyaluronic Acid Hydrating Serum",
    category: "Serum",
    description: "Intensive hydration serum that plumps and smooths",
    why: "Perfect for your {skinType} skin and helps with dryness and fine lines and wrinkles",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
  },
  {
    id: 6,
    name: "Anti-Aging Eye Cream",
    category: "Eye Cream",
    description: "Rich cream that targets fine lines and dark circles",
    why: "Perfect for your {skinType} skin and helps with fine lines and wrinkles",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
  },
  {
    id: 7,
    name: "Barrier Repair Moisturiser",
    category: "Moisturiser",
    description: "Ceramide-rich cream that restores and strengthens the skin barrier",
    why: "Perfect for your {skinType} skin and helps with dryness and redness",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
  },
  {
    id: 8,
    name: "Mineral SPF 50 Sunscreen",
    category: "SPF",
    description: "Lightweight mineral sunscreen that protects without white cast",
    why: "Essential daily protection for your {skinType} skin",
    image: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=600&q=80",
  },
];

// ---------------------------------------------------------------------------
export default function RecommendationsPage({ profile = {}, onEditProfile, onHome }) {
  const { skinType = "dry", concerns = [] } = profile;

  // Build the "why" string for each card
  const buildWhy = (template) =>
    template
      .replace("{skinType}", skinType)
      .replace("{concerns}", concerns.slice(0, 2).join(" and ") || "your concerns");

  const concernCount = concerns.length || 5;

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
        <button
          onClick={onHome}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
        >
          <HomeIcon />
          Home
        </button>
        <span className="text-gray-400 text-sm">Home</span>
        <span className="text-gray-400 text-sm">/</span>
        <span className="text-pink-500 text-sm font-medium">Recommendations</span>
      </nav>

      {/* Page header */}
      <div className="px-6 pt-2 pb-6 max-w-5xl mx-auto flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <SparkleIcon />
            <h1
              className="text-3xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Personalized Routine
            </h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            {ALL_PRODUCTS.length} products recommended for{" "}
            <span className="capitalize">{skinType}</span> skin targeting{" "}
            {concernCount} concern{concernCount !== 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={onEditProfile}
          className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition mt-1 flex-shrink-0"
        >
          <RefreshIcon />
          Edit Profile
        </button>
      </div>

      {/* Product grid */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              why={buildWhy(product.why)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Product Card ───────────────────────────────────────── */
function ProductCard({ product, why }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="w-full h-56 bg-gray-100 overflow-hidden flex-shrink-0">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-pink-50">
            <span className="text-4xl">🧴</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + category badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-gray-800 leading-snug">
            {product.name}
          </h3>
          <span className="flex-shrink-0 bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Why callout */}
        <div className="mt-auto bg-blue-50 rounded-xl px-4 py-3 flex items-start gap-2">
          <SparkleSmallIcon />
          <p className="text-xs text-blue-600 leading-relaxed capitalize">{why}</p>
        </div>
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

function RefreshIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 109-9 9 9 0 00-6.7 3" />
      <path d="M3 3v6h6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#ec4899" stroke="#ec4899" strokeWidth="0.5" strokeLinejoin="round" />
      <path d="M19 2L19.75 5.25L23 6L19.75 6.75L19 10L18.25 6.75L15 6L18.25 5.25L19 2Z" fill="#f9a8d4" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#3b82f6" strokeLinejoin="round" />
    </svg>
  );
}
