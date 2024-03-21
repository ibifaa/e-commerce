import Image from "next/image";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Content from "./components/content";

export default function Home() {
  return (
    <div>
     
      <main>
      <HeroSection/>
      <Content/>
      </main>
      
      <Footer/>
    </div>
  );
}
