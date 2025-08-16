import Link from 'next/link'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { metadata } = service

  return (
    <div className="card p-6 h-full flex flex-col">
      {metadata.featured_image && (
        <img 
          src={`${metadata.featured_image.imgix_url}?w=400&h=200&fit=crop&auto=format,compress`}
          alt={metadata.name}
          className="w-full h-48 object-cover rounded-lg mb-6"
          width={200}
          height={100}
        />
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {metadata.name}
      </h3>

      <p className="text-gray-600 mb-4 flex-grow">
        {metadata.short_description}
      </p>

      {metadata.starting_price && (
        <div className="text-lg font-semibold text-primary-600 mb-4">
          Starting at {metadata.starting_price}
        </div>
      )}

      {metadata.key_features && metadata.key_features.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {metadata.key_features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {feature}
              </span>
            ))}
            {metadata.key_features.length > 3 && (
              <span className="text-gray-500 text-sm">
                +{metadata.key_features.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      <Link 
        href={`/services/${service.slug}`}
        className="btn-primary mt-auto"
      >
        Learn More
      </Link>
    </div>
  )
}