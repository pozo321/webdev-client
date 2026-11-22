"use client";
import { useEffect, useState } from "react";
import * as client from "../client";
export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  useEffect(() => {
    client.fetchWelcomeMessage().then(setWelcomeOnLoad);
  }, []);
  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      <hr />
      <h4>Requesting on Click</h4>
      <button id="wd-fetch-welcome"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from server: <b>{welcomeOnClick}</b>
      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}
