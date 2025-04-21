import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Stack } from "./Components/Stack";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <Stack />
     <Footer />
    </>
  );
}
