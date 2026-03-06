import Header from '@/components/Header'
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
        logo="/assets/support-at-home-logo.jpeg"
        logoAlt="Support at Home"
        translationKey="sahPage"
      />
      <SahServices />
      <Contact />
      <Footer />
    </>
  )
}
