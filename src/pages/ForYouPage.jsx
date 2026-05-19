const PRODUCTS = [
  {
    id: 1,
    name: "Gentle Hydrating Cleanser",
    category: "Cleanser",
    description: "Non-foaming cleanser that removes impurities without stripping moisture",
    fixes: ["Dryness", "Redness & Irritation"],
    ingredients: [
      "Glycerin - Attracts moisture to skin",
      "Ceramides - Strengthens skin barrier",
      "Hyaluronic Acid - Provides deep hydration",
    ],
    howToUse:
      "Apply to damp face morning and evening. Massage gently in circular motions for 30-60 seconds, then rinse with lukewarm water. Pat dry and follow with toner.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  },
  {
    id: 2,
    name: "Salicylic Acid Cleanser",
    category: "Cleanser",
    description: "Deep cleansing formula that unclogs pores and fights acne",
    fixes: ["Acne & Breakouts", "Large Pores"],
    ingredients: [
      "Salicylic Acid 2% - Unclogs pores and fights acne",
      "Tea Tree Oil - Natural antibacterial agent",
      "Niacinamide - Reduces inflammation",
    ],
    howToUse:
      "Use once or twice daily on wet skin. Massage gently, avoiding eye area. Leave on for 1-2 minutes to allow salicylic acid to penetrate, then rinse thoroughly. Start with once daily and increase as tolerated.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  },
  {
    id: 3,
    name: "Hydrating Rose Toner",
    category: "Toner",
    description: "Alcohol-free toner that balances and preps skin for the next steps",
    fixes: ["Dryness", "Dull Skin"],
    ingredients: [
      "Rose Water - Soothes and hydrates",
      "Hyaluronic Acid - Boosts moisture",
      "Niacinamide - Evens skin tone",
    ],
    howToUse:
      "After cleansing, apply to a cotton pad or pour into palms and press gently into skin. Use morning and evening before serums.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  },
  {
    id: 4,
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    description: "Stabilised vitamin C that fades dark spots and boosts radiance",
    fixes: ["Dark Spots", "Dull Skin"],
    ingredients: [
      "Vitamin C 15% - Brightens and evens tone",
      "Ferulic Acid - Stabilises vitamin C",
      "Vitamin E - Antioxidant protection",
    ],
    howToUse:
      "Apply 3-4 drops to clean skin every morning before moisturiser and SPF. Allow to absorb for 1-2 minutes. Store away from direct sunlight.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
  },
  {
    id: 5,
    name: "Hyaluronic Acid Hydrating Serum",
    category: "Serum",
    description: "Intensive hydration serum that plumps and smooths",
    fixes: ["Dryness", "Fine Lines & Wrinkles"],
    ingredients: [
      "Hyaluronic Acid - Multi-weight for deep hydration",
      "Panthenol - Soothes and repairs",
      "Aloe Vera - Calms and hydrates",
    ],
    howToUse:
      "Apply to slightly damp skin morning and evening. Press gently into face and neck. Follow immediately with moisturiser to seal in hydration.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
  },
  {
    id: 6,
    name: "Barrier Repair Moisturiser",
    category: "Moisturiser",
    description: "Ceramide-rich cream that restores and strengthens the skin barrier",
    fixes: ["Dryness", "Redness & Irritation"],
    ingredients: [
      "Ceramides - Restore skin barrier",
      "Shea Butter - Deep nourishment",
      "Squalane - Lightweight moisture lock",
    ],
    howToUse:
      "Apply a pea-sized amount to face and neck morning and evening as the last step of your routine (before SPF in the morning).",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
  },
];

export default function ForYouPage({ onHome }) {
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
        <span className="text-pink-500 text-sm font-medium">For You</span>
      </nav>

      <div className="max-w-6xl mx-auto px-8 pb-16">
        {/* Header */}
        <div className="text-center pt-2 pb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SparkleIcon />
            <h1
              className="text-4xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              For You
            </h1>
          </div>
          <p className="text-gray-500 text-base">Curated skincare products with detailed information</p>
        </div>

        {/* Product list */}
        <div className="space-y-6">
          {PRODUCTS.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductRow({ product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row">
      {/* Image — left half */}
      <div className="w-full sm:w-2/5 flex-shrink-0 bg-gray-100 min-h-[320px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          style={{ minHeight: "320px" }}
          onError={(e) => {
            e.target.parentElement.style.background = "#fce7f3";
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Details — right half */}
      <div className="flex-1 p-8 space-y-4">
        {/* Name + category badge */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold text-gray-800 leading-snug">{product.name}</h2>
          <span className="flex-shrink-0 bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed -mt-2">{product.description}</p>

        {/* Fixes These Issues */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircleIcon />
            <span className="text-sm font-bold text-gray-800">Fixes These Issues</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.fixes.map((f) => (
              <span
                key={f}
                className="border border-pink-300 text-pink-500 text-xs font-medium px-3 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Key Ingredients */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <DropsIcon />
            <span className="text-sm font-bold text-gray-800">Key Ingredients</span>
          </div>
          <ul className="space-y-1">
            {product.ingredients.map((ing) => (
              <li key={ing} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0 mt-1.5" />
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Use */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ClockIcon />
            <span className="text-sm font-bold text-gray-800">How to Use</span>
          </div>
          <div className="bg-pink-50 rounded-xl px-4 py-3 text-xs text-pink-700 leading-relaxed">
            {product.howToUse}
          </div>
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
function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#ec4899" strokeLinejoin="round" />
      <path d="M19 2L19.75 5.25L23 6L19.75 6.75L19 10L18.25 6.75L15 6L18.25 5.25L19 2Z" fill="#f9a8d4" strokeLinejoin="round" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function DropsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z" />
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
