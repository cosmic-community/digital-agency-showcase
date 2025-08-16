import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Digital Agency Success Stories',
  description: 'Explore our successful projects and see how we help clients achieve their business goals through digital solutions.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable results through our digital solutions.
          </p>
        </div>

        {caseStudies.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No case studies available at the moment.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}