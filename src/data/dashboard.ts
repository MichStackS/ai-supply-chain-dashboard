export type Metric = {
  label: string;
  value: string;
  trend: string;
};

export type SupplyIssue = {
  id: string;
  title: string;
  owner: string;
  risk: "High" | "Medium" | "Low";
  eta: string;
};

export type Shipment = {
  lane: string;
  status: "Delayed" | "On track" | "Review";
  load: string;
  confidence: string;
};

export type AuditEvent = {
  id: string;
  event: string;
  actor: "AI" | "Human" | "System";
  time: string;
};

export type Recommendation = {
  id: string;
  title: string;
  detail: string;
  impact: string;
};

export const metrics: Metric[] = [
  { label: "Open issues", value: "18", trend: "-12% vs yesterday" },
  { label: "At-risk shipments", value: "7", trend: "3 critical routes" },
  { label: "Inventory alerts", value: "24", trend: "8 need approval" },
  { label: "AI suggestions", value: "31", trend: "91% accepted" },
];

export const issues: SupplyIssue[] = [
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

export const shipments: Shipment[] = [
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

export const auditEvents: AuditEvent[] = [
  {
    id: "audit-1",
    actor: "AI",
    event: "Flagged 3 temperature-sensitive shipments for dispatcher review.",
    time: "09:42",
  },
  {
    id: "audit-2",
    actor: "Human",
    event: "Approved reorder recommendation for coffee category.",
    time: "09:58",
  },
  {
    id: "audit-3",
    actor: "System",
    event: "Rejected supplier escalation pending missing invoice data.",
    time: "10:11",
  },
];

export const recommendation: Recommendation = {
  id: "rec-berlin-reroute",
  title: "Re-route Berlin cold-chain load via Prague hub.",
  detail:
    "Estimated recovery: 2h 15m. Requires dispatcher approval and carrier confirmation before execution.",
  impact: "Protects 68% of temperature-sensitive load value on the route.",
};
