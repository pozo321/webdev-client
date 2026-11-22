"use client";
import { useState } from "react";
import { httpServer } from "@/app/lib/httpServer";
export default function PathParameters() {
  const HTTP_SERVER = httpServer();
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <input type="number" value={a}
        className="mb-2 mr-2 rounded border px-2 py-1"
        onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setB(e.target.value)} />
      <br />
      <a id="wd-path-parameter-add"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-path-parameter-divide"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} ÷ {b}
      </a>
    </div>
  );
}
