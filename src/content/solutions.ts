import type { FAQ } from "./faqs";

export type SolutionPage = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  model: string;
  handles: string[];
  sellerOwns: string[];
  decision: string;
  workflow: string[];
  faqs: FAQ[];
};

const solutionFaqs: FAQ[] = [
  {
    question: "Can you connect directly to my store?",
    answer: "The operating method depends on the store, volume, and approved systems. Early pilots may use imports or an existing order-management workflow."
  },
  {
    question: "Who remains responsible for marketplace rules?",
    answer: "The seller remains responsible for platform account settings, listing compliance, tax, customs, and final customer promises."
  }
];

export const solutions: SolutionPage[] = [
  {
    slug: "shopify-dtc",
    title: "Shopify & DTC supply-chain support",
    description: "Source, brand, test from China, and move winners to local inventory.",
    problem: "DTC brands need more control than generic dropshipping without committing too early to large inventory.",
    model: "Use Yiwu sourcing and China fulfillment to test SKUs, then move proven products into local stock when demand justifies it.",
    handles: ["supplier comparison", "incoming QC", "branded inserts and packaging", "China-direct fulfillment", "local inventory planning"],
    sellerOwns: ["storefront and customer promise", "ad creative and demand generation", "refund and customer policy", "local compliance review"],
    decision: "China-direct fits tests and long-tail SKUs. Local stock fits proven products where volume and customer expectations justify replenishment.",
    workflow: ["Submit product references", "Approve sourcing and packaging path", "Receive inspected inventory in Yiwu", "Fulfill test demand", "Replenish proven products locally"],
    faqs: solutionFaqs
  },
  {
    slug: "tiktok-shop",
    title: "TikTok Shop supply-chain planning",
    description: "Prepare samples, small batches, and local-stock plans before demand accelerates.",
    problem: "Demand can move quickly, but sellers still need product checks, packaging discipline, and realistic route planning.",
    model: "Coordinate sample and small-batch preparation in China while planning local-stock scaling for products with repeatable demand.",
    handles: ["sample coordination", "small-batch preparation", "QC evidence", "packaging readiness", "demand-spike planning"],
    sellerOwns: ["platform eligibility and policy review", "content and sales operations", "customer delivery promises", "local marketplace compliance"],
    decision: "China can support testing and preparation. Local stock may be required when platform expectations, demand, or delivery needs make it the practical route.",
    workflow: ["Review product and platform requirements", "Prepare samples or small batches", "Inspect and package approved stock", "Test demand carefully", "Plan local replenishment for proven products"],
    faqs: solutionFaqs
  },
  {
    slug: "amazon-fba",
    title: "Amazon FBA sourcing and preparation",
    description: "Source, inspect, label, bundle, and prepare products for scalable FBA replenishment.",
    problem: "Amazon sellers need supplier coordination and preparation discipline before bulk inventory moves to FBA or a local 3PL.",
    model: "Use YIWULANE for sourcing, inspection, label and carton preparation, then ship approved bulk inventory through the agreed route.",
    handles: ["supplier coordination", "inspection evidence", "label and bundle checks", "carton preparation", "bulk shipment planning"],
    sellerOwns: ["Amazon account and listing compliance", "FBA shipment creation", "required marketplace labels and documentation", "tax and importer responsibilities"],
    decision: "Amazon is usually a bulk replenishment model, not seller-to-consumer China dropshipping. China work should reduce sourcing and preparation risk before stock moves.",
    workflow: ["Confirm product and FBA requirements", "Source and sample", "Inspect incoming stock", "Prepare labels, bundles, and cartons", "Plan bulk shipment to FBA or local 3PL"],
    faqs: solutionFaqs
  },
  {
    slug: "growing-brands",
    title: "Supply-chain support for growing brands",
    description: "Create one accountable route across sourcing, QC, packaging, fulfillment, and scaling.",
    problem: "Growing brands often coordinate too many separate suppliers, agents, inspectors, and warehouses.",
    model: "Put sourcing, incoming QC, packaging, China fulfillment, and local inventory planning into one operating workflow.",
    handles: ["product development support", "supplier follow-up", "evidence-led QC", "brand-ready packaging", "inventory route planning"],
    sellerOwns: ["brand strategy", "sales channels", "forecast approval", "legal and product compliance", "final commercial decisions"],
    decision: "Use China for flexibility and testing. Move stable demand closer to customers when volume and economics support it.",
    workflow: ["Audit current SKU needs", "Build a practical pilot scope", "Document sourcing and fulfillment assumptions", "Operate the test", "Review real data before scaling"],
    faqs: solutionFaqs
  }
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
