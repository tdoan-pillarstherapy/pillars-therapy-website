import Header from '@/components/Header'
import SectionDivider from '@/components/SectionDivider'
import OtServicesPage from '@/components/OtServicesPage'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SubPageHero from '@/components/SubPageHero'

export const metadata = {
  title: 'Occupational Therapy Services | Pillars Therapy',
  description: 'Comprehensive Occupational Therapy services for NDIS participants and Support at Home clients. Driving assessments, home modifications, assistive technology, and more.',
}

export default function OccupationalTherapyPage() {
  return (
    <>
      <Header />
      <SubPageHero
        translationKey="otPage"
      />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
      <OtServicesPage />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#e6f1fb" />
      <Contact />
      <Footer />
    </>
  )
}
