import Header from '@/components/Header'
import SectionDivider from '@/components/SectionDivider'
import OsteoServicesPage from '@/components/OsteoServicesPage'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SubPageHero from '@/components/SubPageHero'

export const metadata = {
  title: 'Osteopathy Services | Pillars Therapy',
  description: 'In-home Osteopathy services for NDIS participants and Support at Home clients. Pain management, exercise programs, chronic condition management, and falls prevention.',
}

export default function OsteopathyPage() {
  return (
    <>
      <Header />
      <SubPageHero
        translationKey="osteoPage"
      />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
      <OsteoServicesPage />
      <SectionDivider pathD="M0,30 C320,70 720,10 1440,50 L1440,80 L0,80 Z" fill="#e6f1fb" />
      <Contact />
      <Footer />
    </>
  )
}
