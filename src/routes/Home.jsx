import {Footer} from "../components/Footer";
import {Hero} from "../components/Hero";
import {SectionFour} from "../components/SectionFour";
import {SectionOne} from "../components/SectionOne";
import {SectionThree} from "../components/SectionThree";
import {SectionTwo} from "../components/SectionTwo";

export function Home() {
  return (
    <div className="">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
