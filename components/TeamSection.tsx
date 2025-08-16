import type { TeamMember } from '@/types'
import TeamMemberCard from './TeamMemberCard'
import Link from 'next/link'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  if (teamMembers.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and strategists who love creating amazing digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {teamMembers.slice(0, 4).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {teamMembers.length > 4 && (
          <div className="text-center">
            <Link 
              href="/team" 
              className="btn-secondary"
            >
              Meet the Full Team
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}