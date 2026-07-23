export const audienceProfiles = [
  {
    eyebrow: "Primary fit",
    title: "Growth-stage e-commerce sellers",
    body: "For operators with a live store, confirmed products, and a need to make sourcing, QC, packaging, and replenishment more reliable."
  },
  {
    eyebrow: "Primary fit",
    title: "DTC and private-label brands",
    body: "For brands that need product development, consistent specifications, branded packaging, and repeatable supply instead of one-off buying."
  },
  {
    eyebrow: "Selective fit",
    title: "Multi-SKU importers and wholesalers",
    body: "For buyers with recurring, multi-product demand whose sourcing and order-management needs fit the same controlled workflow."
  }
] as const;

export const bestFitSignals = [
  "You already operate a store, brand, or established sales channel.",
  "You have confirmed products or a specific product plan.",
  "You expect repeat orders, replenishment, or multi-SKU purchasing.",
  "You need sourcing, QC, packaging, consolidation, or fulfillment support.",
  "You can share a target quantity, budget range, market, and timeline."
] as const;

export const poorFitSignals = [
  "You need a one-piece consumer purchase or generic dropshipping directory.",
  "You only want a free supplier list or unlimited product research.",
  "There is no product direction, quantity, budget, or launch plan yet.",
  "The request involves counterfeit, infringing, prohibited, or high-risk products.",
  "The order depends on unapproved credit terms or commitments outside the agreed scope."
] as const;

export const modelSteps = [
  {
    title: "SOURCE",
    body: "Receive documented supplier options with assumptions, MOQ, lead times, sample paths, and sourcing risks."
  },
  {
    title: "CHECK",
    body: "Review incoming products, packaging, quantity, and agreed specifications with visible findings."
  },
  {
    title: "BRAND",
    body: "Turn approved artwork and requirements into practical labels, inserts, bundles, and packaging options."
  },
  {
    title: "FULFILL",
    body: "Receive, map, store, pick, pack, dispatch, and return tracking data through one operating workflow."
  },
  {
    title: "SCALE",
    body: "Plan repeat purchasing and move proven products closer to customers when real demand supports it."
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
