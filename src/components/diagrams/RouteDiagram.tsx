export function RouteDiagram() {
  const nodes = [
    { label: "Supplier", x: 70, y: 92 },
    { label: "Yiwu QC Hub", x: 260, y: 44 },
    { label: "China Direct", x: 450, y: 92 },
    { label: "Local Warehouse", x: 450, y: 198 },
    { label: "Customer", x: 640, y: 146 }
  ];

  return (
    <figure className="card overflow-hidden bg-white p-5" aria-labelledby="route-diagram-title">
      <figcaption id="route-diagram-title" className="sr-only">
        Abstract supply-chain route from supplier to Yiwu QC hub, then China direct or local warehouse, and finally customer.
      </figcaption>
      <svg viewBox="0 0 720 280" role="img" aria-label="Supplier to Yiwu QC Hub to China direct or local warehouse to customer" className="h-auto w-full">
        <defs>
          <linearGradient id="routeGradient" x1="0" x2="1">
            <stop stopColor="#e87524" />
            <stop offset="1" stopColor="#17365d" />
          </linearGradient>
        </defs>
        <rect x="18" y="18" width="684" height="244" rx="24" fill="#fcfbf8" />
        <path d="M98 92 C160 92 185 44 232 44" stroke="url(#routeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M296 54 C354 66 384 92 420 92" stroke="url(#routeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M292 62 C354 110 378 190 420 198" stroke="#d9e0e8" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M486 92 C552 92 574 146 612 146" stroke="#d9e0e8" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M486 198 C552 198 574 146 612 146" stroke="url(#routeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
        {nodes.map((node) => (
          <g key={node.label}>
            <rect x={node.x - 58} y={node.y - 26} width="116" height="52" rx="16" fill="white" stroke="#d9e0e8" />
            <circle cx={node.x - 36} cy={node.y} r="7" fill="#e87524" />
            <text x={node.x - 22} y={node.y + 5} fontSize="14" fontWeight="800" fill="#102136">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-4 grid gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-3">
        <p><strong className="text-[var(--color-ink)]">Source</strong><br />Compare practical supplier options.</p>
        <p><strong className="text-[var(--color-ink)]">Check</strong><br />Inspect before fulfillment decisions.</p>
        <p><strong className="text-[var(--color-ink)]">Scale</strong><br />Move proven SKUs closer to customers.</p>
      </div>
    </figure>
  );
}
