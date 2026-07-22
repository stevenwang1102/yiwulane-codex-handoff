import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] py-14 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="[&_span]:text-white">
            <Logo />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            YIWULANE helps growing overseas e-commerce sellers source products, control quality, prepare branded packaging, and plan China plus local inventory workflows.
          </p>
          <p className="mt-4 max-w-md text-xs leading-6 text-white/58">{site.address}</p>
          <div className="mt-4 grid gap-2 text-sm">
            <a className="text-white/72 hover:text-white" href={`mailto:${site.emails.general}`}>
              {site.emails.general}
            </a>
            <a className="text-white/72 hover:text-white" href={`mailto:${site.emails.support}`}>
              {site.emails.support}
            </a>
          </div>
        </div>
        <FooterColumn title="Services" links={site.footerServices} />
        <FooterColumn title="Solutions" links={site.footerSolutions} />
        <FooterColumn
          title="Company"
          links={[
            { label: "How It Works", href: "/how-it-works" },
            { label: "Sourcing model guide", href: "/compare/yiwu-sourcing-agent-vs-direct-sourcing" },
            { label: "Pilot", href: "/pilot" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy", href: "/privacy" },
            { label: "Cookie settings", href: "#cookie-settings" }
          ]}
        />
      </div>
      <div className="container mt-10 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/58">
        <p>© {new Date().getFullYear()} YIWULANE. Yiwu sourcing, QC, packaging, and fulfillment support.</p>
        <p>No customer logos, reviews, certifications, or delivery promises are claimed.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase text-white">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-white/72">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover:text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
