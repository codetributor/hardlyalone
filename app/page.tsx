import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    
    <main>
    <Header /> 
    <div className="flex flex-col space-y-3">
    <Hero />
     <SectionOne />
     <SectionTwo />
    </div>
     
    </main>
  );
}
