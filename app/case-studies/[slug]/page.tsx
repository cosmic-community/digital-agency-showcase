// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'
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
          <Button variant="ghost" asChild>
            <Link href="/case-studies" className="text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {metadata.project_name}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span><strong>Client:</strong> {metadata.client}</span>
              {metadata.project_type && (
                <span><strong>Type:</strong> {metadata.project_type.value}</span>
              )}
            </div>
          </div>

          {metadata.services_used && metadata.services_used.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Services Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {metadata.services_used.map((service) => (
                  <Badge key={service.id}>
                    {service.metadata.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metadata.challenge && (
            <Card>
              <CardHeader>
                <CardTitle>Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: metadata.challenge }}
                />
              </CardContent>
            </Card>
          )}

          {metadata.solution && (
            <Card>
              <CardHeader>
                <CardTitle>Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: metadata.solution }}
                />
              </CardContent>
            </Card>
          )}

          {metadata.results && (
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: metadata.results }}
                />
              </CardContent>
            </Card>
          )}
        </div>

        {metadata.gallery && metadata.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
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