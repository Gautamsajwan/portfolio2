import About from '@/components/About'
import Contact from '@/components/Contact'
import Achievements from '@/components/Achievements'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scrollbar scrollbar-thumb-blue-400 scrollbar-track-[#262626] overflow-hidden snap-y snap-mandatory z-0 scroll-smooth">
    {/* <div className="overflow-hidden snap-y snap-mandatory z-0"> */}
      <Header/>
      
      {/* hero */}
      <section id='hero' className="snap-center">
        <Hero />
      </section>

      {/* about */}
      <section id='about' className="snap-center">
        <About />
      </section>

      {/* experiences */}
      <section id='experience' className="snap-center">
        <Achievements />
      </section>

      {/* skills */}
      <section id='skills' className="snap-start">
        <Skills />
      </section>

      {/* projects */}
      <section id='projects' className="snap-start">
        <Projects />
      </section>

      {/* contact me */}
      <section id='contact' className="snap-start">
        <Contact />
      </section>
    </div>
  )
}
