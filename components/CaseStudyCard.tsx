import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { metadata } = caseStudy

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {metadata.featured_image && (
        <img 
          src={`${metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
          alt={metadata.project_name}
          className="w-full h-64 object-cover"
          width={300}
          height={150}
        />
      )}

      <CardHeader>
        <CardTitle className="text-xl mb-2">
          {metadata.project_name}
        </CardTitle>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span><strong>Client:</strong> {metadata.client}</span>
          {metadata.project_type && (
            <span><strong>Type:</strong> {metadata.project_type.value}</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col">
        {metadata.services_used && metadata.services_used.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {metadata.services_used.slice(0, 2).map((service) => (
                <Badge key={service.id} variant="secondary">
                  {service.metadata.name}
                </Badge>
              ))}
              {metadata.services_used.length > 2 && (
                <span className="text-muted-foreground text-sm">
                  +{metadata.services_used.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex-grow">
          {metadata.challenge && (
            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
              <div 
                className="text-muted-foreground text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ 
                  __html: metadata.challenge.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
                }}
              />
            </div>
          )}
        </div>

        <Button asChild className="mt-4">
          <Link href={`/case-studies/${caseStudy.slug}`}>
            View Case Study
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}