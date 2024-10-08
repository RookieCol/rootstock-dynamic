"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import Balances from "./Balances";
import SignMessage from "./SignMessage";
import Transfer from "./Transfer";
import { cn } from "@/lib/utils";

export default function Cards() {
  const { user } = useDynamicContext();
  return (
    <section
      className={cn(
        "max-w-[1100px] w-full mx-auto p-4 my-10 grid gap-4 md:grid-cols-2",
        user ? "opacity-100" : "opacity-50 pointer-events-none"
      )}
    >
      <div className="flex flex-col gap-4">
        <Balances />
        <SignMessage />
      </div>
      <Transfer />
    </section>
  );
}
