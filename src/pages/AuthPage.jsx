import { useState } from "react";

export default function AuthPage({ onLoginSuccess, onSignupSuccess }) {
  const [tab, setTab] = useState("login");

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #6b2d6b 0%, #3b1a4a 40%, #1a0a2e 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-800 opacity-40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900 opacity-30 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
          <SparkleIcon />
        </div>
        <h1
          className="text-white text-5xl font-semibold tracking-wide"
          style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
        >
          Glow Up
        </h1>
        <p className="text-white/70 text-xs tracking-[0.25em] mt-1 uppercase">
          Skincare · Personalized · For Every Skin
        </p>
      </div>


      <div className="relative z-10 w-full max-w-md mx-4 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex m-4 mb-0 bg-pink-50 rounded-2xl p-1">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              tab === "login"
                ? "bg-white text-pink-500 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setTab("signup")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              tab === "signup"
                ? "bg-white text-pink-500 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Render the active form */}
        <div className="px-8 pt-6 pb-8">
          {tab === "login" ? (
            <LoginForm
              onSwitchToSignup={() => setTab("signup")}
              onSuccess={onLoginSuccess}
            />
          ) : (
            <SignupForm
              onSwitchToLogin={() => setTab("login")}
              onSuccess={onSignupSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function LoginForm({ onSwitchToSignup, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login", { email, password });
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <GradientButton label="Log In" />

      <p className="text-center text-xs text-gray-400 pt-1">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-pink-500 font-medium hover:underline"
        >
          Sign up free
        </button>
      </p>
    </form>
  );
}

function SignupForm({ onSwitchToLogin, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError("");
    console.log("signup", { name, email, password });
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-white text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      {error && (
        <p className="text-xs text-red-400 -mt-1">{error}</p>
      )}

      <GradientButton label="Get Started" />

      <p className="text-center text-xs text-gray-400 pt-1">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-pink-500 font-medium hover:underline"
        >
          Log in
        </button>
      </p>
    </form>
  );
}

function GradientButton({ label }) {
  return (
    <button
      type="submit"
      className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm mt-2 active:opacity-90"
      style={{
        background: "linear-gradient(90deg, #db2777 0%, #6366f1 100%)",
        transition: "filter 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
    >
      {label}
    </button>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 2L19.75 5.25L23 6L19.75 6.75L19 10L18.25 6.75L15 6L18.25 5.25L19 2Z"
        fill="#FCD34D"
        strokeLinejoin="round"
      />
    </svg>
  );
}
