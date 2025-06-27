# Firewall Explaining

## Overview

**Firewall Explaining** is a tool/library designed to help users understand, visualize, and debug firewall rules and network security configurations. It provides clear explanations of complex firewall policies, translates technical rules into plain language, and offers insights into how traffic is managed and filtered by firewalls.

## Features

- **Rule Explanation:** Converts firewall rules (e.g., iptables, firewalld, Windows Firewall) into easy-to-understand descriptions.
- **Traffic Flow Simulation:** Simulates the path a network packet would take through the firewall, highlighting allowed and blocked scenarios.
- **Visualization:** Generates diagrams or flowcharts representing rule processing order and decision points.
- **Configuration Validation:** Checks for redundant, conflicting, or potentially insecure rules.
- **Support for Multiple Platforms:** Works with popular firewall types including Linux (iptables, nftables), Windows, and some cloud firewalls.

## How It Works

1. **Input Firewall Rules:**  
   Import rules from files, command outputs, or paste them into the interface.

2. **Processing:**  
   The tool parses the rules and builds an internal representation of the firewall’s logic.

3. **Explanation & Output:**  
   - Provides plain-language explanations of each rule.
   - Shows which rules apply to specific traffic scenarios.
   - Highlights any issues or conflicts.

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

## Installation

```bash
pip install firewall-explaining
```
_or clone/download and install manually:_

```bash
git clone https://github.com/yourorg/firewall-explaining.git
cd firewall-explaining
pip install .
```

## Usage

### CLI

```bash
firewall-explaining explain --file path/to/rules.txt
```

### Library

```python
from firewall_explaining import explain_rules

rules = """
-A INPUT -p tcp --dport 22 -j ACCEPT
-A INPUT -p tcp --dport 80 -j ACCEPT
-A INPUT -j DROP
"""
explanations = explain_rules(rules)
print(explanations)
```

## Supported Firewalls

- Linux iptables & nftables
- Windows Firewall (exported rules)
- firewalld
- UFW (Uncomplicated Firewall)
- Basic cloud firewall configs (AWS, GCP, Azure) _(planned)_

## Contributing

Contributions are welcome! Please open issues or pull requests on [GitHub](https://github.com/yourorg/firewall-explaining).

## License

MIT License

## Contact

For help or suggestions, please email [support@yourorg.com](mailto:support@yourorg.com) or open a GitHub issue.
