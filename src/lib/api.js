const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getTestInfo() {
  const r = await fetch(`${BASE}/emails/test-info`, { cache: 'no-store' });
  return r.json();
}

export async function processEmails(subject) {
  const r = await fetch(`${BASE}/emails/process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject })
  });
  return r.json();
}

export async function getEmailsBySubject(subject) {
  const r = await fetch(`${BASE}/emails?subject=${encodeURIComponent(subject)}`, { cache: 'no-store' });
  return r.json();
}
