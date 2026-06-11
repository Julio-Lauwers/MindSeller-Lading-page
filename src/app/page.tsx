import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import HeroSection from '@/components/sections/HeroSection'
import QuizSection from '@/components/sections/QuizSection'
import WhoSection from '@/components/sections/WhoSection'
import MentorSection from '@/components/sections/MentorSection'
import NumbersSection from '@/components/sections/NumbersSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import MethodologySection from '@/components/sections/MethodologySection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PricingSection from '@/components/sections/PricingSection'
import FaqSection from '@/components/sections/FaqSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'
import GsapInit from '@/components/ui/GsapInit'

export default function Home() {
  return (
    <>
      <GsapInit />
      <WhatsAppFloat />
      <Navbar />
      <main>
        <HeroSection />
        <NumbersSection />
        <MentorSection />
        <WhoSection />
        <TestimonialsSection />
        <MethodologySection />
        <QuizSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
