import Hero from "./Hero";
import Navbar from "./Navbar";
import ScrollIcon from "./ScrollIcon";

export default function Home() {
  return (
      <section className="home">
        <Navbar />
        <Hero />
        <ScrollIcon />
      </section>
    )
}