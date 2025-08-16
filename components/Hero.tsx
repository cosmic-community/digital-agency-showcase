import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We Create Digital 
            <span className="text-primary-600 block">Experiences That Drive Results</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            From stunning websites to powerful brands and effective marketing campaigns, 
            we help businesses thrive in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/services" 
              className="btn-primary text-lg px-8 py-4"
            >
              View Our Services
            </Link>
            <Link 
              href="/case-studies" 
              className="btn-secondary text-lg px-8 py-4"
            >
              See Our Work
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}