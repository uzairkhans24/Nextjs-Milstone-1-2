import Contact from "./(pages)/Contact/page"
import About from "./(pages)/About/page"
import HeroSection from "./components/HeroSection"
import Projects from "./components/projects"
import Services from "./components/Services"
import Skills from "./components/Skills"
import "./style/page.css"


function Home() {
  return (
    <section className="main-page">
      <div id="hero"><HeroSection /></div>
      <div id="skills"><Skills /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="services"><Services /></div>
    <div id="contact"><Contact /></div>
      
    </section>
  )
}

export default Home



