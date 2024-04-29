import {Footer} from "../components/Footer";
import {Hero} from "../components/Hero";
import { ScrollToTop } from "../components/ScrollToTop";
import {SectionFour} from "../components/SectionFour";
import {SectionOne} from "../components/SectionOne";
import {SectionThree} from "../components/SectionThree";
import {SectionTwo} from "../components/SectionTwo";

export function Home() {
  return (
    <div className="">
    <ScrollToTop/>
      <Hero />

      <section id="">
        <SectionOne />
      </section>
      
      <section id="event">
        <SectionTwo />
      </section>
      
      <section id="">
        <SectionThree />
      </section>

      <section id="rsvp">
        <SectionFour />
      </section>
      
    </div>
  );
}
