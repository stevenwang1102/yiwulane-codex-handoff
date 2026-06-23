import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
  centered = false
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`reading ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="h2">{title}</h2>
      {children ? <div className="lead mt-5">{children}</div> : null}
    </div>
  );
}
