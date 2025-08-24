
---

# **ChainESP**

*Automated Email Receiving Chain & ESP Detection System*

## **Overview**

ChainESP analyzes incoming emails to extract:

* **Receiving Chain** – sequence of servers email passed through.
* **ESP Type** – Email Service Provider (Gmail, Outlook, Yahoo, etc.).

It features a **responsive UI** with creative visualizations and a **structured backend** for processing and storing email data.

---

## **Features**

**Frontend (React/Next.js)**

* Responsive, mobile-friendly UI
* Dashboard for email details
* Visualize receiving chain (timeline/table)
* Display ESP type clearly

**Backend (Node.js + NestJS)**

* API to process & store emails
* Extract headers for receiving chain
* Detect ESP type
* Follows clean architecture & best practices

**Database (MongoDB)**

* Store raw and processed email logs
* Save metadata like ESP type and timestamps

---

## **Tech Stack**

React.js / Next.js | Node.js + NestJS | MongoDB | Chart.js / D3.js

---

## **How It Works**

1. User sends email → backend receives it
2. Parse headers → extract receiving chain
3. Detect ESP type from domain/headers
4. Store data in MongoDB
5. Frontend fetches data → visualize chain & ESP

---


 
