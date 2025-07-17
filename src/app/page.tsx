import { About } from './_components/about';
import { Footer } from './_components/footer';
import { Hero } from './_components/hero';
import { Services } from './_components/services';
import { Testimonials } from './_components/testmonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
