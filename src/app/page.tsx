import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-customBlack text-customWhite">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Hero />
      </div>
    </main>
  );
}

