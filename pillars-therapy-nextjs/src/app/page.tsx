import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import Pathways from '@/components/Pathways'
import Disciplines from '@/components/Disciplines'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
      <Pathways />
      <SectionDivider pathD="M0,60 C480,0 960,80 1440,20 L1440,80 L0,80 Z" fill="#f0f7ff" />
      <Disciplines />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
      <About />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#e6f1fb" />
      <Contact />
      <Footer />
    </>
  )
}
