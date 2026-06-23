import type { FAQ } from "./faqs";

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  outcome: string;
  for: string[];
  deliverables: string[];
  process: string[];
  clientInputs: string[];
  boundaries: string[];
  relatedRoutes: { label: string; href: string }[];
  faqs: FAQ[];
};

const commonFaqs: FAQ[] = [
  {
    question: "Can this be part of a 3-SKU Pilot?",
    answer: "Yes. The pilot is designed to test sourcing, quality, packaging, and fulfillment assumptions before a larger commitment."
  },
  {
    question: "Do you promise a fixed price or timeline?",
    answer: "No. Product cost, production timing, freight, and handling depend on supplier terms, product type, destination, and service level."
  }
];

export const services: ServicePage[] = [
  {
    slug: "product-sourcing",
    title: "Product sourcing in Yiwu, China",
    metaTitle: "Product Sourcing in Yiwu, China | YIWULANE",
    description: "Compare suppliers, coordinate samples, clarify MOQ and lead times, and build a practical sourcing plan for your e-commerce products.",
    outcome: "A documented sourcing plan with supplier options, assumptions, risks, sample path, and fulfillment implications.",
    for: ["Shopify and DTC sellers testing new SKUs", "TikTok Shop sellers preparing sample and small-batch demand", "Amazon sellers planning inspected replenishment"],
    deliverables: ["supplier comparison", "MOQ and lead-time notes", "sample coordination path", "initial cost structure", "risk and boundary notes"],
    process: ["Review product references and target market", "Search and compare practical supplier options", "Clarify MOQ, packaging, timing, and assumptions", "Coordinate samples or pre-production checks when approved", "Recommend a pilot route"],
    clientInputs: ["product links or clear photos", "target market and selling platform", "expected volume range", "quality and packaging requirements", "current supplier notes when available"],
    boundaries: ["No counterfeit, infringing, prohibited, or high-risk products", "No indefinite free sourcing work", "No guarantee that every product can meet target cost or MOQ"],
    relatedRoutes: [
      { label: "Quality control", href: "/services/quality-control" },
      { label: "Branding & packaging", href: "/services/branding-packaging" },
      { label: "Start a 3-SKU Pilot", href: "/pilot" }
    ],
    faqs: commonFaqs
  },
  {
    slug: "quality-control",
    title: "E-commerce quality control in China",
    metaTitle: "E-commerce Quality Control in China | YIWULANE",
    description: "Add incoming product, packaging, quantity, label, and agreed functional checks before inventory enters fulfillment.",
    outcome: "A receiving and inspection workflow with photo or video evidence, documented findings, and supplier follow-up when issues appear.",
    for: ["Sellers with inconsistent supplier quality", "Brands adding private-label details", "Teams that need evidence before fulfillment"],
    deliverables: ["receiving checks", "quantity and SKU verification", "packaging condition review", "agreed functional checks", "photo or video evidence"],
    process: ["Define inspection scope", "Receive inventory or samples", "Check agreed specifications", "Isolate visible issues", "Document findings and next actions"],
    clientInputs: ["product specification", "approved sample or reference", "packaging and label requirements", "acceptable issue boundaries", "supplier contact path"],
    boundaries: ["Inspection scope and sampling level are agreed before work begins", "Testing and certification may require a qualified third party", "QC reduces risk but does not remove every possible defect"],
    relatedRoutes: [
      { label: "China fulfillment", href: "/services/china-fulfillment" },
      { label: "Hybrid fulfillment", href: "/services/hybrid-fulfillment" },
      { label: "How it works", href: "/how-it-works" }
    ],
    faqs: commonFaqs
  },
  {
    slug: "branding-packaging",
    title: "Low-MOQ branding and packaging",
    metaTitle: "Low-MOQ Branding & Packaging in China | YIWULANE",
    description: "Add labels, inserts, bundles, and practical packaging options to turn generic products into a more consistent brand experience.",
    outcome: "A packaging path that matches supplier capability, MOQ, product protection, and your brand requirements.",
    for: ["Stores moving beyond generic dropshipping", "Brands testing inserts, bundles, and labels", "Sellers preparing FBA or local warehouse cartons"],
    deliverables: ["label and insert options", "bundle and kit planning", "protective packaging notes", "carton and barcode checks", "supplier capability notes"],
    process: ["Review brand and product needs", "Compare practical packaging options", "Confirm artwork and print method requirements", "Coordinate supplier or packaging partner", "Check packaging before fulfillment"],
    clientInputs: ["logo and artwork files", "packaging goals", "barcode or label requirements", "reference product photos", "target order quantity"],
    boundaries: ["Packaging MOQ varies by material and print method", "Claims, compliance marks, and regulated labels require owner approval", "YIWULANE does not approve legal labeling claims"],
    relatedRoutes: [
      { label: "Product sourcing", href: "/services/product-sourcing" },
      { label: "Amazon FBA", href: "/solutions/amazon-fba" },
      { label: "Start a 3-SKU Pilot", href: "/pilot" }
    ],
    faqs: commonFaqs
  },
  {
    slug: "china-fulfillment",
    title: "China fulfillment for growing e-commerce sellers",
    metaTitle: "China Fulfillment for Growing E-commerce Sellers | YIWULANE",
    description: "Receive, inspect, store, pick, pack, and dispatch e-commerce products through a controlled Yiwu fulfillment workflow.",
    outcome: "A China-based fulfillment workflow for testing, long-tail SKUs, and controlled dispatch from inspected inventory.",
    for: ["Sellers testing SKUs before local inventory", "Brands with long-tail or seasonal products", "Teams needing QC before dispatch"],
    deliverables: ["receiving workflow", "SKU mapping", "storage and picking process", "packaging and dispatch notes", "tracking return workflow"],
    process: ["Map SKUs and product requirements", "Receive and inspect inventory", "Store and prepare fulfillment rules", "Dispatch approved orders", "Return tracking data through the agreed method"],
    clientInputs: ["SKU list", "order source or export method", "packaging rules", "destination markets", "exception handling preferences"],
    boundaries: ["Route availability depends on product type, destination, platform, customs, and carrier conditions", "No unsupported delivery-time promises", "Returns and special handling require an approved workflow"],
    relatedRoutes: [
      { label: "Hybrid fulfillment", href: "/services/hybrid-fulfillment" },
      { label: "Shopify & DTC", href: "/solutions/shopify-dtc" },
      { label: "Contact", href: "/contact" }
    ],
    faqs: commonFaqs
  },
  {
    slug: "hybrid-fulfillment",
    title: "China + local warehouse hybrid fulfillment",
    metaTitle: "China + Local Warehouse Hybrid Fulfillment | YIWULANE",
    description: "Test new products from China and move proven inventory closer to customers with a practical hybrid fulfillment plan.",
    outcome: "A route plan that separates testing inventory, long-tail SKUs, and proven replenishment stock.",
    for: ["Growing brands balancing speed and inventory risk", "TikTok Shop sellers planning demand spikes", "Amazon and DTC sellers moving winners to local inventory"],
    deliverables: ["China-direct testing route", "local-stock threshold thinking", "bulk replenishment plan", "inventory split recommendations", "fulfillment risk notes"],
    process: ["Review SKU demand and platform requirements", "Segment products by test, long-tail, and proven status", "Estimate route assumptions", "Plan local replenishment trigger points", "Review after real order data"],
    clientInputs: ["order volume range", "target markets", "platform rules", "current delivery expectations", "storage and 3PL options when known"],
    boundaries: ["The recommended route depends on product type, destination, platform requirements, order volume, and customs conditions", "Local warehouse selection remains subject to seller approval", "No blanket promise that China-direct fits every platform"],
    relatedRoutes: [
      { label: "TikTok Shop", href: "/solutions/tiktok-shop" },
      { label: "Amazon FBA", href: "/solutions/amazon-fba" },
      { label: "Start a 3-SKU Pilot", href: "/pilot" }
    ],
    faqs: commonFaqs
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
