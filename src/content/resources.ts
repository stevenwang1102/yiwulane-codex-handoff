export type Resource = {
  slug: string;
  title: string;
  description: string;
  sections: string[];
};

export const resources: Resource[] = [
  {
    slug: "how-to-source-products-from-yiwu",
    title: "How to source products from Yiwu for e-commerce",
    description: "A practical outline for turning product references into supplier comparisons, samples, and a controlled pilot.",
    sections: [
      "Define the product and acceptable alternatives",
      "Compare suppliers on MOQ, lead time, packaging, and communication",
      "Confirm samples before scaling",
      "Build QC expectations before money moves",
      "Plan fulfillment route before production"
    ]
  },
  {
    slug: "1688-vs-alibaba-for-ecommerce-sellers",
    title: "1688 vs Alibaba for e-commerce sellers",
    description: "A cautious comparison of sourcing channels and the operational work needed after a supplier is found.",
    sections: [
      "What each marketplace is usually used for",
      "Why listing price is not the full landed cost",
      "Communication, sampling, and payment considerations",
      "When a local sourcing team can reduce friction",
      "Questions to ask before committing"
    ]
  },
  {
    slug: "china-fulfillment-cost-guide",
    title: "China fulfillment cost guide for e-commerce brands",
    description: "An editorial draft explaining the cost categories sellers should request before choosing a fulfillment route.",
    sections: [
      "Product cost and packaging cost",
      "Receiving, QC, storage, pick, and pack",
      "Freight and delivery service level",
      "Returns, exceptions, and rework",
      "Why route-specific estimates matter"
    ]
  },
  {
    slug: "china-vs-local-warehouse",
    title: "China warehouse vs local warehouse",
    description: "A planning outline for deciding when to test from China and when to replenish locally.",
    sections: [
      "New products and long-tail inventory",
      "Proven products and customer expectations",
      "Platform requirements and seller responsibilities",
      "Inventory risk and reorder timing",
      "Building a hybrid plan"
    ]
  },
  {
    slug: "how-to-calculate-landed-cost",
    title: "How to calculate landed cost before scaling a SKU",
    description: "A draft framework for separating product, packaging, handling, freight, and service assumptions.",
    sections: [
      "Start with product and packaging assumptions",
      "Add handling and inspection scope",
      "Separate freight and destination costs",
      "Include rework and exception risk",
      "Review the model after real order data"
    ]
  }
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
