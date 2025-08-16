import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { metadata } = member

  return (
    <Card className="text-center h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        {metadata.photo ? (
          <img 
            src={`${metadata.photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={metadata.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            width={100}
            height={100}
          />
        ) : (
          <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl text-muted-foreground">
              {metadata.name.charAt(0)}
            </span>
          </div>
        )}

        <h3 className="text-lg font-bold text-foreground mb-1">
          {metadata.name}
        </h3>

        <p className="text-primary font-medium mb-3">
          {metadata.job_title}
        </p>

        {metadata.bio && (
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {metadata.bio}
          </p>
        )}

        {(metadata.linkedin || metadata.twitter || metadata.email) && (
          <div className="flex justify-center space-x-2 mt-auto">
            {metadata.email && (
              <Button
                variant="ghost"
                size="icon"
                asChild
              >
                <a 
                  href={`mailto:${metadata.email}`}
                  aria-label={`Email ${metadata.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            )}
            {metadata.linkedin && (
              <Button
                variant="ghost"
                size="icon"
                asChild
              >
                <a 
                  href={metadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${metadata.name} LinkedIn profile`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
            {metadata.twitter && (
              <Button
                variant="ghost"
                size="icon"
                asChild
              >
                <a 
                  href={metadata.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${metadata.name} Twitter profile`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}