import { site } from "@/content/site";

const { latitude, longitude } = site.mapCoordinates;
const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

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
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure
          className="card relative min-h-[360px] overflow-hidden bg-[var(--color-mist)] md:min-h-[460px]"
          aria-labelledby="yiwu-map-title"
        >
          <figcaption id="yiwu-map-title" className="sr-only">
            Stylized map preview for the YIWULANE office address in Yiwu, Zhejiang Province.
          </figcaption>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 760 460" aria-hidden="true">
            <rect width="760" height="460" fill="#e8eef5" />
            <path d="M-40 390 C130 285 210 280 356 182 C498 87 592 72 810 24" fill="none" stroke="#ffffff" strokeWidth="42" strokeLinecap="round" opacity="0.9" />
            <path d="M-20 120 C108 185 206 178 326 258 C446 338 552 352 790 302" fill="none" stroke="#ffffff" strokeWidth="34" strokeLinecap="round" opacity="0.86" />
            <path d="M88 -40 C162 80 178 188 150 502" fill="none" stroke="#f8fafc" strokeWidth="24" strokeLinecap="round" opacity="0.9" />
            <path d="M596 -30 C526 118 514 236 552 496" fill="none" stroke="#f8fafc" strokeWidth="22" strokeLinecap="round" opacity="0.9" />
            <path d="M-20 390 C130 285 210 280 356 182 C498 87 592 72 810 24" fill="none" stroke="#d9e0e8" strokeWidth="3" strokeDasharray="10 12" />
            <path d="M-20 120 C108 185 206 178 326 258 C446 338 552 352 790 302" fill="none" stroke="#d9e0e8" strokeWidth="3" strokeDasharray="10 12" />
            <g opacity="0.34" stroke="#17365d" strokeWidth="1">
              {Array.from({ length: 9 }).map((_, index) => (
                <path key={`v-${index}`} d={`M${90 + index * 72} 0 L${40 + index * 72} 460`} />
              ))}
              {Array.from({ length: 6 }).map((_, index) => (
                <path key={`h-${index}`} d={`M0 ${60 + index * 72} L760 ${98 + index * 72}`} />
              ))}
            </g>
            <circle cx="390" cy="210" r="74" fill="#e87524" opacity="0.12" />
            <circle cx="390" cy="210" r="44" fill="#e87524" opacity="0.18" />
            <path d="M390 138c-36 0-65 29-65 65 0 48 65 121 65 121s65-73 65-121c0-36-29-65-65-65Z" fill="#e87524" />
            <circle cx="390" cy="203" r="24" fill="#102136" />
            <circle cx="390" cy="203" r="9" fill="#ffffff" />
          </svg>
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-[var(--color-border)] bg-white/92 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
            <p className="text-sm font-black uppercase text-[var(--color-route-dark)]">
              YIWULANE · Yiwu Financial Business District
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
