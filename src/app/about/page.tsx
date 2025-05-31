import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-customBlack text-customWhite">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 md:pt-52 gap-8 lg:gap-15 w-10/12">
      <div className="font-extrabold font-Inter text-customOrange lg:text-9xl italic"><p>MEET THE TEAM</p></div>
        <div className="border border-green-800 p-10 w-10/12"><p>Juls Cadenas</p></div>
        <div className="border border-red-900 p-10 w-10/12"><p>Josh Cormier</p></div>
        <div className="border border-blue-900 p-10 w-10/12"><p>Dar Guerzon</p></div>
        <div className="border border-yellow-700 p-10 w-10/12"><p>Etian Javier</p></div>
      </div>
      <Footer />
    </main>
  );
}

