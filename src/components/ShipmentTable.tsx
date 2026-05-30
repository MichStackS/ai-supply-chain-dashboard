import styles from "@/app/page.module.css";
import type { Shipment } from "@/data/dashboard";

type ShipmentTableProps = {
  shipments: Shipment[];
};

export function ShipmentTable({ shipments }: ShipmentTableProps) {
  return (
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
  );
}
