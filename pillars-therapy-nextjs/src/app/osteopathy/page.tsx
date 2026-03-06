import Header from '@/components/Header'
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
        icon="osteo"
        translationKey="osteoPage"
      />
      <OsteoServicesPage />
      <Contact />
      <Footer />
    </>
  )
}
