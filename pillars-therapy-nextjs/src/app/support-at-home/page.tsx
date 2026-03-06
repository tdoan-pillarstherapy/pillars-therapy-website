import Header from '@/components/Header'
import SectionDivider from '@/components/SectionDivider'
import SahServices from '@/components/SahServices'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SubPageHero from '@/components/SubPageHero'

export const metadata = {
  title: 'Support at Home Services | Pillars Therapy',
  description: 'Government-funded allied health services for eligible older Australians. Occupational Therapy and Osteopathy delivered in your home.',
}

export default function SupportAtHomePage() {
  return (
    <>
      <Header />
      <SubPageHero
        logo="/assets/support-at-home-logo.png"
        logoAlt="Support at Home"
        translationKey="sahPage"
      />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
      <SahServices />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#e6f1fb" />
      <Contact />
      <Footer />
    </>
  )
}
