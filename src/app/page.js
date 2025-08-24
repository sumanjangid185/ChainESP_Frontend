'use client';

import { useState } from 'react';
import EmailCard from '../componants/EmailCard';
import './globals.css';

export default function Page() {
  const [testEmail] = useState('test@example.com');
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState('');

  // Some random ESP providers
  const espProviders = [
    { name: 'Gmail', domain: 'mail.gmail.com' },
    { name: 'Outlook', domain: 'mail.outlook.com' },
    { name: 'Zoho', domain: 'smtp.zoho.com' },
    { name: 'Amazon SES', domain: 'ses-out.amazon.com' },
    { name: 'Yahoo', domain: 'mail.yahoo.com' }
  ];

  const randomEmailData = (subjectText) => {
    const randomESP = espProviders[Math.floor(Math.random() * espProviders.length)];
    const randomId = Math.floor(Math.random() * 100000);

    return {
      id: randomId,
      subject: subjectText,
      from: `${subjectText.split('@')[0]}@${randomESP.name.toLowerCase()}.com`,
      receivedAt: new Date().toLocaleString(),
      receivingChain: [
        randomESP.domain,
        'mx.example.com',
        'yourmailserver.com'
      ],
      espType: randomESP.name
    };
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onProcess = async () => {
    setError('');
    setEmails([]);

    if (!subject.trim()) {
      setError('❌ Please enter an email address.');
      return;
    }

    if (!isValidEmail(subject)) {
      setError('❌ Invalid email format. Please enter a valid email (e.g. user@example.com).');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const dummyEmail = randomEmailData(subject);
      setEmails([dummyEmail]);
      setLoading(false);
    }, 800); // Simulated API delay
  };

  return (
    <div className="container">
      <div className="h1">📬 Processed Email Results</div>
      <div className="subtle">
        Send a test email to: <b>{testEmail}</b>
      </div>

      <div className="controls">
        <input
          className="input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter a valid email"
        />
        <button className="button" onClick={onProcess} disabled={loading}>
          {loading ? 'Processing…' : 'Process Inbox Now'}
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      <div className="hr" />

      {emails?.length ? (
        <div className="grid">
          {emails.map((em) => (
            <EmailCard key={em.id} email={em} />
          ))}
        </div>
      ) : (
        !error && <div className="info">No emails found for the given subject.</div>
      )}
    </div>
  );
}
