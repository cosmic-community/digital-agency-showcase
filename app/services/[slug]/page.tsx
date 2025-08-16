// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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
    <div className="section-padding">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/services" 
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Services
          </Link>
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {metadata.name}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {metadata.short_description}
          </p>

          {metadata.starting_price && (
            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-primary-900">
                Starting at {metadata.starting_price}
              </p>
            </div>
          )}
        </div>

        {metadata.description && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {metadata.key_features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link 
            href="#contact" 
            className="btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}