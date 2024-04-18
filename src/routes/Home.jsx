import {Hero} from "../components/Hero";
import {SectionOne} from "../components/SectionOne";
import {SectionRSVP} from "../components/SectionRSVP";
import {SectionThree} from "../components/SectionThree";
import {SectionTwo} from "../components/SectionTwo";

export function Home() {
  return (
    <div className="mt-40">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionRSVP />
    </div>
  );
}
