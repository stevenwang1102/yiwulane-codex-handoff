import type { Metadata } from "next";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const path = "/es/comparar/agente-de-compras-vs-compra-directa";
const title = "Agente de compras en Yiwu vs compra directa";
const description =
  "Compara trabajar con un agente de compras en Yiwu y comprar directamente al proveedor, con criterios claros para decidir si YIWULANE encaja.";
const languages = {
  en: "/compare/yiwu-sourcing-agent-vs-direct-sourcing",
  es: path
};

const faqs = [
  {
    question: "Cuando conviene usar un agente de compras en Yiwu?",
    answer:
      "Suele ser util cuando hay varios proveedores, muestras, control de calidad, packaging, consolidacion o un plan de fulfillment que debe coordinarse en China."
  },
  {
    question: "Cuando conviene comprar directamente?",
    answer:
      "La compra directa puede ser mas eficiente si ya tienes un proveedor fiable y tu equipo gestiona por su cuenta negociacion, inspeccion, packaging y logistica."
  },
  {
    question: "YIWULANE puede consolidar productos de varios proveedores?",
    answer:
      "Si. La consolidacion forma parte del alcance publicado de YIWULANE, sujeto a revision de producto, requisitos de inspeccion acordados y un plan de envio viable."
  },
  {
    question: "Que informacion necesita YIWULANE para revisar un proyecto?",
    answer:
      "Envia links o referencias, mercado destino, plataforma de venta, cantidad estimada, precio objetivo y requisitos de calidad, packaging o entrega."
  }
];

const comparisonRows = [
  ["Mejor encaje", "Varios proveedores o una operacion coordinada", "Un proveedor probado y un proceso interno de compras"],
  ["Comunicacion", "Coordinacion local en China", "Gestion directa por tu equipo"],
  ["Muestras y QC", "Dentro de un mismo flujo operativo", "Con equipo propio o proveedor de inspeccion separado"],
  ["Packaging y consolidacion", "Coordinados antes del despacho", "Organizados con cada fabrica o con otro almacen"],
  ["Compromiso operativo", "Mas soporte y menos coordinacion interna", "Mas control directo y mas carga para tu equipo"]
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  locale: "es_ES",
  languages
});

export default function SpanishSourcingComparisonPage() {
  return (
    <main lang="es">
      <JsonLd data={buildWebPageSchema({ name: title, description, path, language: "es" })} />
      <JsonLd data={buildFaqSchema(faqs)} />

      <section className="section">
        <div className="container">
          <Breadcrumbs
            homeLabel="Inicio"
            items={[{ label: "Espanol", href: "/es" }, { label: "Agente vs compra directa" }]}
          />
          <div className="reading">
            <h1 className="h1">Agente de compras en Yiwu o compra directa: cual te conviene?</h1>
            <p className="lead mt-6">
              Usa un agente cuando el trabajo operativo alrededor del producto sea la parte dificil. Compra directo
              cuando la relacion con el proveedor ya este probada y tu equipo pueda gestionar calidad, packaging y
              logistica.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 reading">Respuesta rapida</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="card p-6">
              <h3 className="text-xl font-black text-[var(--color-ink)]">Elige sourcing coordinado si</h3>
              <ul className="mt-4 grid gap-3 leading-7 text-[var(--color-muted)]">
                <li>Varios proveedores deben trabajar bajo un mismo plan.</li>
                <li>Necesitas muestras, inspeccion, packaging o consolidacion.</li>
                <li>Quieres un solo contacto operativo en China.</li>
              </ul>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-black text-[var(--color-ink)]">Elige compra directa si</h3>
              <ul className="mt-4 grid gap-3 leading-7 text-[var(--color-muted)]">
                <li>Ya tienes un proveedor fiable y receptivo.</li>
                <li>Tu equipo controla negociacion, inspeccion y transporte.</li>
                <li>No necesitas consolidar pedidos de varias fabricas.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2 reading">Comparacion lado a lado</h2>
          <div className="mt-8 overflow-x-auto border border-[var(--color-border)] bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-[var(--color-ink)] text-white">
                <tr>
                  <th className="p-4 text-sm font-black">Factor</th>
                  <th className="p-4 text-sm font-black">Agente en Yiwu</th>
                  <th className="p-4 text-sm font-black">Compra directa</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([factor, agent, direct]) => (
                  <tr className="border-t border-[var(--color-border)] align-top" key={factor}>
                    <th className="p-4 font-black text-[var(--color-ink)]">{factor}</th>
                    <td className="p-4 leading-7 text-[var(--color-muted)]">{agent}</td>
                    <td className="p-4 leading-7 text-[var(--color-muted)]">{direct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="h2">Donde encaja YIWULANE</h2>
            <p className="mt-5 leading-7 text-[var(--color-muted)]">
              YIWULANE coordina busqueda de productos y proveedores, muestras, controles de calidad acordados,
              packaging de marca, consolidacion, fulfillment desde China y planificacion de inventario China mas
              local para vendedores online internacionales.
            </p>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              Es una opcion a evaluar cuando estos pasos necesitan un solo flujo operativo. No sustituye una relacion
              directa con un proveedor que ya funciona bien.
            </p>
          </div>
          <aside className="border-l-4 border-[var(--color-route)] bg-[var(--color-surface)] p-6">
            <h2 className="text-xl font-black text-[var(--color-ink)]">Empieza con datos concretos</h2>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              Envia referencias, cantidades, destino y requisitos de calidad o packaging. YIWULANE revisara los
              supuestos antes de proponer ruta o estructura de costos.
            </p>
            <div className="mt-6">
              <ButtonLink
                href={site.whatsapp.href}
                analyticsEvent="whatsapp_click"
                analyticsParams={{ placement: "spanish_comparison" }}
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container reading">
          <h2 className="h2">Preguntas frecuentes</h2>
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
