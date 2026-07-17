import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/content/site";
import { spanishMarkets, spanishServices } from "@/content/spanish-markets";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Sourcing en Yiwu para vendedores online en Mexico, Espana y Latinoamerica",
  description:
    "YIWULANE ayuda a vendedores online en Mexico, Espana, Colombia, Chile, Peru y Argentina con proveedores en Yiwu, control de calidad, packaging y fulfillment desde China.",
  alternates: {
    canonical: absoluteUrl("/es")
  },
  openGraph: {
    title: "Sourcing en Yiwu para vendedores online en espanol",
    description:
      "Proveedores en China, control de calidad y fulfillment para vendedores de Mercado Libre, Shopify, TikTok Shop y Amazon.",
    url: absoluteUrl("/es"),
    siteName: "YIWULANE",
    type: "website"
  }
};

const marketplaceSegments = [
  "Vendedores de Mercado Libre",
  "Tiendas Shopify y DTC",
  "Vendedores de TikTok Shop",
  "Amazon y marketplaces",
  "Marcas que buscan packaging propio",
  "Equipos que compran a varios proveedores"
];

const serviceVisuals = [
  ["01", "Proveedor", "Busqueda y comparacion"],
  ["02", "Muestra", "Validacion antes del lote"],
  ["03", "QC", "Fotos, video y observaciones"],
  ["04", "Packing", "Etiqueta, insert y empaque"],
  ["05", "Consolidacion", "Varios proveedores en un flujo"],
  ["06", "Envio", "Ruta segun pais y volumen"]
];

const processSteps = [
  ["1", "Envia tu producto o categoria", "Compartes links, fotos, precio objetivo, pais y plataforma de venta."],
  ["2", "Comparamos proveedores", "Revisamos opciones, MOQ, plazo, empaque, riesgos y supuestos de costo."],
  ["3", "Validamos muestra y calidad", "Coordinamos muestra, fotos, video y observaciones antes de escalar."],
  ["4", "Consolidamos y preparamos envio", "Agrupamos productos, etiquetamos, revisamos y recomendamos ruta de fulfillment."]
];

export default function SpanishMarketPage() {
  return (
    <>
      <section className="section bg-[linear-gradient(180deg,#fcfbf8_0%,#e8eef5_100%)]">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">Yiwu sourcing para vendedores online en espanol</p>
            <h1 className="h1">Proveedores en China, control de calidad y fulfillment para tu tienda online.</h1>
            <p className="lead mt-6">
              Ayudamos a vendedores de Mexico, Espana, Colombia, Chile, Peru y Argentina a comprar mejor en Yiwu:
              busqueda de proveedores, muestras, inspeccion, packaging, consolidacion y envio internacional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.whatsapp.href}>Hablar por WhatsApp</ButtonLink>
              <ButtonLink href="#mercados" variant="secondary">Ver mercados</ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {marketplaceSegments.map((segment) => (
                <span className="chip" key={segment}>{segment}</span>
              ))}
            </div>
          </div>
          <SupplyChainVisual />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Una operacion visible, no solo una lista de proveedores.">
            La pagina presenta el flujo completo: busqueda, muestra, control, packaging, consolidacion y envio.
          </SectionHeader>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceVisuals.map(([number, title, body]) => (
              <article className="card overflow-hidden p-0" key={title}>
                <div className="h-2 bg-[var(--color-route)]" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-mist)] text-sm font-black text-[var(--color-navy)]">
                      {number}
                    </span>
                    <span className="h-3 w-20 rounded-full bg-[linear-gradient(90deg,var(--color-route),var(--color-mist))]" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">{body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {spanishServices.map((service) => (
              <span className="chip" key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="mercados" className="section bg-white">
        <div className="container">
          <SectionHeader title="Seis mercados prioritarios en espanol.">
            La propuesta se adapta al pais, plataforma de venta, categoria, volumen y nivel de riesgo de cada vendedor.
          </SectionHeader>
          <MarketRouteStrip />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {spanishMarkets.map((market, index) => (
              <article className="card p-6" id={market.path} key={market.country}>
                <div className="mb-5 flex items-center justify-between gap-4 rounded-2xl bg-[var(--color-paper)] p-4">
                  <p className="eyebrow">{market.label}</p>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-sm font-black text-[var(--color-route-dark)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-black text-[var(--color-ink)]">{market.headline}</h3>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">{market.focus}</p>
                <div className="mt-5 grid gap-2">
                  {market.opportunities.map((item) => (
                    <p className="text-sm font-bold text-[var(--color-navy)]" key={item}>+ {item}</p>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {market.keywords.map((keyword) => (
                    <span className="chip" key={keyword}>{keyword}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeader title="Proceso simple para validar productos antes de escalar.">
            Empezamos con informacion concreta, no con promesas generales. El objetivo es saber si el producto se puede comprar, revisar y enviar con un costo operativo razonable.
          </SectionHeader>
          <div className="grid gap-5">
            <ProcessVisual />
            <ol className="grid gap-4">
              {processSteps.map(([number, title, body]) => (
                <li className="card grid gap-3 p-5 sm:grid-cols-[56px_1fr]" key={title}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-route)] font-black text-[var(--color-ink)]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-[var(--color-ink)]">{title}</h3>
                    <p className="mt-2 leading-7 text-[var(--color-muted)]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Primer paso recomendado</p>
            <h2 className="h2 mt-3">Envia 3 productos para cotizar y validar.</h2>
            <p className="lead mt-5">
              Compararemos opciones de proveedor, MOQ, plazo, riesgos de calidad, empaque y una ruta inicial de envio para tu pais.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-black text-[var(--color-ink)]">Incluye en tu mensaje</h3>
            <ul className="mt-5 grid gap-3 text-sm font-bold text-[var(--color-navy)]">
              <li>+ Pais de venta: Mexico, Espana, Colombia, Chile, Peru o Argentina</li>
              <li>+ Plataforma: Mercado Libre, Shopify, TikTok Shop, Amazon u otra</li>
              <li>+ Link o foto del producto</li>
              <li>+ Precio objetivo y cantidad aproximada</li>
              <li>+ Si necesitas packaging, etiquetas o consolidacion</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={site.whatsapp.href}>Cotizar por WhatsApp</ButtonLink>
              <Link className="button button-secondary" href="/contact">Formulario en ingles</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SupplyChainVisual() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,#e87524_0%,#e8eef5_54%,#17365d_100%)] opacity-20" />
      <div className="relative grid gap-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Yiwu operations</p>
            <h2 className="mt-2 text-2xl font-black text-[var(--color-ink)]">De producto a envio</h2>
          </div>
          <span className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-black text-white">YIWULANE</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {["Supplier", "QC", "Pack"].map((label) => (
            <div className="rounded-2xl bg-[var(--color-paper)] p-4" key={label}>
              <span className="block h-16 rounded-xl border border-[var(--color-border)] bg-white shadow-sm" />
              <p className="mt-3 text-sm font-black text-[var(--color-navy)]">{label}</p>
            </div>
          ))}
        </div>
        <div className="route-line" />
        <div className="grid gap-3 rounded-2xl bg-[var(--color-mist)] p-4">
          <p className="text-sm font-black text-[var(--color-ink)]">Mercados destino</p>
          <div className="flex flex-wrap gap-2">
            {spanishMarkets.map((market) => (
              <span className="rounded-full bg-white px-3 py-2 text-xs font-black text-[var(--color-navy)]" key={market.country}>
                {market.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketRouteStrip() {
  return (
    <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-paper)] p-5">
      <div className="grid gap-4 lg:grid-cols-[180px_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Ruta comercial</p>
          <p className="mt-2 font-black text-[var(--color-ink)]">Yiwu hacia mercados hispanos</p>
        </div>
        <div className="grid gap-3 md:grid-cols-6">
          {spanishMarkets.map((market) => (
            <a
              className="rounded-2xl border border-[var(--color-border)] bg-white p-3 text-center text-sm font-black text-[var(--color-navy)] hover:text-[var(--color-route-dark)]"
              href={`#${market.path}`}
              key={market.country}
            >
              {market.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessVisual() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-4">
        {["Brief", "Search", "Check", "Ship"].map((label, index) => (
          <div className="relative rounded-2xl bg-[var(--color-paper)] p-4" key={label}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-route)] text-sm font-black text-[var(--color-ink)]">
              {index + 1}
            </span>
            <p className="mt-8 text-sm font-black text-[var(--color-navy)]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
