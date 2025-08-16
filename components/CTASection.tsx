import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let's work together to create something amazing. Get in touch with us today 
          and see how we can help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#contact" 
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Start Your Project
          </Link>
          <Link 
            href="/case-studies" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}