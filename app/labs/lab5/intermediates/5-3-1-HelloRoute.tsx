"use client";
import { useEffect, useState } from "react";
export default function HelloRoute() {
  const [data, setData] = useState<unknown>(null);
  useEffect(() => {
    fetch("/api/lab5/hello")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <div id="wd-hello-route">
      <h4>GET /api/lab5/hello (Next.js Route Handler)</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
