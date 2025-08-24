---

# **ChainESP**

*Automated Email Receiving Chain & ESP Detection System*

## **📌 Overview**

ChainESP is a full-stack application designed to analyze emails sent to the system and extract critical information such as:

* **Receiving Chain**: The sequence of mail servers the email passed through before reaching the inbox.
* **ESP Type**: The Email Service Provider (e.g., Gmail, Outlook, Yahoo).

The system provides a **responsive, professional UI** with creative visualizations and a **robust backend** for accurate analysis and storage.
---

## **🛠 Tech Stack**

* **Frontend:** React.js / Next.js, Tailwind CSS (or custom CSS)
* **Backend:** Node.js, NestJS
* **Database:** MongoDB
* **Visualization:** Chart.js / D3.js / Custom Components
* **Deployment:** Vercel (Frontend), Render / AWS / Heroku (Backend)

```

---

## **⚙️ How It Works**

1. **User sends an email** to a designated email address.
2. The backend **receives the email** and extracts headers.
3. **Header Parsing**: Identifies all `Received:` headers to form the **receiving chain**.
4. **ESP Detection**: Based on the domain (e.g., `gmail.com`) or header info.
5. **Data Storage**: Saves raw headers and processed info into MongoDB.
6. **UI Display**: Frontend fetches data and visualizes:

   * **Chain View**: Shows the mail flow through servers.
   * **ESP Info**: Displays provider name and logo.
---


---


 
