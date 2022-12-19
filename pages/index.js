import Header from "../components/layout/Header";
import Discover from "../components/sections/Discover";
import Hero from "../components/sections/Hero";
import News from "../components/sections/News";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <News />
      <Discover />
    </>
  );
}
