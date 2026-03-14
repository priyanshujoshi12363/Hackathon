# Delivery Partner Protection API

A backend system that simulates integration with delivery platforms (like Zomato or Swiggy) to register delivery partners and provide emergency financial protection during disasters.
This project demonstrates how a partner platform could share delivery driver data with a third-party protection service.

The system verifies a driver's phone number, retrieves their profile from a simulated partner dataset, and stores it in a MongoDB database for further processing such as insurance coverage or financial assistance.

---

## Project Concept

Delivery partners often lose income during natural disasters, lockdowns, or emergencies.
This system proposes a **financial protection platform** where delivery partners can:

* Register using their phone number
* Verify their driver profile
* Automatically import their delivery partner data
* Store their work history and earnings
* Enable future support such as emergency payouts or insurance

For demonstration purposes, the delivery partner data is retrieved from a **mock partner dataset**.

---

## Features

* Express.js REST API
* MongoDB integration using Mongoose
* Driver registration using phone number
* Automatic retrieval of partner data from a simulated platform
* Nested schema support (work history, earnings, payout details)
* Production-style backend structure
* Environment configuration using dotenv

---

## Tech Stack

Backend Framework

* Node.js
* Express.js

Database

* MongoDB
* Mongoose ODM

Utilities

* dotenv
* cors

---

## Project Structure

```
backend
│
├── config
│   └── db.js
│
├── controllers
│   └── registerController.js
│
├── data
│   └── DriverData.js
│
├── models
│   └── Driver.js
│
├── routes
│   └── driverRoutes.js
│
├── server.js
└── .env
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/delivery-protection-api.git
cd delivery-protection-api
```

### 2. Install dependencies

```
npm install
```

### 3. Create environment file

Create a `.env` file in the root directory.

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/delivery_protection
```

### 4. Start the server

```
node server.js
```

or

```
npm run dev
```

---

## API Endpoint

### Register Driver

Registers a delivery partner by searching their phone number in the simulated partner dataset and saving their profile to MongoDB.

**Endpoint**

```
POST /api/register
```

**Request Body**

```
{
  "phone": "9876543211"
}
```

**Success Response**

```
{
  "success": true,
  "message": "Driver registered successfully",
  "data": {
    "driver_id": "DLP45632",
    "name": "Priya Singh",
    "phone": "9876543211",
    "city": "Delhi"
  }
}
```

---

## Driver Data Structure

Each driver contains:

* Driver ID
* Name
* Phone number
* City
* Vehicle type
* Rating
* Work history
* Earnings statistics
* Bank payout details

Example:

```
{
  "driver_id": "DLP45632",
  "name": "Priya Singh",
  "phone": "9876543211",
  "city": "Delhi",
  "vehicle_type": "Scooty",
  "rating": 4.9
}
```

---

## Database Schema

The MongoDB schema stores nested structures including:

* Work history
* Earnings information
* Payout details
* Driver profile information

All driver profiles are stored in the **drivers collection**.

---

## Future Improvements

* WhatsApp bot integration for notifications
* Disaster detection system
* Driver insurance coverage system
* Automated payout system
* Admin dashboard for monitoring drivers

---


