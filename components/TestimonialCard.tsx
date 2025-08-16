import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial

  const renderStars = (rating?: { key: string; value: string }) => {
    if (!rating) return null
    
    const numStars = parseInt(rating.key)
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < numStars ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="card p-6 h-full flex flex-col">
      {renderStars(metadata.rating)}

      <blockquote className="text-gray-600 mb-6 flex-grow">
        "{metadata.testimonial}"
      </blockquote>

      <div className="flex items-center space-x-4">
        {metadata.client_photo ? (
          <img 
            src={`${metadata.client_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={metadata.client_name}
            className="w-12 h-12 rounded-full object-cover"
            width={50}
            height={50}
          />
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-lg text-gray-400">
              {metadata.client_name.charAt(0)}
            </span>
          </div>
        )}

        <div>
          <div className="font-semibold text-gray-900">
            {metadata.client_name}
          </div>
          {(metadata.job_title || metadata.company) && (
            <div className="text-sm text-gray-500">
              {metadata.job_title && metadata.company 
                ? `${metadata.job_title}, ${metadata.company}`
                : metadata.job_title || metadata.company
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}