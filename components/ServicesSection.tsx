import type { Service } from '@/types'
import ServiceCard from './ServiceCard'
import Link from 'next/link'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  if (services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {services.length > 6 && (
          <div className="text-center">
            <Link 
              href="/services" 
              className="btn-primary"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}