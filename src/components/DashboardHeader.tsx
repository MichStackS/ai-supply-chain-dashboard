import styles from "@/app/page.module.css";

export function DashboardHeader() {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>AI Operations Console</p>
        <h1>Supply chain visibility with human-approved AI actions.</h1>
        <p className={styles.heroText}>
          Track operational risk, summarize incidents, and review AI
          recommendations before they affect real supply chain workflows.
        </p>
      </div>
      <div className={styles.heroActions} aria-label="Dashboard actions">
        <button type="button">Generate summary</button>
        <button type="button" className={styles.secondaryButton}>
          Review queue
        </button>
      </div>
    </section>
  );
}
