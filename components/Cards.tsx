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
        "max-w-[1100px] w-full mx-auto p-4 my-10 md:columns-2 space-y-4",
        user ? "opacity-100" : "opacity-50 pointer-events-none"
      )}
    >
      <Balances />
      <SignMessage />
      <Transfer />
    </section>
  );
}
