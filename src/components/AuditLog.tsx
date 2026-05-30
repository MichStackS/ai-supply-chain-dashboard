import styles from "@/app/page.module.css";
import type { AuditEvent } from "@/data/dashboard";

type AuditLogProps = {
  events: AuditEvent[];
};

export function AuditLog({ events }: AuditLogProps) {
  return (
    <article className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <p className={styles.sectionLabel}>Audit log</p>
          <h2>Human-in-the-loop trail</h2>
        </div>
      </div>
      <ul className={styles.auditList}>
        {events.map((event) => (
          <li key={event.id}>
            <span>{event.time}</span>
            <strong>{event.actor}</strong>
            {event.event}
          </li>
        ))}
      </ul>
    </article>
  );
}
