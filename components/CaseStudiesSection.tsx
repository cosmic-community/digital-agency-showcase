import type { CaseStudy } from '@/types'
import CaseStudyCard from './CaseStudyCard'
import Link from 'next/link'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (caseStudies.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses achieve remarkable results through our digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/case-studies" 
            className="btn-primary"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}