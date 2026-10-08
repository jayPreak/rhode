import Nav from '../components/Nav';
import RevealRoot from '../components/RevealRoot';
import Hero from '../components/sections/Hero';
import Idea from '../components/sections/Idea';
import Formula from '../components/sections/Formula';
import Taste from '../components/sections/Taste';
import Station from '../components/sections/Station';
import Experience from '../components/sections/Experience';
import Archive from '../components/sections/Archive';
import Closing from '../components/sections/Closing';

/* Page order = the journey: DISCOVER → FEEL → EXPLORE → EXPERIENCE → PACKAGE.
   Reorder or remove sections here. */
export default function Page() {
  return (
    <>
      <a href="#concept" className="skip">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Idea />
        <Formula />
        <Taste />
        <Station />
        <Experience />
        <Archive />
        <Closing />
      </main>
      <RevealRoot />
    </>
  );
}
