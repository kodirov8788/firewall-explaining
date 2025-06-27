"use client";

import { useState } from "react";
import {
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Zap,
} from "lucide-react";

interface FirewallSliderProps {
  language: "en" | "ja";
}

interface SecurityLevel {
  level: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  allowedTraffic: string[];
  blockedTraffic: string[];
  performance: string;
  security: string;
}

export default function FirewallSlider({ language }: FirewallSliderProps) {
  const [securityLevel, setSecurityLevel] = useState(3);
  const [showTraffic, setShowTraffic] = useState(false);

  const translations = {
    en: {
      title: "Interactive Security Level Slider",
      subtitle:
        "Adjust the security level to see how different firewall configurations affect network traffic, performance, and security.",
      minimalSecurity: "Minimal Security",
      maximumSecurity: "Maximum Security",
      level: "Level",
      allowedTraffic: "Allowed Traffic",
      blockedTraffic: "Blocked Traffic",
      activeRules: "Active Firewall Rules",
      showTraffic: "Show Traffic Flow",
      hideTraffic: "Hide Traffic Flow",
      securityLevel: "Security Level",
      performance: "Performance Impact",
      protection: "Protection",
      speed: "Speed",
    },
    ja: {
      title: "インタラクティブセキュリティレベルスライダー",
      subtitle:
        "セキュリティレベルを調整して、異なるファイアウォール設定がネットワークトラフィック、パフォーマンス、セキュリティにどのように影響するかを確認します。",
      minimalSecurity: "最小セキュリティ",
      maximumSecurity: "最大セキュリティ",
      level: "レベル",
      allowedTraffic: "許可されたトラフィック",
      blockedTraffic: "ブロックされたトラフィック",
      activeRules: "アクティブなファイアウォールルール",
      showTraffic: "トラフィックフローを表示",
      hideTraffic: "トラフィックフローを非表示",
      securityLevel: "セキュリティレベル",
      performance: "パフォーマンスへの影響",
      protection: "保護",
      speed: "速度",
    },
  };

  const securityLevels: SecurityLevel[] = [
    {
      level: 1,
      name: language === "en" ? "Minimal Security" : "最小セキュリティ",
      description:
        language === "en"
          ? "Basic packet filtering with minimal rules"
          : "最小限のルールによる基本的なパケットフィルタリング",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-danger-500",
      allowedTraffic:
        language === "en"
          ? ["HTTP/HTTPS", "FTP", "SSH", "All other protocols"]
          : ["HTTP/HTTPS", "FTP", "SSH", "その他のすべてのプロトコル"],
      blockedTraffic:
        language === "en"
          ? ["Known malicious IPs only"]
          : ["既知の悪意のあるIPのみ"],
      performance: language === "en" ? "Excellent" : "優秀",
      security: language === "en" ? "Very Low" : "非常に低い",
    },
    {
      level: 2,
      name: language === "en" ? "Low Security" : "低セキュリティ",
      description:
        language === "en"
          ? "Standard firewall with basic rules"
          : "基本的なルールを持つ標準ファイアウォール",
      icon: <Shield className="w-6 h-6" />,
      color: "text-orange-500",
      allowedTraffic:
        language === "en"
          ? ["HTTP/HTTPS", "FTP", "SSH", "SMTP", "DNS"]
          : ["HTTP/HTTPS", "FTP", "SSH", "SMTP", "DNS"],
      blockedTraffic:
        language === "en"
          ? ["Telnet", "NetBIOS", "Known malicious IPs"]
          : ["Telnet", "NetBIOS", "既知の悪意のあるIP"],
      performance: language === "en" ? "Very Good" : "非常に良い",
      security: language === "en" ? "Low" : "低い",
    },
    {
      level: 3,
      name: language === "en" ? "Medium Security" : "中程度のセキュリティ",
      description:
        language === "en"
          ? "Stateful inspection with moderate rules"
          : "中程度のルールによるステートフル検査",
      icon: <Lock className="w-6 h-6" />,
      color: "text-yellow-500",
      allowedTraffic:
        language === "en"
          ? ["HTTP/HTTPS", "SSH", "SMTP", "DNS", "Specific applications"]
          : ["HTTP/HTTPS", "SSH", "SMTP", "DNS", "特定のアプリケーション"],
      blockedTraffic:
        language === "en"
          ? ["Telnet", "NetBIOS", "P2P protocols", "Suspicious traffic"]
          : ["Telnet", "NetBIOS", "P2Pプロトコル", "不審なトラフィック"],
      performance: language === "en" ? "Good" : "良い",
      security: language === "en" ? "Medium" : "中程度",
    },
    {
      level: 4,
      name: language === "en" ? "High Security" : "高セキュリティ",
      description:
        language === "en"
          ? "Advanced firewall with strict rules"
          : "厳格なルールを持つ高度なファイアウォール",
      icon: <Zap className="w-6 h-6" />,
      color: "text-success-500",
      allowedTraffic:
        language === "en"
          ? ["HTTPS only", "SSH", "Specific whitelisted applications"]
          : ["HTTPSのみ", "SSH", "特定のホワイトリストアプリケーション"],
      blockedTraffic:
        language === "en"
          ? ["HTTP", "FTP", "All unapproved protocols", "Suspicious patterns"]
          : ["HTTP", "FTP", "すべての未承認プロトコル", "不審なパターン"],
      performance: language === "en" ? "Moderate" : "中程度",
      security: language === "en" ? "High" : "高い",
    },
    {
      level: 5,
      name: language === "en" ? "Maximum Security" : "最大セキュリティ",
      description:
        language === "en"
          ? "Enterprise-grade security with zero-trust"
          : "ゼロトラストによるエンタープライズグレードセキュリティ",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "text-primary-500",
      allowedTraffic:
        language === "en"
          ? ["Whitelisted applications only", "Authenticated users only"]
          : ["ホワイトリストアプリケーションのみ", "認証済みユーザーのみ"],
      blockedTraffic:
        language === "en"
          ? [
              "All traffic by default",
              "Unapproved applications",
              "Unknown sources",
            ]
          : [
              "デフォルトですべてのトラフィック",
              "未承認アプリケーション",
              "不明なソース",
            ],
      performance: language === "en" ? "Lower" : "低い",
      security: language === "en" ? "Maximum" : "最大",
    },
  ];

  const t = translations[language];
  const currentLevel = securityLevels.find(
    (level) => level.level === securityLevel
  );

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityLevel(parseInt(e.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Slider Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
              {t.minimalSecurity}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {t.maximumSecurity}
            </span>
          </div>

          <div className="relative mb-8">
            <input
              type="range"
              min="1"
              max="5"
              value={securityLevel}
              onChange={handleSliderChange}
              className="w-full h-3 bg-gradient-to-r from-danger-500 via-orange-500 via-yellow-500 via-success-500 to-primary-500 rounded-lg appearance-none cursor-pointer slider-track"
              style={{
                background:
                  "linear-gradient(to right, #ef4444 0%, #f97316 25%, #eab308 50%, #22c55e 75%, #3b82f6 100%)",
              }}
            />

            {/* Security Level Indicator */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div
                className={`bg-white rounded-lg shadow-lg px-4 py-2 border-2 ${currentLevel?.color.replace(
                  "text-",
                  "border-"
                )}`}
              >
                <span className="font-bold text-gray-800">
                  {t.level} {securityLevel}
                </span>
              </div>
            </div>
          </div>

          {/* Current Level Display */}
          {currentLevel && (
            <div className="text-center p-6 rounded-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className={currentLevel.color}>{currentLevel.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {currentLevel.name}
              </h3>
              <p className="text-gray-600 mb-4">{currentLevel.description}</p>

              {/* Security vs Performance */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-success-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-success-700 mb-2">
                    {t.securityLevel}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {t.protection}
                    </span>
                    <span className="font-bold text-success-700">
                      {currentLevel.security}
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    {t.performance}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{t.speed}</span>
                    <span className="font-bold text-blue-700">
                      {currentLevel.performance}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Traffic Flow Visualization */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{t.activeRules}</h3>
          <button
            onClick={() => setShowTraffic(!showTraffic)}
            className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            {showTraffic ? t.hideTraffic : t.showTraffic}
          </button>
        </div>

        {showTraffic && currentLevel && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Allowed Traffic */}
            <div className="bg-success-50 p-6 rounded-lg">
              <h4 className="font-semibold text-success-700 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                {t.allowedTraffic}
              </h4>
              <div className="space-y-3">
                {currentLevel.allowedTraffic.map((traffic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{traffic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blocked Traffic */}
            <div className="bg-danger-50 p-6 rounded-lg">
              <h4 className="font-semibold text-danger-700 mb-4 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                {t.blockedTraffic}
              </h4>
              <div className="space-y-3">
                {currentLevel.blockedTraffic.map((traffic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{traffic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
