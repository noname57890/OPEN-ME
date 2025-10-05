# EmailJS Setup Guide

## Email Template Configuration

When creating your EmailJS template, use this exact template:

```
Subject: 💌 {{card_name}} - Card Opened!

Hi! 🩷

{{message}}

📊 DETAILED ACTIVITY LOG:
{{activity_log}}

---
Opened at: {{opened_at}}
Card Index: {{card_index}}

Time to update this card with a new message! 💕
```

## Variables Used:
- `{{card_name}}` - Name of the card (e.g., "You Miss Me 💕")
- `{{message}}` - Main notification message
- `{{activity_log}}` - Complete journey of everything he clicked/did
- `{{opened_at}}` - Timestamp
- `{{card_index}}` - Card number (0-5)

## Example Email You'll Receive:

```
Subject: 💌 You Miss Me 💕 - Card Opened!

Hi! 🩷

Chirag just opened: "You Miss Me 💕" 💌

📊 DETAILED ACTIVITY LOG:
[10/5/2025, 11:30:15 PM] Clicked on card: "Miss Me"
[10/5/2025, 11:30:22 PM] "Miss Me" confirmation: Clicked YES (he misses you!)
[10/5/2025, 11:30:25 PM] Random miss you message shown: "You miss me? Then call me if I don't pick up... maybe I'll reward you with a voice note later 😌🎧"
[10/5/2025, 11:30:30 PM] Miss Me card: Clicked "Call Me" button 📞💕

---
Opened at: 10/5/2025, 11:30:30 PM
Card Index: 5

Time to update this card with a new message! 💕
```

This way you'll know EXACTLY what he saw and did! 🤫
