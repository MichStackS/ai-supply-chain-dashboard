import { AiRecommendation } from "@/components/AiRecommendation";
import { AuditLog } from "@/components/AuditLog";
import { DashboardHeader } from "@/components/DashboardHeader";
import { IssueQueue } from "@/components/IssueQueue";
import { MetricGrid } from "@/components/MetricGrid";
import { ShipmentTable } from "@/components/ShipmentTable";
import {
  auditEvents,
  issues,
  metrics,
  recommendation,
  shipments,
} from "@/data/dashboard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.shell}>
      <DashboardHeader />
      <MetricGrid metrics={metrics} />

      <section className={styles.dashboardGrid}>
        <IssueQueue issues={issues} />
        <AiRecommendation recommendation={recommendation} />
      </section>

      <section className={styles.bottomGrid}>
        <ShipmentTable shipments={shipments} />
        <AuditLog events={auditEvents} />
      </section>
    </main>
  );
}
