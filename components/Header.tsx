import { Shield, Zap, AlertTriangle } from "lucide-react";

interface HeaderProps {
  language: "en" | "ja";
  setLanguage: (lang: "en" | "ja") => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const translations = {
    en: {
      title: "Firewall Explainer",
      subtitle:
        "Learn about network security, firewall types, and common configuration errors",
      interactive: "Interactive Learning",
      errorPrevention: "Error Prevention",
    },
    ja: {
      title: "ファイアウォール説明",
      subtitle:
        "ネットワークセキュリティ、ファイアウォールの種類、一般的な設定エラーについて学ぶ",
      interactive: "インタラクティブ学習",
      errorPrevention: "エラー防止",
    },
  };

  const t = translations[language];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-primary-500" />
            <h1 className="text-3xl font-bold text-gray-800">{t.title}</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-success-500" />
              <span>{t.interactive}</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-danger-500" />
              <span>{t.errorPrevention}</span>
            </div>
          </div>
        </div>
        <p className="text-center mt-2 text-gray-600">{t.subtitle}</p>
      </div>
    </header>
  );
}
