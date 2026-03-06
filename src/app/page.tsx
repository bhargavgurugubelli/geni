// app/page.tsx
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Differentiators from "@/components/Differentiators";
import AtAGlance from "@/components/AtAGlance";
import ParentQuotes from "@/components/ParentQuotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Differentiators />
      <AtAGlance />
      <ParentQuotes />
      <Footer />
    </>
  );
}
