import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container reading">
        <p className="eyebrow">404</p>
        <h1 className="h1 mt-3">This route is not part of the current sourcing plan.</h1>
        <p className="lead mt-5">Return to the homepage or start a defined 3-SKU Pilot.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/pilot" variant="secondary">Start a 3-SKU Pilot</ButtonLink>
        </div>
      </div>
    </section>
  );
}
