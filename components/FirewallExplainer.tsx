"use client";

import { useState } from "react";
import {
  Shield,
  Network,
  Lock,
  Globe,
  Server,
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface FirewallExplainerProps {
  language: "en" | "ja";
}

interface FirewallType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  pros: string[];
  cons: string[];
  image: string;
}

export default function FirewallExplainer({
  language,
}: FirewallExplainerProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const translations = {
    en: {
      title: "Understanding Firewalls",
      subtitle:
        "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Think of it as a security guard for your network.",
      advantages: "Advantages",
      disadvantages: "Disadvantages",
      howItWorks: "How it Works",
      step1: "Traffic arrives at firewall",
      step2: "Firewall analyzes traffic",
      step3: "Decision made based on rules",
      step4: "Traffic allowed or blocked",
      next: "Next",
      previous: "Previous",
      step: "Step",
    },
    ja: {
      title: "ファイアウォールの理解",
      subtitle:
        "ファイアウォールは、事前に設定されたセキュリティルールに基づいて、入出力ネットワークトラフィックを監視・制御するネットワークセキュリティデバイスです。ネットワークの警備員と考えてください。",
      advantages: "利点",
      disadvantages: "欠点",
      howItWorks: "動作原理",
      step1: "トラフィックがファイアウォールに到達",
      step2: "ファイアウォールがトラフィックを分析",
      step3: "ルールに基づいて決定",
      step4: "トラフィックを許可またはブロック",
      next: "次へ",
      previous: "前へ",
      step: "ステップ",
    },
  };

  const firewallTypes: FirewallType[] = [
    {
      id: "packet-filtering",
      name:
        language === "en"
          ? "Packet Filtering Firewall"
          : "パケットフィルタリングファイアウォール",
      description:
        language === "en"
          ? "Examines packets at the network layer and filters based on IP addresses, ports, and protocols."
          : "ネットワーク層でパケットを検査し、IPアドレス、ポート、プロトコルに基づいてフィルタリングします。",
      icon: <Network className="w-6 h-6" />,
      pros:
        language === "en"
          ? ["Fast performance", "Low resource usage", "Simple configuration"]
          : ["高速パフォーマンス", "低リソース使用量", "シンプルな設定"],
      cons:
        language === "en"
          ? [
              "Limited security",
              "No application awareness",
              "Vulnerable to IP spoofing",
            ]
          : [
              "限定的なセキュリティ",
              "アプリケーション認識なし",
              "IPスプーフィングに脆弱",
            ],
      image: "🔍",
    },
    {
      id: "stateful",
      name:
        language === "en"
          ? "Stateful Inspection Firewall"
          : "ステートフル検査ファイアウォール",
      description:
        language === "en"
          ? "Tracks the state of network connections and makes decisions based on the context of the traffic."
          : "ネットワーク接続の状態を追跡し、トラフィックのコンテキストに基づいて決定を行います。",
      icon: <Lock className="w-6 h-6" />,
      pros:
        language === "en"
          ? [
              "Better security",
              "Connection tracking",
              "More intelligent filtering",
            ]
          : [
              "より良いセキュリティ",
              "接続追跡",
              "よりインテリジェントなフィルタリング",
            ],
      cons:
        language === "en"
          ? [
              "Higher resource usage",
              "More complex configuration",
              "Slower than packet filtering",
            ]
          : [
              "より高いリソース使用量",
              "より複雑な設定",
              "パケットフィルタリングより遅い",
            ],
      image: "🔄",
    },
    {
      id: "application",
      name:
        language === "en"
          ? "Application Layer Firewall"
          : "アプリケーション層ファイアウォール",
      description:
        language === "en"
          ? "Analyzes traffic at the application layer and can understand application protocols."
          : "アプリケーション層でトラフィックを分析し、アプリケーションプロトコルを理解できます。",
      icon: <Server className="w-6 h-6" />,
      pros:
        language === "en"
          ? [
              "Deep packet inspection",
              "Application awareness",
              "Advanced threat detection",
            ]
          : ["ディープパケット検査", "アプリケーション認識", "高度な脅威検出"],
      cons:
        language === "en"
          ? [
              "High resource usage",
              "Complex configuration",
              "Potential performance impact",
            ]
          : [
              "高いリソース使用量",
              "複雑な設定",
              "パフォーマンスへの影響の可能性",
            ],
      image: "🔬",
    },
    {
      id: "next-gen",
      name:
        language === "en"
          ? "Next-Generation Firewall"
          : "次世代ファイアウォール",
      description:
        language === "en"
          ? "Combines traditional firewall capabilities with advanced features like intrusion prevention and application control."
          : "従来のファイアウォール機能と侵入防止やアプリケーション制御などの高度な機能を組み合わせています。",
      icon: <Globe className="w-6 h-6" />,
      pros:
        language === "en"
          ? [
              "Comprehensive protection",
              "Advanced features",
              "User and application awareness",
            ]
          : ["包括的な保護", "高度な機能", "ユーザーとアプリケーション認識"],
      cons:
        language === "en"
          ? ["Expensive", "Complex management", "Requires expertise"]
          : ["高価", "複雑な管理", "専門知識が必要"],
      image: "🚀",
    },
  ];

  const t = translations[language];
  const currentFirewall = firewallTypes[currentStep];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % firewallTypes.length);
  };

  const previousStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + firewallTypes.length) % firewallTypes.length
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Shield className="w-16 h-16 text-primary-500" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Step Navigation */}
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={previousStep}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-primary-500" />
        </button>

        <div className="mx-8 flex space-x-2">
          {firewallTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentStep ? "bg-primary-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextStep}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-primary-500" />
        </button>
      </div>

      {/* Current Step Display */}
      <div className="bg-white rounded-lg shadow-lg p-8 slide-in">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">{currentFirewall.image}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {currentFirewall.name}
          </h3>
          <p className="text-gray-600">{currentFirewall.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Pros and Cons */}
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-success-600 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {t.advantages}
                </h4>
                <ul className="space-y-2">
                  {currentFirewall.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-danger-600 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  {t.disadvantages}
                </h4>
                <ul className="space-y-2">
                  {currentFirewall.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - How it Works */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">{t.howItWorks}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <span className="text-sm text-gray-700">{t.step1}</span>
              </div>
              <ArrowRight className="w-6 h-6 text-primary-500 mx-auto" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <span className="text-sm text-gray-700">{t.step2}</span>
              </div>
              <ArrowRight className="w-6 h-6 text-primary-500 mx-auto" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <span className="text-sm text-gray-700">{t.step3}</span>
              </div>
              <ArrowRight className="w-6 h-6 text-primary-500 mx-auto" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <span className="text-sm text-gray-700">{t.step4}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step Counter */}
        <div className="text-center mt-6 text-sm text-gray-500">
          {t.step} {currentStep + 1} of {firewallTypes.length}
        </div>
      </div>
    </div>
  );
}
