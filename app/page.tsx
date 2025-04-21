import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <Footer />
    </>
  );
}
