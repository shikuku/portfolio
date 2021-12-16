// import Head from "next/head";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Skills from "../src/components/skills";
import Particles from "react-tsparticles";
import particlejs from "../src/vendor/paricles/particles";

export default function Home() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <Particles
className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlejs}
      />
        <title>portfolio</title>
        
<Nav />
<Hero /> 
 <About /> 
 <Skills />
<Contact />
         </div>
  )
}
