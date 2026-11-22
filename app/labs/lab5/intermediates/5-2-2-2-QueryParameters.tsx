"use client";
import { useState } from "react";
import { httpServer } from "@/app/lib/httpServer";
export default function QueryParameters() {
  const HTTP_SERVER = httpServer();
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h4>Query Parameters</h4>
      <input type="number" value={a}
        className="mb-2 mr-2 rounded border px-2 py-1"
        onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setB(e.target.value)} />
      <br />
      <a id="wd-query-parameter-add"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-query-parameter-divide"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} ÷ {b}
      </a>
    </div>
  );
}
