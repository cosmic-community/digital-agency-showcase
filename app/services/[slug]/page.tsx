// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Check } from 'lucide-react'
import type { Metadata } from 'next'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices()
  
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.metadata.name} - Digital Agency Services`,
    description: service.metadata.short_description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const { metadata } = service

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/services" className="text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="mb-12">
          {metadata.featured_image && (
            <img 
              src={`${metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={metadata.name}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              width={600}
              height={300}
            />
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {metadata.name}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {metadata.short_description}
          </p>

          {metadata.starting_price && (
            <Card className="bg-primary/5 mb-8">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-primary">
                  Starting at {metadata.starting_price}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {metadata.description && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: metadata.description }}
            />
          </div>
        )}

        {metadata.key_features && metadata.key_features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {metadata.key_features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Ready to Get Started?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you achieve your goals.
            </p>
            <Button asChild>
              <Link href="#contact">
                Contact Us
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}