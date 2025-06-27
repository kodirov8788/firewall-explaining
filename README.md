# Firewall Explaining

[![Live App](https://img.shields.io/badge/demo-online-green)](https://firewall-explaining.vercel.app)

## Overview

**Firewall Explaining** is a tool designed to help users understand, visualize, and debug firewall rules and network security configurations. It provides clear, human-readable explanations for firewall rules, simulates traffic flow, and helps identify misconfigurations or security gaps.

Explore the live app: [firewall-explaining.vercel.app](https://firewall-explaining.vercel.app)

---

## Features

- 📝 **Rule Explanation:** Converts technical firewall rules (e.g., iptables, firewalld, Windows Firewall) into plain language.
- 🔍 **Traffic Flow Simulation:** Simulates how network packets are processed through firewall rules, showing allowed/blocked scenarios.
- 🗺️ **Visualization:** Visualizes rule processing order and decisions with flowcharts and diagrams.
- 🛡️ **Configuration Validation:** Detects redundant, conflicting, or potentially insecure rules.
- 🖥️ **Multi-Platform Support:** Works with Linux (iptables, nftables, UFW), Windows Firewall, and select cloud firewalls.

---

## Quick Start

### 1. Try the Live Demo

Open [firewall-explaining.vercel.app](https://firewall-explaining.vercel.app) in your browser—no setup required!

### 2. Install Locally

Clone the repository:

```bash
git clone https://github.com/yourorg/firewall-explaining.git
cd firewall-explaining
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Usage

### Web UI

- Paste or upload your firewall rules (iptables, nftables, UFW, Windows Firewall, etc.).
- Click "Explain" to see human-readable explanations and traffic simulations.
- View visualization diagrams for rule flows.
- Download explanations or share them with your team.

### Programmatic Usage

If you want to use the explanation engine in your own scripts:

```js
import { explainRules } from 'firewall-explaining';

const rawRules = `
-A INPUT -p tcp --dport 22 -j ACCEPT
-A INPUT -p tcp --dport 80 -j ACCEPT
-A INPUT -j DROP
`;

const result = explainRules(rawRules);
console.log(result);
```

---

## Example

**Input:**
```
-A INPUT -p tcp --dport 22 -j ACCEPT
-A INPUT -p tcp --dport 80 -j ACCEPT
-A INPUT -j DROP
```

**Output Explanation:**
- Allows all incoming TCP traffic on port 22 (SSH).
- Allows all incoming TCP traffic on port 80 (HTTP).
- Drops all other incoming traffic by default.

---

## Supported Firewalls

- Linux iptables & nftables
- UFW (Uncomplicated Firewall)
- Windows Firewall (exported rules)
- firewalld
- Basic cloud firewall configs (AWS, GCP, Azure) _(planned)_

---

## Contributing

We welcome contributions! Please fork the repo, open issues, or submit pull requests.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

---

## License

MIT License

---

## Contact

For support or suggestions, please email [kodirov8788@gmail.com](mailto:kodirov8788@gmail.com).

---
