import { site } from "@/content/site";

const { latitude, longitude } = site.mapCoordinates;
const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

export function MapCard() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">Yiwu office</p>
          <h2 className="h2 mt-3">Find YIWULANE in Yiwu.</h2>
          <p className="lead mt-5">{site.address}</p>
          <a className="button button-secondary mt-7" href={mapLinkUrl} target="_blank" rel="noreferrer">
            Open exact pin in Google Maps
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <figure className="card overflow-hidden bg-[var(--color-mist)]" aria-labelledby="yiwu-map-title">
          <figcaption id="yiwu-map-title" className="sr-only">
            Google Maps location for the YIWULANE office address in Yiwu, Zhejiang Province.
          </figcaption>
          <iframe
            title="YIWULANE Yiwu office location"
            src={mapEmbedUrl}
            className="h-[360px] w-full border-0 md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="border-t border-[var(--color-border)] bg-white p-5">
            <p className="text-sm font-black uppercase text-[var(--color-route-dark)]">
              YIWULANE - Yiwu Financial Business District
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{site.address}</p>
            <p className="mt-2 text-xs font-bold text-[var(--color-muted)]">
              Exact pin: {latitude}, {longitude}
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
