import Balances from "@/components/Balances";
import SignMessage from "@/components/SignMessage";
import Transfer from "@/components/Transfer";
import { DynamicWidget } from "@/lib/dynamic";

export default function Main() {
  return (
    <main>
      <header></header>
      <div className="container mx-auto p-4 flex justify-center">
        <DynamicWidget />
      </div>
      <section className="container mx-auto p-4 space-y-6">
        <Balances />
        <Transfer />
        <SignMessage />
      </section>
    </main>
  );
}
