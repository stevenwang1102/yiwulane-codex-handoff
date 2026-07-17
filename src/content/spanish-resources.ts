export type SpanishResource = {
  slug: string;
  category: string;
  title: string;
  description: string;
  keywords: string[];
  sections: string[];
};

export const spanishResourceCategories = [
  "Compra e importacion",
  "Vendedores de marketplace",
  "Riesgo y control",
  "Categorias de producto",
  "Guias por pais"
] as const;

export const spanishResources: SpanishResource[] = [
  {
    slug: "como-comprar-en-yiwu-desde-mexico",
    category: "Compra e importacion",
    title: "Como comprar en Yiwu desde Mexico para vender online",
    description: "Guia practica para vendedores mexicanos que quieren buscar productos en Yiwu, validar proveedores y preparar el primer envio.",
    keywords: ["comprar en Yiwu desde Mexico", "proveedores en China Mexico", "agente de compras Yiwu"],
    sections: ["Definir producto y precio objetivo", "Comparar proveedores y MOQ", "Validar muestras antes de pagar lote", "Revisar empaque y calidad", "Planear consolidacion y envio a Mexico"]
  },
  {
    slug: "como-encontrar-proveedores-confiables-en-china",
    category: "Compra e importacion",
    title: "Como encontrar proveedores confiables en China",
    description: "Criterios para filtrar proveedores, comparar opciones y reducir riesgos antes de comprar desde China.",
    keywords: ["proveedores confiables en China", "buscar proveedores chinos", "sourcing China"],
    sections: ["Senales basicas de proveedor confiable", "Preguntas que debes hacer antes de cotizar", "Por que el precio no basta", "Como usar muestras para validar", "Cuando conviene usar un equipo local"]
  },
  {
    slug: "agente-de-compras-en-yiwu-cuando-conviene",
    category: "Compra e importacion",
    title: "Agente de compras en Yiwu: cuando conviene usar uno",
    description: "Explicacion para vendedores online que comparan comprar solos contra trabajar con apoyo local en Yiwu.",
    keywords: ["agente de compras en Yiwu", "agente de compras China", "comprar en Yiwu"],
    sections: ["Que hace un agente de compras", "Cuando agrega valor real", "Cuando no lo necesitas", "Costos y responsabilidades", "Como medir si el servicio conviene"]
  },
  {
    slug: "como-importar-productos-pequenos-desde-china",
    category: "Compra e importacion",
    title: "Como importar productos pequenos desde China",
    description: "Puntos clave para comprar productos ligeros, probar demanda y evitar errores de inventario.",
    keywords: ["importar productos pequenos de China", "productos ligeros China", "ecommerce China"],
    sections: ["Por que empezar con productos pequenos", "Categorias faciles de probar", "Riesgos de calidad comunes", "Consolidar varios proveedores", "Escalar solo despues de validar ventas"]
  },
  {
    slug: "yiwu-vs-alibaba-para-vendedores-online",
    category: "Compra e importacion",
    title: "Yiwu vs Alibaba para vendedores online",
    description: "Comparacion practica entre buscar productos en marketplaces B2B y trabajar con una operacion local en Yiwu.",
    keywords: ["Yiwu vs Alibaba", "comprar en Yiwu", "proveedores Alibaba"],
    sections: ["Diferencias de canal", "Precio publicado vs costo real", "MOQ y flexibilidad", "Muestras y control", "Que opcion usar segun tu etapa"]
  },
  {
    slug: "como-preparar-una-cotizacion-para-china",
    category: "Compra e importacion",
    title: "Como preparar una cotizacion para comprar en China",
    description: "Checklist para enviar una solicitud clara y recibir respuestas comparables de proveedores chinos.",
    keywords: ["cotizacion China", "RFQ proveedores chinos", "comprar en China"],
    sections: ["Datos minimos del producto", "Cantidad y rango de precio", "Empaque y marca", "Plazos y destino", "Como comparar respuestas"]
  },
  {
    slug: "proveedores-para-vendedores-de-mercado-libre",
    category: "Vendedores de marketplace",
    title: "Proveedores para vendedores de Mercado Libre",
    description: "Como buscar productos en China para vender en Mercado Libre sin depender solo del precio mas bajo.",
    keywords: ["proveedores para Mercado Libre", "productos para vender en Mercado Libre", "China Mercado Libre"],
    sections: ["Elegir productos con rotacion", "Validar margen y competencia", "Controlar variaciones de calidad", "Preparar fotos, empaque y etiquetas", "Reponer sin romper stock"]
  },
  {
    slug: "productos-rentables-para-mercado-libre-mexico",
    category: "Vendedores de marketplace",
    title: "Productos rentables para vender en Mercado Libre Mexico",
    description: "Criterios para seleccionar productos ligeros, repetibles y faciles de validar en Mercado Libre Mexico.",
    keywords: ["productos rentables Mercado Libre Mexico", "productos para vender online Mexico", "proveedores China Mexico"],
    sections: ["Buscar demanda existente", "Evitar productos con alto riesgo de devolucion", "Medir tamano y peso", "Calcular margen con envio", "Probar antes de importar mas"]
  },
  {
    slug: "abastecer-tienda-shopify-desde-china",
    category: "Vendedores de marketplace",
    title: "Como abastecer una tienda Shopify desde China",
    description: "Modelo para tiendas Shopify que quieren pasar de dropshipping generico a productos controlados y marca propia.",
    keywords: ["Shopify proveedores China", "abastecer tienda Shopify", "fulfillment desde China"],
    sections: ["Definir linea de producto", "Agregar detalles de marca", "Validar proveedor y muestra", "Separar test y stock local", "Medir datos antes de escalar"]
  },
  {
    slug: "proveedores-para-tiktok-shop-espana",
    category: "Vendedores de marketplace",
    title: "Proveedores para TikTok Shop Espana",
    description: "Como preparar productos, muestras y reposicion para vendedores que operan en TikTok Shop Espana.",
    keywords: ["proveedores TikTok Shop Espana", "TikTok Shop China", "productos virales ecommerce"],
    sections: ["Velocidad no debe reemplazar control", "Preparar muestras para contenido", "Asegurar empaque consistente", "Planear stock para picos", "Revisar restricciones por categoria"]
  },
  {
    slug: "amazon-fba-sourcing-desde-china",
    category: "Vendedores de marketplace",
    title: "Amazon FBA sourcing desde China",
    description: "Puntos operativos para buscar, inspeccionar, etiquetar y preparar productos para Amazon FBA.",
    keywords: ["Amazon FBA China", "sourcing Amazon FBA", "proveedores Amazon"],
    sections: ["Elegir producto con datos", "Revisar requisitos de FBA", "Control de calidad antes de envio", "Etiquetado y preparacion", "Reabastecimiento y tiempos"]
  },
  {
    slug: "dropshipping-vs-stock-controlado",
    category: "Vendedores de marketplace",
    title: "Dropshipping vs stock controlado desde China",
    description: "Comparacion para vendedores que quieren mejorar calidad, tiempos y experiencia de cliente.",
    keywords: ["dropshipping vs stock", "stock controlado China", "fulfillment ecommerce"],
    sections: ["Ventajas del test rapido", "Problemas del proveedor generico", "Cuando pasar a stock controlado", "Como reducir riesgo de inventario", "Modelo hibrido recomendado"]
  },
  {
    slug: "evitar-estafas-al-comprar-en-china",
    category: "Riesgo y control",
    title: "Como evitar estafas al comprar en China",
    description: "Senales de alerta, controles basicos y pasos antes de enviar dinero a un proveedor desconocido.",
    keywords: ["evitar estafas China", "proveedores chinos confiables", "comprar seguro en China"],
    sections: ["Senales de alerta comunes", "Verificar datos del proveedor", "Pedir muestra y evidencia", "Evitar decisiones por urgencia", "Documentar acuerdos"]
  },
  {
    slug: "control-de-calidad-en-china-antes-del-envio",
    category: "Riesgo y control",
    title: "Control de calidad en China antes del envio",
    description: "Que revisar antes de despachar productos para evitar reclamos, devoluciones y perdida de margen.",
    keywords: ["control de calidad en China", "inspeccion China", "QC antes del envio"],
    sections: ["Definir alcance de inspeccion", "Revisar cantidad y apariencia", "Comprobar funcion y empaque", "Registrar fotos y video", "Decidir aceptar, reparar o rechazar"]
  },
  {
    slug: "consolidar-pedidos-de-varios-proveedores-chinos",
    category: "Riesgo y control",
    title: "Como consolidar pedidos de varios proveedores chinos",
    description: "Guia para agrupar productos de diferentes proveedores y reducir desorden operativo antes del envio.",
    keywords: ["consolidar pedidos China", "varios proveedores China", "almacen Yiwu"],
    sections: ["Por que consolidar", "Recepcion y conteo", "Separar productos por SKU", "Revisar empaque y faltantes", "Preparar salida unica"]
  },
  {
    slug: "diferencias-entre-alibaba-yiwu-y-agente-de-compras",
    category: "Riesgo y control",
    title: "Diferencias entre Alibaba, Yiwu y agente de compras",
    description: "Explicacion clara para elegir el canal correcto segun etapa, producto y riesgo.",
    keywords: ["Alibaba Yiwu agente de compras", "comprar en China opciones", "sourcing Yiwu"],
    sections: ["Alibaba como canal de busqueda", "Yiwu como ecosistema de productos", "Agente como capa operativa", "Costos y limitaciones", "Decision segun producto"]
  },
  {
    slug: "errores-comunes-al-importar-desde-china",
    category: "Riesgo y control",
    title: "Errores comunes al importar desde China",
    description: "Lista de errores que suelen afectar margen, calidad y tiempos de entrega en ecommerce.",
    keywords: ["errores importar de China", "comprar en China ecommerce", "riesgos proveedores chinos"],
    sections: ["Comprar solo por precio", "No revisar muestras", "No definir empaque", "Ignorar tiempos reales", "No calcular costo total"]
  },
  {
    slug: "checklist-antes-de-pagar-proveedor-chino",
    category: "Riesgo y control",
    title: "Checklist antes de pagar a un proveedor chino",
    description: "Preguntas y evidencias que conviene revisar antes de hacer el primer pago.",
    keywords: ["checklist proveedor chino", "pagar proveedor China", "comprar seguro China"],
    sections: ["Producto exacto y especificaciones", "Cantidad y tolerancias", "Empaque y etiqueta", "Plazo y penalizaciones", "Evidencia y contacto responsable"]
  },
  {
    slug: "accesorios-para-celular-desde-yiwu",
    category: "Categorias de producto",
    title: "Accesorios para celular desde Yiwu",
    description: "Como evaluar accesorios para celular para ecommerce: calidad, empaque, margen y reposicion.",
    keywords: ["accesorios para celular Yiwu", "proveedores accesorios celular China", "productos ecommerce"],
    sections: ["Subcategorias comunes", "Riesgos de calidad", "Empaque y compatibilidad", "Margen y peso", "Prueba de demanda"]
  },
  {
    slug: "productos-para-hogar-desde-china",
    category: "Categorias de producto",
    title: "Productos para hogar desde China",
    description: "Criterios para elegir productos de hogar que puedan venderse online con menor riesgo operativo.",
    keywords: ["productos para hogar China", "proveedores hogar Yiwu", "home products ecommerce"],
    sections: ["Productos ligeros y faciles de explicar", "Materiales y acabados", "Empaque protector", "Fotos y contenido", "Reposicion por temporada"]
  },
  {
    slug: "organizacion-del-hogar-para-ecommerce",
    category: "Categorias de producto",
    title: "Organizacion del hogar para ecommerce",
    description: "Ideas y criterios para productos de organizacion del hogar enfocados en tiendas online.",
    keywords: ["organizacion del hogar China", "productos organizadores Yiwu", "ecommerce hogar"],
    sections: ["Demanda visual en redes", "Medidas y variantes", "Control de piezas", "Packaging para evitar danos", "Bundles y kits"]
  },
  {
    slug: "accesorios-de-belleza-desde-yiwu",
    category: "Categorias de producto",
    title: "Accesorios de belleza desde Yiwu",
    description: "Como evaluar accesorios de belleza no regulados, empaque y consistencia antes de vender online.",
    keywords: ["accesorios de belleza Yiwu", "proveedores belleza China", "productos belleza ecommerce"],
    sections: ["Separar accesorios de cosmeticos regulados", "Revisar materiales", "Cuidar empaque y presentacion", "Validar colores y variantes", "Preparar contenido para venta"]
  },
  {
    slug: "productos-para-mascotas-desde-china",
    category: "Categorias de producto",
    title: "Productos para mascotas desde China",
    description: "Criterios para seleccionar accesorios de mascotas con buen potencial para ecommerce.",
    keywords: ["productos para mascotas China", "proveedores mascotas Yiwu", "pet products ecommerce"],
    sections: ["Seguridad y materiales", "Tallas y variantes", "Empaque y limpieza", "Fotos de uso", "Reposicion y temporadas"]
  },
  {
    slug: "gadgets-para-ecommerce-desde-china",
    category: "Categorias de producto",
    title: "Gadgets para ecommerce desde China",
    description: "Como analizar gadgets antes de importarlos: funcion, bateria, calidad, certificaciones y devoluciones.",
    keywords: ["gadgets China ecommerce", "proveedores gadgets Yiwu", "productos virales China"],
    sections: ["Evitar productos con alto riesgo tecnico", "Probar funcion real", "Revisar empaque y manual", "Certificaciones cuando apliquen", "Medir devoluciones esperadas"]
  },
  {
    slug: "comprar-en-yiwu-desde-mexico",
    category: "Guias por pais",
    title: "Comprar en Yiwu desde Mexico",
    description: "Guia especifica para vendedores en Mexico que quieren cotizar, validar y consolidar productos desde Yiwu.",
    keywords: ["comprar en Yiwu desde Mexico", "importar China Mexico", "proveedores chinos Mexico"],
    sections: ["Plataformas comunes en Mexico", "Productos adecuados para test", "Informacion necesaria para cotizar", "Control antes de envio", "Siguiente paso por WhatsApp"]
  },
  {
    slug: "importar-desde-china-a-colombia",
    category: "Guias por pais",
    title: "Importar desde China a Colombia",
    description: "Puntos de preparacion para vendedores colombianos que compran productos en China para ecommerce.",
    keywords: ["importar desde China a Colombia", "proveedores China Colombia", "comprar en Yiwu Colombia"],
    sections: ["Definir canal de venta", "Validar proveedor y muestra", "Agrupar productos", "Revisar costo total", "Preparar documentacion operativa"]
  },
  {
    slug: "comprar-productos-de-china-para-vender-en-chile",
    category: "Guias por pais",
    title: "Comprar productos de China para vender en Chile",
    description: "Como vendedores chilenos pueden buscar productos, controlar calidad y preparar reposicion desde China.",
    keywords: ["comprar productos de China para vender en Chile", "proveedores China Chile", "sourcing China Chile"],
    sections: ["Elegir categoria con margen", "Revisar peso y volumen", "Controlar calidad antes de envio", "Comparar rutas", "Planear reposicion"]
  },
  {
    slug: "proveedores-chinos-para-espana",
    category: "Guias por pais",
    title: "Proveedores chinos para Espana",
    description: "Guia para tiendas en Espana que buscan proveedores, muestras, packaging y fulfillment desde China.",
    keywords: ["proveedores chinos para Espana", "comprar en China desde Espana", "fulfillment China Espana"],
    sections: ["Shopify, TikTok Shop y marketplaces", "Producto y normativa", "Muestras para contenido", "Packaging de marca", "Stock local cuando el producto escala"]
  },
  {
    slug: "comprar-en-china-desde-peru",
    category: "Guias por pais",
    title: "Comprar en China desde Peru",
    description: "Pasos para vendedores en Peru que buscan productos y proveedores con menor riesgo operativo.",
    keywords: ["comprar en China desde Peru", "proveedores chinos Peru", "importar de China a Peru"],
    sections: ["Enviar brief claro", "Comparar opciones", "Validar muestra", "Consolidar pedidos", "Preparar proxima compra"]
  },
  {
    slug: "proveedores-chinos-para-argentina",
    category: "Guias por pais",
    title: "Proveedores chinos para Argentina",
    description: "Como seleccionar proveedores y productos desde China con una estrategia conservadora para ecommerce en Argentina.",
    keywords: ["proveedores chinos para Argentina", "comprar en Yiwu desde Argentina", "sourcing China Argentina"],
    sections: ["Seleccionar SKUs con cuidado", "Evitar productos complejos", "Controlar muestra y empaque", "Documentar costos", "Escalar con datos"]
  }
];

export function getSpanishResource(slug: string) {
  return spanishResources.find((resource) => resource.slug === slug);
}
