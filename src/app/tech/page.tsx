import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-customBlack text-customWhite">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 md:pt-52 gap-8 lg:gap-15 w-10/12">
      <div className="font-extrabold font-Inter text-customOrange lg:text-9xl italic"><p>TECH COMPONENTs</p></div>
        <div className="border border-green-800 p-10 w-10/12"><p>ESP 32</p></div>
        <div className="border border-red-900 p-10 w-10/12"><p>THERMAL CAM</p></div>
        <div className="border border-blue-900 p-10 w-10/12"><p>WEBCAM</p></div>
        <div className="border border-yellow-700 p-10 w-10/12"><p>MINI PC</p></div>
      </div>
      <Footer />
    </main>
  );
}

