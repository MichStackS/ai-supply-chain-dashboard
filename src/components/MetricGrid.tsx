import styles from "@/app/page.module.css";
import type { Metric } from "@/data/dashboard";

type MetricGridProps = {
  metrics: Metric[];
};

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <section className={styles.metricsGrid} aria-label="Operations metrics">
      {metrics.map((metric) => (
        <article className={styles.metricCard} key={metric.label}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <p>{metric.trend}</p>
        </article>
      ))}
    </section>
  );
}
