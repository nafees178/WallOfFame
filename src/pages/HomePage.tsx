import Hero from '../components/Hero';
import Team from '../components/Team';
import Products from '../components/Products';
import Event from '../components/Event';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="event">
        <Event />
      </section>
    </>
  );
}
