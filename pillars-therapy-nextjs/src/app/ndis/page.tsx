import Header from '@/components/Header'
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
      />
      <NdisServices />
      <Contact />
      <Footer />
    </>
  )
}
