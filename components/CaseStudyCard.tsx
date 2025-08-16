import Link from 'next/link'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { metadata } = caseStudy

  return (
    <div className="card overflow-hidden h-full flex flex-col">
      {metadata.featured_image && (
        <img 
          src={`${metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
          alt={metadata.project_name}
          className="w-full h-64 object-cover"
          width={300}
          height={150}
        />
      )}

      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {metadata.project_name}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span><strong>Client:</strong> {metadata.client}</span>
            {metadata.project_type && (
              <span><strong>Type:</strong> {metadata.project_type.value}</span>
            )}
          </div>
        </div>

        {metadata.services_used && metadata.services_used.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {metadata.services_used.slice(0, 2).map((service) => (
                <span 
                  key={service.id}
                  className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium"
                >
                  {service.metadata.name}
                </span>
              ))}
              {metadata.services_used.length > 2 && (
                <span className="text-gray-500 text-sm">
                  +{metadata.services_used.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex-grow">
          {metadata.challenge && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
              <div 
                className="text-gray-600 text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ 
                  __html: metadata.challenge.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
                }}
              />
            </div>
          )}
        </div>

        <Link 
          href={`/case-studies/${caseStudy.slug}`}
          className="btn-primary mt-4"
        >
          View Case Study
        </Link>
      </div>
    </div>
  )
}