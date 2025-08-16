import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { metadata } = service

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {metadata.featured_image && (
        <img 
          src={`${metadata.featured_image.imgix_url}?w=400&h=200&fit=crop&auto=format,compress`}
          alt={metadata.name}
          className="w-full h-48 object-cover rounded-t-lg"
          width={200}
          height={100}
        />
      )}

      <CardHeader>
        <CardTitle className="text-xl">
          {metadata.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col">
        <p className="text-muted-foreground mb-4 flex-grow">
          {metadata.short_description}
        </p>

        {metadata.starting_price && (
          <div className="text-lg font-semibold text-primary mb-4">
            Starting at {metadata.starting_price}
          </div>
        )}

        {metadata.key_features && metadata.key_features.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {metadata.key_features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="outline">
                  {feature}
                </Badge>
              ))}
              {metadata.key_features.length > 3 && (
                <span className="text-muted-foreground text-sm">
                  +{metadata.key_features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <Button asChild className="mt-auto">
          <Link href={`/services/${service.slug}`}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}