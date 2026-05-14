import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AreasAtuacao from "@/components/AreasAtuacao";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AreasAtuacao />
      <Sobre />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}