# Gig Guard

AI-powered financial protection system for delivery partners

---

## Overview

Gig Guard is a full-stack system designed to protect delivery partners from income loss during disruptions such as heavy rain, poor air quality, or local restrictions.

The platform combines environmental data, machine learning models, and automated workflows to detect risk and provide financial support without requiring manual claims.

The system is built to simulate real-world integration with delivery platforms like Zomato or Swiggy through a partner API model.

---

## Problem

Delivery partners depend on daily work for income. When external conditions disrupt operations, their earnings stop immediately.

Key challenges:

* No income during disasters or curfews
* No automated protection system
* Manual claim processes are slow or unavailable

---

## Solution

Gig Guard introduces a backend-driven, automated protection system:

* User logs in using phone or delivery platform
* Driver data is fetched from a simulated partner API
* Environmental conditions are monitored continuously
* Risk is calculated using machine learning
* If conditions are critical, payout is triggered automatically
* User is informed through WhatsApp and in-app assistant

---

## System Architecture

```text
React Frontend
       │
       ▼
Backend API (Node.js / Express)
       │
       ├── MongoDB (driver data)
       ├── Mock Partner API
       ├── ML Models (Risk, Fraud, Payout)
       ├── External APIs (Weather, AQI, Maps)
       └── WhatsApp Notification Service
```

---

## Intelligence Stack

Gig Guard runs multiple components in sequence:

```text
INDRA → KAVACH → DHAN → VAANI
```

* **INDRA (Risk Engine)**
  Processes weather, AQI, and location data to generate a disruption risk score (0–100).
  If the score crosses a threshold, the system prepares a claim.

* **KAVACH (Fraud Engine)**
  Validates claims using GPS location, movement patterns, duplicate detection, and environmental confirmation.

* **DHAN (Payout Engine)**
  Calculates payout based on risk level, work disruption, and driver earnings.

* **VAANI (AI Assistant)**
  Communicates results, explains decisions, and guides the user.

---

## Machine Learning Components

### Risk Model

Evaluates environmental and contextual inputs:

* Rainfall, wind, visibility
* AQI levels
* Location and zone data

Output: Risk score (0–100)

---

### Payout Model

Determines compensation using:

* Risk score
* Estimated hours lost
* Driver’s earning history

---

### Fraud Detection Model

Identifies anomalies such as:

* GPS mismatch
* Unusual movement speed
* Duplicate claims
* Inconsistent activity

---

### Premium Calculation

```text
premium = 49 + (risk_score / 100) * 29
```

---

## Protection Plans

Gig Guard follows a subscription model where users can choose their level of protection.

### Basic Plan — ₹34/week

* Covers rain-related disruptions
* Maximum payout: ₹600/week
* Limited zone coverage

---

### Standard Plan — ₹58/week

* Covers rain, AQI, and curfew disruptions
* Maximum payout: ₹1,200/week
* Wider zone coverage

---

### Premium Plan — ₹89/week

* Covers all disruption types
* Maximum payout: ₹2,000/week
* Priority payout processing

---

### Plan Integration

* Plan is selected during or after registration
* Stored in user profile
* Influences payout eligibility and limits
* Higher plans provide broader coverage and faster processing

---

## Frontend Experience

The frontend is built using React and focuses on clarity and minimal interaction.

### Authentication

Users can log in using:

* Zomato
* Swiggy
* Google (for other platforms)

Accounts are created automatically after login.

---

### Dashboard

Displays:

* Current risk score
* Environmental data
* Model outputs
* System status

Updates run periodically to reflect real-time conditions.

---

### Intelligence Stack View

Shows how the system processes data through:
INDRA → KAVACH → DHAN → VAANI

Helps users understand how decisions are made.

---

### Fraud Detection Interface

Includes a map-based validation system:

* Verifies user location within zone
* Tracks movement
* Confirms weather conditions
* Prevents duplicate claims

---

### VAANI Assistant

VAANI provides conversational interaction with the system.

Users can:

* Ask if it is safe to work
* Understand risk levels
* Get payout explanations
* Receive recommendations

Example:

User:
"Is tomorrow safe to work?"

VAANI:
"Risk is moderate. Morning hours are safe. Rain expected later."

---

### Claims and Vault

* View claim history
* Track payouts
* Monitor approval status

---

### Plan Selection UI

Users can:

* Compare plans
* Switch plans
* View active subscription

---

## API Example

### Register Driver

```text
POST /api/register
```

Request:

```json
{
  "phone": "9876543211"
}
```

Behavior:

* Searches driver in partner dataset
* Saves to database
* Returns driver profile

---

## Advantages

* Fully automated system with no manual claims
* Backend-driven design reduces UI dependency
* Data-driven decision making using ML models
* Real-time awareness using external APIs
* Fraud detection ensures system reliability
* WhatsApp integration improves accessibility
* Scalable architecture for large user base

---

## Tech Stack

Frontend:

* React

Backend:

* Node.js
* Express.js

Database:

* MongoDB (Mongoose)

Machine Learning:

* LightGBM
* Random Forest
* Isolation Forest

APIs:

* Weather API
* AQI API
* Maps API
* WhatsApp API

---

## Disclaimer

This project uses a simulated partner API for demonstration purposes.
No real data from any delivery platform is accessed.

---

## Vision

Gig Guard aims to provide a reliable and automated financial safety system for gig workers, reducing uncertainty and improving stability during unpredictable conditions.
