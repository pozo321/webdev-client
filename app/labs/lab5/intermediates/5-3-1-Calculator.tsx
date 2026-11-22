"use client";
import { useState } from "react";
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [display, setDisplay] = useState("");
  const symbols: Record<string, string> = {
    add: "+", subtract: "-", multiply: "×", divide: "÷",
  };
  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`
    );
    const data = await response.json();
    if (response.ok) {
      setDisplay(`${a} ${symbols[op]} ${b} = ${data.result}`);
    } else {
      setDisplay(data.error);
    }
  };
  return (
    <div id="wd-calculator-route">
      <h4>Calculator (Next.js Route Handler)</h4>
      <input type="number" value={a} aria-label="A"
        className="mr-2 rounded border px-2 py-1"
        onChange={(e) => setA(e.target.value)} />
      <select value={operation} aria-label="Operation"
        className="mr-2 rounded border px-2 py-1"
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <input type="number" value={b} aria-label="B"
        className="mr-2 rounded border px-2 py-1"
        onChange={(e) => setB(e.target.value)} />
      <button className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={() => calculate(operation)}>
        Calculate
      </button>
      <br />
      <input value={display} readOnly aria-label="Result"
        className="mt-2 rounded border px-2 py-1" />
    </div>
  );
}
