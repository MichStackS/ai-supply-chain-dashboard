"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import type { Recommendation } from "@/data/dashboard";

type Decision = "pending" | "approved" | "rejected";

type AiRecommendationProps = {
  recommendation: Recommendation;
};

export function AiRecommendation({ recommendation }: AiRecommendationProps) {
  const [decision, setDecision] = useState<Decision>("pending");

  return (
    <aside className={styles.aiPanel}>
      <div>
        <p className={styles.sectionLabel}>AI recommendation</p>
        <h2>{recommendation.title}</h2>
        <p>{recommendation.detail}</p>
        <p className={styles.impact}>{recommendation.impact}</p>
      </div>

      <div>
        <div className={styles.decisionStatus} data-decision={decision}>
          {decision === "pending"
            ? "Awaiting human review"
            : `Recommendation ${decision}`}
        </div>
        <div className={styles.aiActions}>
          <button type="button" onClick={() => setDecision("approved")}>
            Approve
          </button>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => setDecision("rejected")}
          >
            Reject
          </button>
        </div>
      </div>
    </aside>
  );
}
