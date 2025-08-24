'use client';
import styles from './EmailCard.module.css';

export default function EmailCard({ email }) {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <span className={styles.label}>From:</span>
        <a href={`mailto:${email.from}`} className={styles.from}>
          {email.from || 'Unknown'}
        </a>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>ESP:</span>
        <span className={styles.esp}>{email.espType || 'Unknown ESP'}</span>
      </div>

      <div className={styles.chain}>
        <div className={styles.chainTitle}>Receiving Chain</div>
        <ul className={styles.chainList}>
          {(email.receivingChain || []).map((hop, i) => (
            <li key={i}>{hop}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
