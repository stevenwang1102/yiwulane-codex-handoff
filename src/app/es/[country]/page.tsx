import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { getSpanishMarket, spanishMarkets, spanishServices } from "@/content/spanish-markets";
import {
  buildPageMetadata,
  buildServiceSchema,
  buildWebPageSchema,
  spanishMarketAlternates
} from "@/lib/seo";

const marketLocales: Record<string, string> = {
  mexico: "es_MX",
  espana: "es_ES",
  colombia: "es_CO",
  chile: "es_CL",
  peru: "es_PE",
  argentina: "es_AR"
};

const workflow = [
  ["01", "Brief del producto", "Recibimos links, fotos, cantidad, precio objetivo, plataforma y ciudad de destino."],
  ["02", "Sourcing y comparacion", "Buscamos opciones y separamos MOQ, precio, plazo, packaging y riesgos observados."],
  ["03", "Muestra y control", "Coordinamos la muestra y acordamos las comprobaciones necesarias antes del lote."],
  ["04", "Consolidacion y preparacion", "Recibimos, contamos, revisamos, etiquetamos y agrupamos productos aprobados."],
  ["05", "Plan de envio", "Comparamos la ruta disponible segun producto, peso, volumen, destino y responsabilidad aduanera."]
] as const;

export function generateStaticParams() {
  return spanishMarkets.map((market) => ({ country: market.path }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const market = getSpanishMarket(country);
  if (!market) return {};

  return buildPageMetadata({
    title: market.metaTitle,
    description: market.metaDescription,
    path: `/es/${market.path}`,
    locale: marketLocales[market.path] || "es_ES",
    languages: spanishMarketAlternates
  });
}

export default async function SpanishCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const market = getSpanishMarket(country);
  if (!market) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hola YIWULANE. Vendo en ${market.label}. Quiero evaluar estos productos: `
  );
  const whatsappHref = `${site.whatsapp.href}?text=${whatsappMessage}`;

  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: market.headline,
          description: market.metaDescription,
          path: `/es/${market.path}`,
          language: marketLocales[market.path]?.replace("_", "-") || "es"
        })}
      />
      <JsonLd
        data={buildServiceSchema({
          name: `Sourcing y fulfillment desde Yiwu para ${market.label}`,
          description: market.metaDescription,
          path: `/es/${market.path}`
        })}
      />
      <section className="section bg-[linear-gradient(180deg,#fcfbf8_0%,#e8eef5_100%)]">
        <div className="container">
          <Breadcrumbs homeLabel="Inicio" items={[{ label: "Espanol", href: "/es" }, { label: market.label }]} />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="eyebrow">Yiwu, China → {market.label}</p>
              <h1 className="h1 mt-4">{market.headline}</h1>
              <p className="lead mt-6">{market.focus}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={whatsappHref} analyticsEvent="whatsapp_click" analyticsParams={{ country: market.path, placement: "country_hero" }}>
                  Enviar productos por WhatsApp
                </ButtonLink>
                <ButtonLink href="#proceso" variant="secondary">Ver el proceso</ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {market.platforms.map((platform) => <span className="chip" key={platform}>{platform}</span>)}
              </div>
            </div>
            <aside className="card bg-white p-6">
              <p className="eyebrow">Perfil recomendado</p>
              <p className="mt-4 text-xl font-black leading-8 text-[var(--color-ink)]">{market.buyerProfile}</p>
              <div className="mt-6 grid gap-3">
                {market.opportunities.map((item) => (
                  <p className="border-t border-[var(--color-border)] pt-3 text-sm font-bold text-[var(--color-navy)]" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="eyebrow">Lo que coordinamos</p>
            <h2 className="h2 mt-3">Una sola operacion desde la busqueda hasta el despacho.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {spanishServices.map((service, index) => (
              <div className="card p-5" key={service}>
                <span className="font-mono text-sm font-black text-[var(--color-route-dark)]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-bold leading-7 text-[var(--color-navy)]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="proceso">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Prioridades para {market.label}</p>
            <h2 className="h2 mt-3">Decisiones basadas en el producto real.</h2>
            <p className="lead mt-5">No prometemos una ruta o un costo sin conocer la mercancia. Empezamos por estas prioridades:</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {market.priorities.map((priority) => (
              <article className="card p-6" key={priority}>
                <span className="block h-2 w-14 rounded-full bg-[var(--color-route)]" />
                <p className="mt-5 font-bold leading-7 text-[var(--color-navy)]">{priority}</p>
              </article>
            ))}
          </div>
          <ol className="mt-12 grid gap-4 lg:grid-cols-5">
            {workflow.map(([number, title, body]) => (
              <li className="card p-5" key={title}>
                <span className="font-mono text-sm font-black text-[var(--color-route-dark)]">{number}</span>
                <h3 className="mt-3 text-lg font-black text-[var(--color-ink)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-[var(--color-ink)] text-white">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-[var(--color-route)]">Primer paso</p>
            <h2 className="h2 mt-3 !text-white">Envia hasta 3 productos para una evaluacion inicial.</h2>
            <p className="lead mt-5 text-[var(--color-mist)]">
              Incluye link o foto, cantidad aproximada, precio objetivo, plataforma y ciudad de destino en {market.label}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={whatsappHref} analyticsEvent="whatsapp_click" analyticsParams={{ country: market.path, placement: "country_footer" }}>
              Hablar por WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${site.emails.sales}`} variant="secondary">Escribir a ventas</ButtonLink>
          </div>
        </div>
      </section>

      <nav className="section-tight bg-white" aria-label="Otros mercados en espanol">
        <div className="container flex flex-wrap items-center gap-3">
          <span className="font-black text-[var(--color-ink)]">Otros mercados:</span>
          {spanishMarkets.filter((item) => item.path !== market.path).map((item) => (
            <Link className="chip" href={`/es/${item.path}`} key={item.path}>{item.label}</Link>
          ))}
        </div>
      </nav>
    </>
  );
}
