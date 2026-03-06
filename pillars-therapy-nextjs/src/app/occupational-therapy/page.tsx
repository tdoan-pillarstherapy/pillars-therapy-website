import Header from '@/components/Header'
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
        icon="ot"
        translationKey="otPage"
      />
      <OtServicesPage />
      <Contact />
      <Footer />
    </>
  )
}
