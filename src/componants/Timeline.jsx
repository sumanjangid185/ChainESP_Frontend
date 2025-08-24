'use client';
import styles from './Timeline.module.css';

export default function Timeline({ steps = [] }) {
  if (!steps.length) return null;
  return (
    <div className={styles.wrap}>
      {steps.map((s, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.bullet} />
          <div className={styles.content}>
            <div className={styles.title}>Hop {i + 1}</div>
            <div className={styles.text}>{s}</div>
          </div>
          {i < steps.length - 1 && <div className={styles.line} />}
        </div>
      ))}
    </div>
  );
}
