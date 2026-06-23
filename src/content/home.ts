export const modelSteps = [
  {
    title: "SOURCE",
    body: "Find products, compare suppliers, and negotiate the practical details."
  },
  {
    title: "CHECK",
    body: "Inspect incoming products, packaging, quantity, and agreed specifications."
  },
  {
    title: "BRAND",
    body: "Add labels, inserts, bundles, and packaging that make the product yours."
  },
  {
    title: "FULFILL",
    body: "Store, pick, pack, dispatch, and return tracking data."
  },
  {
    title: "SCALE",
    body: "Move proven products closer to customers while China handles testing and long-tail SKUs."
  }
];

export const workflowSteps = [
  ["Submit products", "Share links, images, target market, and current challenges."],
  ["Receive a sourcing plan", "Review supplier options, assumptions, MOQ, packaging, and fulfillment routes."],
  ["Approve samples", "Confirm the product through samples, photos, video, or agreed inspection."],
  ["Stock at YIWULANE", "Receive, inspect, label, and map products to SKUs."],
  ["Connect and fulfill", "Import or synchronize orders and return tracking information."],
  ["Scale winning products", "Replenish proven inventory to a local warehouse when the economics justify it."]
] as const;

export const qcChecks = [
  "quantity and SKU verification",
  "appearance and workmanship",
  "measurements and weight",
  "basic functional checks",
  "barcode and label checks",
  "packaging condition",
  "bundle completeness",
  "photo or video evidence",
  "issue isolation and supplier follow-up"
];
