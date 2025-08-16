import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
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
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < numStars ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        {renderStars(metadata.rating)}

        <blockquote className="text-muted-foreground mb-6 flex-grow">
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
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <span className="text-lg text-muted-foreground">
                {metadata.client_name.charAt(0)}
              </span>
            </div>
          )}

          <div>
            <div className="font-semibold text-foreground">
              {metadata.client_name}
            </div>
            {(metadata.job_title || metadata.company) && (
              <div className="text-sm text-muted-foreground">
                {metadata.job_title && metadata.company 
                  ? `${metadata.job_title}, ${metadata.company}`
                  : metadata.job_title || metadata.company
                }
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}