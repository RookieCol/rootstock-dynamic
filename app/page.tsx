import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import { DynamicWidget } from "@/lib/dynamic";

export default function Main() {
  return (
    <main className="min-h-svh flex flex-col justify-between">
      <header className="container mx-auto p-4 flex justify-center mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black *:px-1">
          <span className="bg-[#ff9103]">Rootstock</span>{" "}
          <span className="bg-blue-500">Dynamic</span> <br />
          <span className="relative top-2 md:top-3 lg:top-4 bg-[#ff70e1]">
            Starter kit
          </span>
        </h1>
      </header>
      <div className="container mx-auto p-4 mt-3 flex justify-center">
        <DynamicWidget variant="modal" />
      </div>
      <Cards />
      <Footer />
    </main>
  );
}
