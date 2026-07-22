export type SpanishMarket = {
  country: string;
  label: string;
  path: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  focus: string;
  buyerProfile: string;
  platforms: readonly string[];
  opportunities: readonly string[];
  priorities: readonly string[];
  keywords: readonly string[];
};

export const spanishMarkets = [
  {
    country: "Mexico",
    label: "Mexico",
    path: "mexico",
    headline: "Sourcing en Yiwu para vendedores online en Mexico",
    metaTitle: "Agente de compras en China para Mexico",
    metaDescription:
      "Busca proveedores en Yiwu, coordina muestras, control de calidad, packaging y consolidacion para vender online en Mexico.",
    focus:
      "Mercado Libre, Shopify, Amazon y tiendas sociales que necesitan comparar proveedores, consolidar compras y preparar inventario desde China.",
    buyerProfile:
      "Vendedores con un producto o categoria definida que quieren probar pocos SKUs antes de comprometerse con una compra mayor.",
    platforms: ["Mercado Libre", "Shopify", "Amazon", "TikTok Shop"],
    opportunities: ["Productos ligeros para marketplace", "Reposicion frecuente", "Pruebas de 3 a 10 SKUs"],
    priorities: [
      "Comparar MOQ, precio, plazo y empaque entre proveedores.",
      "Agrupar pedidos de distintas tiendas o fabricas en Yiwu.",
      "Preparar etiquetas y packaging en espanol cuando el proyecto lo requiera."
    ],
    keywords: ["comprar en Yiwu desde Mexico", "proveedores chinos para Mercado Libre", "agente de compras en China"]
  },
  {
    country: "Spain",
    label: "Espana",
    path: "espana",
    headline: "Sourcing y fulfillment desde China para ecommerce en Espana",
    metaTitle: "Sourcing y fulfillment desde China para Espana",
    metaDescription:
      "Proveedores en Yiwu, muestras, control de calidad y packaging para tiendas Shopify, TikTok Shop, Amazon y marcas DTC en Espana.",
    focus:
      "Tiendas Shopify, TikTok Shop, Amazon y marcas DTC que buscan productos diferenciados, packaging y control de calidad antes del envio.",
    buyerProfile:
      "Marcas con requisitos claros de producto y presentacion que necesitan documentar la compra antes de mover inventario a Espana.",
    platforms: ["Shopify", "TikTok Shop", "Amazon", "Tiendas DTC"],
    opportunities: ["TikTok Shop y social commerce", "Productos con marca propia", "Reposicion hacia stock local"],
    priorities: [
      "Validar muestras, materiales, medidas y acabado antes del lote.",
      "Coordinar inserts, etiquetas, bundles y packaging de marca.",
      "Separar las responsabilidades de producto, importacion y cumplimiento aplicable."
    ],
    keywords: ["proveedores en China para Espana", "fulfillment desde China", "agente de compras en Yiwu"]
  },
  {
    country: "Colombia",
    label: "Colombia",
    path: "colombia",
    headline: "Proveedores de China para vendedores online en Colombia",
    metaTitle: "Proveedores de China para ecommerce en Colombia",
    metaDescription:
      "Compara proveedores, valida muestras y consolida pedidos en Yiwu para tu tienda online o marketplace en Colombia.",
    focus:
      "Emprendedores ecommerce que necesitan comparar proveedores, validar muestras y agrupar pedidos antes de importar.",
    buyerProfile:
      "Equipos que ya conocen el producto que quieren vender y buscan una primera compra controlada con costos separados.",
    platforms: ["Mercado Libre", "Shopify", "Instagram", "Otros marketplaces"],
    opportunities: ["Compras por lote pequeno", "Validacion de calidad", "Consolidacion multi-proveedor"],
    priorities: [
      "Confirmar especificaciones con una muestra antes de comprar el lote.",
      "Consolidar productos de varios proveedores en un solo flujo operativo.",
      "Separar producto, packaging, manipulacion y transporte en la estimacion."
    ],
    keywords: ["importar desde China a Colombia", "proveedores chinos para ecommerce", "compras en Yiwu Colombia"]
  },
  {
    country: "Chile",
    label: "Chile",
    path: "chile",
    headline: "Compras en Yiwu para tiendas online en Chile",
    metaTitle: "Sourcing en China para tiendas online en Chile",
    metaDescription:
      "Encuentra proveedores en Yiwu y coordina muestras, control de calidad, packaging y preparacion de envios para Chile.",
    focus:
      "Vendedores que priorizan calidad documentada, costos claros y una preparacion de envio adecuada al producto y volumen.",
    buyerProfile:
      "Tiendas que prefieren seleccionar productos con margen suficiente y reducir incidencias mediante especificaciones y evidencia de QC.",
    platforms: ["Mercado Libre", "Shopify", "Tiendas DTC", "Marketplaces"],
    opportunities: ["Accesorios y hogar", "Control de empaque", "Plan de reposicion"],
    priorities: [
      "Definir medidas, materiales, funciones y tolerancias relevantes.",
      "Revisar la proteccion del producto y el estado del empaque.",
      "Comparar rutas de envio solo despues de conocer peso y volumen reales."
    ],
    keywords: ["comprar productos de China para vender en Chile", "sourcing China Chile", "control de calidad en China"]
  },
  {
    country: "Peru",
    label: "Peru",
    path: "peru",
    headline: "Sourcing desde China para ecommerce en Peru",
    metaTitle: "Agente de compras y sourcing China Peru",
    metaDescription:
      "Reduce el riesgo de comprar en China con busqueda de proveedores, muestras, QC y consolidacion desde Yiwu para Peru.",
    focus:
      "Tiendas online que quieren reducir riesgo al comprar en China y trabajar con una operacion coordinada en Yiwu.",
    buyerProfile:
      "Vendedores de social commerce y ecommerce con referencias de producto, cantidad aproximada y un precio objetivo realista.",
    platforms: ["Mercado Libre", "Shopify", "Venta social", "Marketplaces"],
    opportunities: ["Productos para venta social", "Cotizacion comparada", "Envios consolidados"],
    priorities: [
      "Empezar con una seleccion pequena y especificaciones verificables.",
      "Comparar proveedores sin mezclar costo de producto y costo logistico.",
      "Revisar cantidad, variantes y packaging antes de consolidar."
    ],
    keywords: ["importar de China a Peru", "proveedores chinos para Peru", "agente de compras China Peru"]
  },
  {
    country: "Argentina",
    label: "Argentina",
    path: "argentina",
    headline: "Proveedores y control de calidad para ecommerce en Argentina",
    metaTitle: "Proveedores chinos para vendedores en Argentina",
    metaDescription:
      "Selecciona proveedores, valida muestras y prepara pedidos desde Yiwu para tiendas online y marketplaces en Argentina.",
    focus:
      "Negocios que necesitan seleccionar SKUs con cuidado, controlar muestras y preparar documentacion operativa antes de escalar.",
    buyerProfile:
      "Vendedores que quieren decidir la compra con informacion actualizada de proveedor, producto, empaque y alternativa logistica.",
    platforms: ["Mercado Libre", "Tiendanube", "Shopify", "Tiendas online"],
    opportunities: ["Seleccion conservadora de SKUs", "Muestras antes de lote", "Transparencia de costos"],
    priorities: [
      "Priorizar pocos SKUs con una especificacion y margen definidos.",
      "Actualizar cotizacion y condiciones antes de confirmar cada compra.",
      "Mantener alternativas de proveedor y revisar la ruta antes del despacho."
    ],
    keywords: ["proveedores chinos para Argentina", "comprar en Yiwu desde Argentina", "sourcing China ecommerce"]
  }
] as const satisfies readonly SpanishMarket[];

export function getSpanishMarket(path: string) {
  return spanishMarkets.find((market) => market.path === path);
}

export const spanishServices = [
  "Busqueda de proveedores en Yiwu y China",
  "Comparacion de MOQ, precio, plazo y riesgos",
  "Coordinacion de muestras",
  "Control de calidad con fotos y video",
  "Packaging, etiquetas e inserts para marca",
  "Consolidacion de pedidos de varios proveedores",
  "Preparacion para fulfillment desde China o stock local"
] as const;
