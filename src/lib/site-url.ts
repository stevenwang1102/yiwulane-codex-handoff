export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.yiwulane.com";
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
