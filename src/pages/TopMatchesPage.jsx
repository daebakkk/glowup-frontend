const PRODUCTS = [
  {
    name: "Gentle Hydrating Cleanser",
    category: "Cleanser",
    reason: "Perfect for your dry skin and helps with acne and breakouts",
    targets: ["Acne & Breakouts"],
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
  },
  {
    name: "Hydrating Rose Toner",
    category: "Toner",
    reason: "Perfect for your dry skin and helps with dryness and dehydration",
    targets: ["Dryness"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
  },
  {
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    reason: "Perfect for your dry skin and helps with dark spots and dull skin",
    targets: ["Dark Spots", "Dull Skin"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
  },
  {
    name: "Retinol Anti-Aging Serum",
    category: "Serum",
    reason: "Perfect for your dry skin and helps with fine lines and wrinkles",
    targets: ["Fine Lines & Wrinkles", "Uneven Texture"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
  },
  {
    name: "Hyaluronic Acid Hydrating Serum",
    category: "Serum",
    reason: "Perfect for your dry skin and helps with dryness and fine lines and wrinkles",
    targets: ["Dryness", "Fine Lines & Wrinkles"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
  },
  {
    name: "Anti-Aging Eye Cream",
    category: "Eye Cream",
    reason: "Perfect for your dry skin and helps with fine lines and wrinkles",
    targets: ["Fine Lines & Wrinkles"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
  },
];

const CONCERN_TAGS = ["Acne & Breakouts", "Fine Lines & Wrinkles", "Dark Spots", "Dull Skin", "Dryness"];

const WHY_POINTS = [
  "These products are specifically formulated for dry skin",
  "They target your specific concerns for maximum effectiveness",
  "Each product is ranked based on how well it matches your profile",
  "Use them as part of your daily routine for best results",
];

export default function TopMatchesPage({ profile = {}, onHome }) {
  const skinType = profile?.skinType || "dry";

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
        <span className="text-pink-500 text-sm font-medium">Top Matches</span>
      </nav>

      <div className="max-w-5xl mx-auto px-8 pb-16">
        {/* Header */}
        <div className="text-center pt-2 pb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <BadgeHeaderIcon />
            <h1
              className="text-4xl font-bold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Top Matches
            </h1>
          </div>
          <p className="text-gray-500 text-base mb-4 capitalize">
            Your best product matches for {skinType} skin
          </p>
          {/* Targeting pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-xs text-gray-500 self-center">Targeting:</span>
            {CONCERN_TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-pink-300 text-pink-500 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PRODUCTS.map((product, i) => (
            <MatchCard key={product.name} product={product} rank={i + 1} skinType={skinType} />
          ))}
        </div>

        {/* Why These Products */}
        <div className="bg-pink-50 rounded-2xl border border-pink-100 p-8">
          <p className="text-base font-bold text-gray-800 mb-3">Why These Products?</p>
          <ul className="space-y-2">
            {WHY_POINTS.map((point, i) => (
              <li key={i} className="text-base text-gray-600 flex items-start gap-2">
                <span className="text-pink-400 flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MatchCard({ product, rank, skinType }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Image with rank badge overlay */}
      <div className="relative w-full h-60 bg-gradient-to-br from-pink-50 to-blue-50 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        {/* Rank badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow"
          style={{ background: "linear-gradient(90deg, #f472b6, #818cf8)" }}
        >
          <StarIcon />
          #{rank} Match
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category pill */}
        <span className="inline-block bg-blue-50 text-blue-500 text-xs font-medium px-2.5 py-1 rounded-full mb-2 self-start">
          {product.category}
        </span>

        {/* Name */}
        <p className="text-sm font-bold text-gray-800 mb-1 leading-snug">{product.name}</p>

        {/* Perfect for your needs */}
        <div className="flex items-center gap-1.5 mb-3">
          <TrendIcon />
          <span className="text-xs text-pink-500 font-medium">Perfect for your needs</span>
        </div>

        {/* Reason box */}
        <div className="bg-blue-50 rounded-xl px-3 py-2.5 mb-3 text-xs text-gray-600 leading-relaxed capitalize">
          {product.reason.replace("{skinType}", skinType)}
        </div>

        {/* Targets */}
        {product.targets.length > 0 && (
          <div className="mt-auto">
            <p className="text-xs font-semibold text-gray-400 tracking-wider mb-2">TARGETS:</p>
            <div className="flex flex-wrap gap-1.5">
              {product.targets.map((t) => (
                <span
                  key={t}
                  className="border border-pink-300 text-pink-500 text-xs px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
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
function BadgeHeaderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
