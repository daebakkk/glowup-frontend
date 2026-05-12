import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SkinProfilePage from "./pages/SkinProfilePage";
import RecommendationsPage from "./pages/RecommendationsPage";

export default function App() {
  const [page, setPage] = useState("auth");
  const [profile, setProfile] = useState({ skinType: null, concerns: [] });

  const navigate = (destination, data) => {
    if (data?.skinType !== undefined) setProfile(data);
    setPage(destination);
  };

  if (page === "home") {
    return (
      <HomePage
        onNavigate={(destination, data) => navigate(destination, data)}
      />
    );
  }

  if (page === "skinProfile") {
    return (
      <SkinProfilePage
        onViewRecommendations={(data) => navigate("recommendations", data)}
      />
    );
  }

  if (page === "recommendations") {
    return (
      <RecommendationsPage
        profile={profile}
        onEditProfile={() => setPage("skinProfile")}
        onHome={() => setPage("home")}
      />
    );
  }

  return (
    <AuthPage
      onLoginSuccess={() => setPage("home")}
      onSignupSuccess={() => setPage("skinProfile")}
    />
  );
}
