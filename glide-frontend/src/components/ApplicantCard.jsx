'use client'

import { useState } from 'react'
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'

export default function ApplicantCard({ applicant, onViewProfile, onSendMessage }) {
  const [showActions, setShowActions] = useState(false)

  return (
    <div 
      className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 hover:border-lime-500 transition-colors"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          <Avatar initials={applicant.initials} className="size-12" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{applicant.name}</h3>
              <Badge color={applicant.status === 'Active' ? 'blue' : 'amber'}>
                {applicant.status}
              </Badge>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-lime-100 dark:bg-lime-900/20">
                <span className="text-xs font-medium text-lime-700 dark:text-lime-300">
                  {applicant.matchScore}% Match
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-xs text-zinc-600 dark:text-zinc-400 mb-3">
              <div>
                <span className="font-medium">Experience:</span> {applicant.yearsExperience}
              </div>
              <div>
                <span className="font-medium">Rate:</span> {applicant.hourlyRate}/hr
              </div>
              <div>
                <span className="font-medium">Location:</span> {applicant.location}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
              <span>Last active: {applicant.lastActive}</span>
              <span>•</span>
              <span>Available: {applicant.availability || 'Immediately'}</span>
            </div>

            {applicant.skills && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-1">
                  {applicant.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} color="zinc" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {applicant.skills.length > 3 && (
                    <Badge color="zinc" className="text-xs">
                      +{applicant.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`flex gap-2 transition-opacity ${showActions ? 'opacity-100' : 'opacity-0'}`}>
          <Button 
            color="zinc" 
            plain 
            className="text-xs"
            onClick={() => onViewProfile(applicant)}
          >
            View Profile
          </Button>
          <Button 
            color="zinc" 
            plain 
            className="text-xs"
            onClick={() => window.open(applicant.resumeUrl, '_blank')}
          >
            Resume
          </Button>
          <Button 
            color="dark" 
            className="text-xs"
            onClick={() => onSendMessage(applicant)}
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}
