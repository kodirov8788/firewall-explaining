"use client";

import { useState } from "react";
import FirewallExplainer from "@/components/FirewallExplainer";
import FirewallSlider from "@/components/FirewallSlider";
import ErrorSimulator from "@/components/ErrorSimulator";
import Header from "@/components/Header";

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    "explainer" | "slider" | "errors"
  >("explainer");
  const [language, setLanguage] = useState<"en" | "ja">("en");

  const translations = {
    en: {
      firewallBasics: "Firewall Basics",
      interactiveSlider: "Interactive Slider",
      commonErrors: "Common Errors",
      title: "Firewall Explainer",
      subtitle:
        "Learn about network security, firewall types, and common configuration errors",
    },
    ja: {
      firewallBasics: "ファイアウォール基礎",
      interactiveSlider: "インタラクティブスライダー",
      commonErrors: "一般的なエラー",
      title: "ファイアウォール説明",
      subtitle:
        "ネットワークセキュリティ、ファイアウォールの種類、一般的な設定エラーについて学ぶ",
    },
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header language={language} setLanguage={setLanguage} />

      <div className="container mx-auto px-4 py-8">
        {/* Language Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                language === "en"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("ja")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                language === "ja"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              }`}
            >
              日本語
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveSection("explainer")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeSection === "explainer"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              }`}
            >
              {t.firewallBasics}
            </button>
            <button
              onClick={() => setActiveSection("slider")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeSection === "slider"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              }`}
            >
              {t.interactiveSlider}
            </button>
            <button
              onClick={() => setActiveSection("errors")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeSection === "errors"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              }`}
            >
              {t.commonErrors}
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="fade-in">
          {activeSection === "explainer" && (
            <FirewallExplainer language={language} />
          )}
          {activeSection === "slider" && <FirewallSlider language={language} />}
          {activeSection === "errors" && <ErrorSimulator language={language} />}
        </div>
      </div>
    </main>
  );
}
