// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.metadata.project_name} - Case Study`,
    description: `Learn how we helped ${caseStudy.metadata.client} achieve their business goals.`,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const { metadata } = caseStudy

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Case Studies
          </Link>
        </div>

        <div className="mb-12">
          {metadata.featured_image && (
            <img 
              src={`${metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={metadata.project_name}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              width={600}
              height={300}
            />
          )}

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {metadata.project_name}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span><strong>Client:</strong> {metadata.client}</span>
              {metadata.project_type && (
                <span><strong>Type:</strong> {metadata.project_type.value}</span>
              )}
            </div>
          </div>

          {metadata.services_used && metadata.services_used.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Services Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {metadata.services_used.map((service) => (
                  <span 
                    key={service.id}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {service.metadata.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metadata.challenge && (
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Challenge
              </h2>
              <div 
                className="prose text-gray-600"
                dangerouslySetInnerHTML={{ __html: metadata.challenge }}
              />
            </div>
          )}

          {metadata.solution && (
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Solution
              </h2>
              <div 
                className="prose text-gray-600"
                dangerouslySetInnerHTML={{ __html: metadata.solution }}
              />
            </div>
          )}

          {metadata.results && (
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Results
              </h2>
              <div 
                className="prose text-gray-600"
                dangerouslySetInnerHTML={{ __html: metadata.results }}
              />
            </div>
          )}
        </div>

        {metadata.gallery && metadata.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {metadata.gallery.map((image, index) => (
                <img 
                  key={index}
                  src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={`${metadata.project_name} gallery image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                  width={400}
                  height={300}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}