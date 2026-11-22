export function httpServer(): string {
  const raw =
    process.env.NEXT_PUBLIC_HTTP_SERVER ??
    "http://localhost:4000";
  return raw.replace(/\/$/, "");
}
