// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jeremy Arde";
export const SITE_DESCRIPTION = "Welcome to my website!";

/** Base-path-aware absolute path (always leading /). */
export function getPath(path: string): string {
  const base = (import.meta.env.BASE_URL as string)?.replace(/\/$/, "") || "";
  const cleanPath = path.replace(/^\//, "") || "";
  const joined = base ? `${base}/${cleanPath}`.replace(/\/+/g, "/") : `/${cleanPath}`;
  return joined.startsWith("/") ? joined : `/${joined}`;
}
