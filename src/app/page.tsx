import styles from "./page.module.css";

const metrics = [
  { label: "Open issues", value: "18", trend: "-12% vs yesterday" },
  { label: "At-risk shipments", value: "7", trend: "3 critical routes" },
  { label: "Inventory alerts", value: "24", trend: "8 need approval" },
  { label: "AI suggestions", value: "31", trend: "91% accepted" },
];

const issues = [
  {
    id: "SC-1048",
    title: "Berlin cold-chain delay",
    owner: "Logistics",
    risk: "High",
    eta: "4h late",
  },
  {
    id: "SC-1032",
    title: "Low stock: private label coffee",
    owner: "Inventory",
    risk: "Medium",
    eta: "2 days cover",
  },
  {
    id: "SC-1017",
    title: "Supplier document mismatch",
    owner: "Procurement",
    risk: "Medium",
    eta: "Waiting review",
  },
];

const shipments = [
  {
    lane: "Sofia -> Hamburg",
    status: "Delayed",
    load: "Frozen goods",
    confidence: "82%",
  },
  {
    lane: "Plovdiv -> Prague",
    status: "On track",
    load: "Beverages",
    confidence: "96%",
  },
  {
    lane: "Varna -> Bucharest",
    status: "Review",
    load: "Electronics",
    confidence: "74%",
  },
];

const auditEvents = [
  "AI flagged 3 temperature-sensitive shipments for dispatcher review.",
  "Inventory manager approved reorder recommendation for coffee category.",
  "System rejected automated supplier escalation pending missing invoice data.",
];

export default function Home() {
  return (
    <main className={styles.shell}>
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

      <section className={styles.metricsGrid} aria-label="Operations metrics">
        {metrics.map((metric) => (
          <article className={styles.metricCard} key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.trend}</p>
          </article>
        ))}
      </section>

      <section className={styles.dashboardGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.sectionLabel}>Priority queue</p>
              <h2>Active supply chain issues</h2>
            </div>
            <span className={styles.liveBadge}>Live</span>
          </div>

          <div className={styles.issueList}>
            {issues.map((issue) => (
              <div className={styles.issueRow} key={issue.id}>
                <div>
                  <span className={styles.issueId}>{issue.id}</span>
                  <strong>{issue.title}</strong>
                  <p>{issue.owner}</p>
                </div>
                <div className={styles.issueMeta}>
                  <span data-risk={issue.risk.toLowerCase()}>{issue.risk}</span>
                  <p>{issue.eta}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className={styles.aiPanel}>
          <p className={styles.sectionLabel}>AI recommendation</p>
          <h2>Re-route Berlin cold-chain load via Prague hub.</h2>
          <p>
            Estimated recovery: 2h 15m. Requires dispatcher approval and carrier
            confirmation before execution.
          </p>
          <div className={styles.aiActions}>
            <button type="button">Approve</button>
            <button type="button" className={styles.secondaryButton}>
              Reject
            </button>
          </div>
        </aside>
      </section>

      <section className={styles.bottomGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.sectionLabel}>Shipment health</p>
              <h2>Monitored lanes</h2>
            </div>
          </div>
          <div className={styles.table}>
            {shipments.map((shipment) => (
              <div className={styles.tableRow} key={shipment.lane}>
                <span>{shipment.lane}</span>
                <span>{shipment.load}</span>
                <strong>{shipment.status}</strong>
                <span>{shipment.confidence}</span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.sectionLabel}>Audit log</p>
              <h2>Human-in-the-loop trail</h2>
            </div>
          </div>
          <ul className={styles.auditList}>
            {auditEvents.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
