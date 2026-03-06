import Header from '@/components/Header'
import SectionDivider from '@/components/SectionDivider'
import NdisServices from '@/components/NdisServices'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SubPageHero from '@/components/SubPageHero'

export const metadata = {
  title: 'NDIS Services | Pillars Therapy',
  description: 'Comprehensive Occupational Therapy and Osteopathy services for plan-managed and self-managed NDIS participants across Metro Melbourne.',
}

export default function NdisPage() {
  return (
    <>
      <Header />
      <SubPageHero
        logo="/assets/ndis-logo.png"
        logoAlt="NDIS"
        translationKey="ndisPage"
        showNdisNotice
      />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
      <NdisServices />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#e6f1fb" />
      <Contact />
      <Footer />
    </>
  )
}
