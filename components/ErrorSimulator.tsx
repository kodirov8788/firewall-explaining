"use client";

import { useState } from "react";
import {
  AlertTriangle,
  XCircle,
  CheckCircle,
  Shield,
  Network,
  Lock,
  Server,
  Globe,
  Zap,
  AlertCircle,
} from "lucide-react";

interface ErrorSimulatorProps {
  language: "en" | "ja";
}

interface FirewallError {
  id: string;
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  icon: React.ReactNode;
  symptoms: string[];
  consequences: string[];
  solutions: string[];
  codeExample: string;
  category: string;
}

export default function ErrorSimulator({ language }: ErrorSimulatorProps) {
  const [selectedError, setSelectedError] = useState<string>(
    "misconfigured-rules"
  );
  const [showSolution, setShowSolution] = useState(false);

  const translations = {
    en: {
      title: "Common Firewall Errors & Solutions",
      subtitle:
        "Learn about the most common firewall configuration errors, their consequences, and how to prevent or fix them.",
      commonSymptoms: "Common Symptoms",
      potentialConsequences: "Potential Consequences",
      solutions: "Solutions",
      showCodeExample: "Show Code Example",
      hideCodeExample: "Hide Code Example",
      preventionTips: "Prevention Tips",
      tip1: "Always test rules in a staging environment first",
      tip2: "Document all configuration changes",
      tip3: "Implement change management procedures",
      tip4: "Regular security audits and reviews",
      tip5: "Keep firewall software updated",
      severity: "SEVERITY",
    },
    ja: {
      title: "一般的なファイアウォールエラーと解決策",
      subtitle:
        "最も一般的なファイアウォール設定エラー、その結果、および防止・修正方法について学びます。",
      commonSymptoms: "一般的な症状",
      potentialConsequences: "潜在的な結果",
      solutions: "解決策",
      showCodeExample: "コード例を表示",
      hideCodeExample: "コード例を非表示",
      preventionTips: "防止のヒント",
      tip1: "常にステージング環境でルールをテストする",
      tip2: "すべての設定変更を文書化する",
      tip3: "変更管理手順を実装する",
      tip4: "定期的なセキュリティ監査とレビュー",
      tip5: "ファイアウォールソフトウェアを最新に保つ",
      severity: "重要度",
    },
  };

  const firewallErrors: FirewallError[] = [
    {
      id: "misconfigured-rules",
      title:
        language === "en"
          ? "Misconfigured Firewall Rules"
          : "ファイアウォールルールの設定ミス",
      description:
        language === "en"
          ? "Incorrectly configured rules that either block legitimate traffic or allow malicious traffic."
          : "正当なトラフィックをブロックしたり、悪意のあるトラフィックを許可したりする誤って設定されたルール。",
      severity: "high",
      icon: <AlertTriangle className="w-6 h-6" />,
      symptoms:
        language === "en"
          ? [
              "Legitimate applications cannot connect",
              "Users report connectivity issues",
              "Unexpected traffic patterns",
              "Security alerts for blocked legitimate traffic",
            ]
          : [
              "正当なアプリケーションが接続できない",
              "ユーザーが接続の問題を報告",
              "予期しないトラフィックパターン",
              "ブロックされた正当なトラフィックのセキュリティアラート",
            ],
      consequences:
        language === "en"
          ? [
              "Service outages",
              "User productivity loss",
              "Security vulnerabilities",
              "Increased support tickets",
            ]
          : [
              "サービス停止",
              "ユーザーの生産性低下",
              "セキュリティの脆弱性",
              "サポートチケットの増加",
            ],
      solutions:
        language === "en"
          ? [
              "Review and test all firewall rules",
              "Implement rule change management process",
              "Use rule templates and best practices",
              "Regular rule audits and cleanup",
            ]
          : [
              "すべてのファイアウォールルールを確認・テスト",
              "ルール変更管理プロセスを実装",
              "ルールテンプレートとベストプラクティスを使用",
              "定期的なルール監査とクリーンアップ",
            ],
      codeExample: `# Example of misconfigured rule
iptables -A INPUT -p tcp --dport 80 -j DROP  # Blocks all HTTP traffic
# Should be:
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # Allow HTTP traffic`,
      category: language === "en" ? "Configuration" : "設定",
    },
    {
      id: "default-deny",
      title:
        language === "en"
          ? "Default Deny Without Exceptions"
          : "例外なしのデフォルト拒否",
      description:
        language === "en"
          ? "Blocking all traffic without proper exceptions for essential services."
          : "重要なサービスの適切な例外なしですべてのトラフィックをブロックする。",
      severity: "critical",
      icon: <XCircle className="w-6 h-6" />,
      symptoms:
        language === "en"
          ? [
              "Complete network isolation",
              "No internet connectivity",
              "DNS resolution failures",
              "All services inaccessible",
            ]
          : [
              "完全なネットワーク分離",
              "インターネット接続なし",
              "DNS解決の失敗",
              "すべてのサービスにアクセス不可",
            ],
      consequences:
        language === "en"
          ? [
              "Complete service outage",
              "Business operations halted",
              "Emergency access required",
              "Potential data loss",
            ]
          : [
              "完全なサービス停止",
              "ビジネス運営の停止",
              "緊急アクセスが必要",
              "データ損失の可能性",
            ],
      solutions:
        language === "en"
          ? [
              "Implement proper allow rules before deny",
              "Test connectivity after rule changes",
              "Maintain emergency access procedures",
              "Use whitelist approach with essential services",
            ]
          : [
              "拒否の前に適切な許可ルールを実装",
              "ルール変更後の接続性をテスト",
              "緊急アクセス手順を維持",
              "重要なサービスでホワイトリストアプローチを使用",
            ],
      codeExample: `# Problematic default deny
iptables -P INPUT DROP
iptables -P OUTPUT DROP
# Missing allow rules for essential services

# Better approach:
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT # HTTPS
iptables -P INPUT DROP  # Then deny all`,
      category: language === "en" ? "Configuration" : "設定",
    },
    {
      id: "port-scanning",
      title:
        language === "en"
          ? "Vulnerable to Port Scanning"
          : "ポートスキャンに脆弱",
      description:
        language === "en"
          ? "Firewall allows port scanning activities without detection or prevention."
          : "ファイアウォールが検出や防止なしでポートスキャン活動を許可する。",
      severity: "medium",
      icon: <Network className="w-6 h-6" />,
      symptoms:
        language === "en"
          ? [
              "Multiple connection attempts from same IP",
              "Unusual traffic patterns",
              "Security monitoring alerts",
              "Increased network noise",
            ]
          : [
              "同じIPからの複数の接続試行",
              "異常なトラフィックパターン",
              "セキュリティ監視アラート",
              "ネットワークノイズの増加",
            ],
      consequences:
        language === "en"
          ? [
              "Network reconnaissance by attackers",
              "Service enumeration",
              "Potential attack vector identification",
              "Resource consumption",
            ]
          : [
              "攻撃者によるネットワーク偵察",
              "サービスの列挙",
              "潜在的な攻撃ベクトルの特定",
              "リソース消費",
            ],
      solutions:
        language === "en"
          ? [
              "Implement rate limiting",
              "Use intrusion detection systems",
              "Configure connection tracking",
              "Monitor and alert on suspicious patterns",
            ]
          : [
              "レート制限を実装",
              "侵入検知システムを使用",
              "接続追跡を設定",
              "不審なパターンを監視・アラート",
            ],
      codeExample: `# Rate limiting example
iptables -A INPUT -p tcp --dport 22 -m limit --limit 3/min --limit-burst 5 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP

# Connection tracking
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT`,
      category: language === "en" ? "Security" : "セキュリティ",
    },
    {
      id: "logging-disabled",
      title: "Insufficient Logging",
      description:
        "Firewall events are not properly logged, making troubleshooting and security analysis difficult.",
      severity: "medium",
      icon: <Server className="w-6 h-6" />,
      symptoms: [
        "No audit trail for blocked traffic",
        "Difficulty troubleshooting issues",
        "No security incident visibility",
        "Compliance violations",
      ],
      consequences: [
        "Inability to investigate incidents",
        "Compliance failures",
        "Security blind spots",
        "Delayed problem resolution",
      ],
      solutions: [
        "Enable comprehensive logging",
        "Implement log rotation and retention",
        "Use centralized logging systems",
        "Set up log monitoring and alerting",
      ],
      codeExample: `# Enable logging for all rules
iptables -A INPUT -j LOG --log-prefix "FW-DENIED: "
iptables -A OUTPUT -j LOG --log-prefix "FW-OUT: "

# Log to specific file
iptables -A INPUT -j LOG --log-prefix "FW-DENIED: " --log-level 4`,
      category: "Monitoring",
    },
    {
      id: "outdated-rules",
      title: "Outdated Firewall Rules",
      description:
        "Firewall rules that are no longer relevant or have become security risks.",
      severity: "high",
      icon: <Globe className="w-6 h-6" />,
      symptoms: [
        "Unused rules in configuration",
        "Legacy service ports open",
        "Deprecated protocols allowed",
        "Complex rule sets",
      ],
      consequences: [
        "Increased attack surface",
        "Performance degradation",
        "Configuration complexity",
        "Security vulnerabilities",
      ],
      solutions: [
        "Regular rule audits and cleanup",
        "Document rule purposes and owners",
        "Remove unused and deprecated rules",
        "Implement rule lifecycle management",
      ],
      codeExample: `# Audit existing rules
iptables -L -n --line-numbers

# Remove specific rule
iptables -D INPUT 5  # Remove rule at line 5

# Clean up unused rules
# Review and remove rules for:
# - Decommissioned services
# - Deprecated protocols
# - Unused IP ranges`,
      category: "Maintenance",
    },
    {
      id: "no-backup",
      title: "No Configuration Backup",
      description:
        "Firewall configuration is not backed up, risking complete loss of settings.",
      severity: "critical",
      icon: <Zap className="w-6 h-6" />,
      symptoms: [
        "No backup files available",
        "Configuration changes not documented",
        "No disaster recovery plan",
        "Manual configuration recreation needed",
      ],
      consequences: [
        "Complete configuration loss",
        "Extended downtime during recovery",
        "Security policy gaps",
        "Compliance violations",
      ],
      solutions: [
        "Implement automated configuration backups",
        "Use version control for configurations",
        "Test backup restoration procedures",
        "Document all configuration changes",
      ],
      codeExample: `# Backup current configuration
iptables-save > /backup/firewall-$(date +%Y%m%d).rules

# Restore configuration
iptables-restore < /backup/firewall-20231201.rules

# Automated backup script
#!/bin/bash
iptables-save > /backup/firewall-$(date +%Y%m%d-%H%M%S).rules
find /backup -name "firewall-*.rules" -mtime +30 -delete`,
      category: "Backup",
    },
  ];

  const t = translations[language];
  const currentError = firewallErrors.find(
    (error) => error.id === selectedError
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "text-blue-500 bg-blue-50";
      case "medium":
        return "text-yellow-500 bg-yellow-50";
      case "high":
        return "text-orange-500 bg-orange-50";
      case "critical":
        return "text-red-500 bg-red-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return <AlertCircle className="w-4 h-4" />;
      case "medium":
        return <AlertTriangle className="w-4 h-4" />;
      case "high":
        return <XCircle className="w-4 h-4" />;
      case "critical":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Error Categories */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {firewallErrors.map((error) => (
          <div
            key={error.id}
            onClick={() => setSelectedError(error.id)}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedError === error.id
                ? "bg-primary-500 text-white shadow-lg transform scale-105"
                : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div
                className={
                  selectedError === error.id ? "text-white" : "text-primary-500"
                }
              >
                {error.icon}
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedError === error.id
                    ? "bg-white text-primary-500"
                    : getSeverityColor(error.severity)
                }`}
              >
                {error.severity.toUpperCase()}
              </div>
            </div>
            <h3 className="font-semibold mb-2">{error.title}</h3>
            <p
              className={`text-sm ${
                selectedError === error.id ? "text-blue-100" : "text-gray-600"
              }`}
            >
              {error.description}
            </p>
            <div className="mt-3 text-xs opacity-75">{error.category}</div>
          </div>
        ))}
      </div>

      {/* Detailed Error View */}
      {currentError && (
        <div className="bg-white rounded-lg shadow-lg p-8 slide-in">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Error Details */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-primary-500">{currentError.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {currentError.title}
                  </h3>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(
                      currentError.severity
                    )}`}
                  >
                    {getSeverityIcon(currentError.severity)}
                    <span className="ml-1">{t.severity}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{currentError.description}</p>

              {/* Symptoms */}
              <div className="mb-6">
                <h4 className="font-semibold text-orange-600 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  {t.commonSymptoms}
                </h4>
                <ul className="space-y-2">
                  {currentError.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consequences */}
              <div className="mb-6">
                <h4 className="font-semibold text-danger-600 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  {t.potentialConsequences}
                </h4>
                <ul className="space-y-2">
                  {currentError.consequences.map((consequence, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-danger-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">
                        {consequence}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Solutions and Code */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-success-600 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {t.solutions}
                </h4>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm"
                >
                  {showSolution ? t.hideCodeExample : t.showCodeExample}
                </button>
              </div>

              <ul className="space-y-3 mb-6">
                {currentError.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>

              {/* Code Example */}
              {showSolution && (
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300 text-sm font-medium">
                      Code Example
                    </span>
                    <span className="text-gray-500 text-xs">iptables</span>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{currentError.codeExample}</code>
                  </pre>
                </div>
              )}

              {/* Prevention Tips */}
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">
                  {t.preventionTips}
                </h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• {t.tip1}</li>
                  <li>• {t.tip2}</li>
                  <li>• {t.tip3}</li>
                  <li>• {t.tip4}</li>
                  <li>• {t.tip5}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
