"use client";

import { DynamicWidget } from "@/lib/dynamic";

export default function Main() {
  return (
    <div>
      <div className="header">
        <div className="header-buttons">
          <button
            className="docs-button bg-black"
            onClick={() =>
              window.open(
                "https://docs.dynamic.xyz",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Docs
          </button>
          <button
            className="get-started"
            onClick={() =>
              window.open(
                "https://app.dynamic.xyz",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Get started
          </button>
        </div>
      </div>
      <div className="modal">
        <DynamicWidget />
      </div>
    </div>
  );
}
