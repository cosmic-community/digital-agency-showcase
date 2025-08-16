import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team - Meet the Digital Experts',
  description: 'Get to know our talented team of designers, developers, and digital strategists who make great projects happen.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and strategists who love creating amazing digital experiences.
          </p>
        </div>

        {teamMembers.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No team members available at the moment.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}