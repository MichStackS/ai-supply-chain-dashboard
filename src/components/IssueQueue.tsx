import styles from "@/app/page.module.css";
import type { SupplyIssue } from "@/data/dashboard";

type IssueQueueProps = {
  issues: SupplyIssue[];
};

export function IssueQueue({ issues }: IssueQueueProps) {
  return (
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
  );
}
