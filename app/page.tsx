import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionOne from "@/components/SectionOne";
import Footer from "@/components/Footer";
import SectionTwo from "@/components/SectionTwo";
import Image from "next/image";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";

export default function Home() {
  return (
    
    <main>
    <Header /> 
    <div className="flex flex-col space-y-3">
    <Hero />
     <SectionOne />
     <SectionTwo />
     <SectionThree />
     <SectionFour />
     <Footer />
    </div>
     
    </main>
  );
}
