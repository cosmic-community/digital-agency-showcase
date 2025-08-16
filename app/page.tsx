import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  // Fetch all content in parallel
  const [services, teamMembers, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <div>
      <Hero />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies.slice(0, 3)} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </div>
  )
}