export type FAQ = {
  question: string;
  answer: string;
};

export const globalFaqs: FAQ[] = [
  {
    question: "Do you have a minimum order quantity?",
    answer:
      "MOQ depends on the product, supplier, packaging, and production method. We focus on finding a practical testing quantity before larger commitments."
  },
  {
    question: "Can you source from a product link or photo?",
    answer:
      "Yes. Send the clearest reference available, target market, expected quantity, and required specifications."
  },
  {
    question: "Can you work with my existing supplier?",
    answer:
      "Yes. We can coordinate receiving, inspection, packaging, storage, and fulfillment with an approved supplier."
  },
  {
    question: "Do you inspect every product?",
    answer:
      "Inspection scope is agreed by project. Options can range from sampling to individual checks when the product and economics support it."
  },
  {
    question: "Can you add my logo and custom packaging?",
    answer:
      "Yes, subject to supplier capability, MOQ, materials, print method, and applicable product or labeling requirements."
  },
  {
    question: "Can you connect with my store?",
    answer:
      "The operating method depends on the store and order volume. Initial workflows may use approved integrations, imports, or an existing order-management system."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Transit time depends on destination, product type, carrier, customs, and service level. A route-specific estimate is provided before shipment."
  },
  {
    question: "Can you ship to Amazon FBA or a local warehouse?",
    answer:
      "Yes, subject to product, destination, labeling, carton, customs, and receiving requirements."
  }
];
