import { useState } from 'react'
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Dialog, DialogTitle, DialogBody, DialogActions } from '@/components/dialog'

const talent = [
  {
    name: 'Sarah CPA',
    specialty: 'Auditing & Compliance',
    experience: '15 years',
    rate: '$125/hr',
    availability: 'Available',
    completedProjects: 23,
    rating: 4.9,
    avatar: 'SC',
  },
  {
    name: 'Mike Tax',
    specialty: 'Tax Preparation',
    experience: '12 years',
    rate: '$100/hr',
    availability: 'Available',
    completedProjects: 45,
    rating: 4.8,
    avatar: 'MT',
  },
  {
    name: 'Lisa Budget',
    specialty: 'Financial Planning',
    experience: '10 years',
    rate: '$90/hr',
    availability: 'Available',
    completedProjects: 18,
    rating: 4.9,
    avatar: 'LB',
  },
  {
    name: 'David Payroll',
    specialty: 'Payroll & HR',
    experience: '8 years',
    rate: '$85/hr',
    availability: 'Busy',
    completedProjects: 32,
    rating: 4.7,
    avatar: 'DP',
  },
  {
    name: 'Emma Reports',
    specialty: 'Financial Reporting',
    experience: '13 years',
    rate: '$110/hr',
    availability: 'Available',
    completedProjects: 28,
    rating: 4.9,
    avatar: 'ER',
  },
  {
    name: 'John Bookkeeper',
    specialty: 'Bookkeeping',
    experience: '6 years',
    rate: '$70/hr',
    availability: 'Available',
    completedProjects: 56,
    rating: 4.8,
    avatar: 'JB',
  },
]

export default function TalentPage() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const onViewProfile = (person) => {
    setSelected(person)
    setOpen(true)
  }

  return (
    <>
      <div className="flex items-end justify-between">
        <Heading className="text-xl">Talent</Heading>
        <div className="flex items-center gap-4">
          <Input className="w-64" placeholder="Search talent..." />
          <Button href="#">
            <svg data-slot="icon" viewBox="0 0 20 20" className="size-5">
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
            Invite Talent
          </Button>
        </div>
      </div>

      <Table className="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Talent</TableHeader>
            <TableHeader>Specialty</TableHeader>
            <TableHeader>Experience</TableHeader>
            <TableHeader>Rate</TableHeader>
            <TableHeader>Availability</TableHeader>
            <TableHeader>Projects</TableHeader>
            <TableHeader>Rating</TableHeader>
            <TableHeader className="text-right">Action</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {talent.map((person) => (
            <TableRow key={person.name}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar initials={person.avatar} className="size-8" square />
                  <div>
                    <div className="text-sm font-medium text-zinc-950 dark:text-white">{person.name}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      <svg className="inline size-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {' '}
                      {person.rating}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-zinc-500">{person.specialty}</TableCell>
              <TableCell className="text-zinc-500">{person.experience}</TableCell>
              <TableCell className="font-medium text-zinc-950 dark:text-white">{person.rate}</TableCell>
              <TableCell>
                <Badge color={person.availability === 'Available' ? 'lime' : 'amber'}>
                  {person.availability}
                </Badge>
              </TableCell>
              <TableCell className="text-zinc-500">{person.completedProjects}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <svg className="size-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{person.rating}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" color="zinc" plain onClick={() => onViewProfile(person)}>View Profile</Button>
                  <Button size="sm">Assign</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Profile Modal */}
      {selected && (
        <Dialog open={open} onClose={setOpen} size="4xl">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white dark:from-zinc-900 dark:to-zinc-900 pointer-events-none" />
            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Hero */}
                <div className="flex-1 flex items-start gap-4">
                  <Avatar initials={selected.avatar} className="size-16 sm:size-20" square />
                  <div>
                    <DialogTitle className="text-2xl sm:text-3xl font-semibold">
                      {selected.name}
                    </DialogTitle>
                    <div className="mt-1 text-zinc-600 dark:text-zinc-400">{selected.specialty}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge color="zinc">{selected.experience}</Badge>
                      <Badge color="zinc">{selected.rate}</Badge>
                      <Badge color={selected.availability === 'Available' ? 'lime' : 'amber'}>
                        {selected.availability}
                      </Badge>
                      <Badge color="zinc">{selected.completedProjects} projects</Badge>
                      <Badge color="zinc">⭐ {selected.rating}</Badge>
                    </div>
                  </div>
                </div>

                {/* Right: CTAs */}
                <div className="lg:w-64 flex lg:flex-col gap-2">
                  <Button className="w-full">Start Intro Call</Button>
                  <Button className="w-full" color="zinc" plain>Send Message</Button>
                  <Button className="w-full" color="zinc" plain>Add to Shortlist</Button>
                </div>
              </div>

              {/* Bio / Skills */}
              <DialogBody>
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">About</h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Senior accountant specializing in {selected.specialty.toLowerCase()}. Proven track record across {selected.completedProjects}+ client projects with a
                      {" "}{selected.rating} rating. Strong communicator and process-driven.
                    </p>

                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Core Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['QuickBooks', 'Xero', 'Excel', 'GAAP', 'Audit', 'Tax'].map((skill) => (
                        <Badge key={skill} color="zinc">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Availability</h3>
                    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900">
                      <div className="text-sm text-zinc-700 dark:text-zinc-300">{selected.availability}</div>
                      <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Timezone aligned, can start within 1 week.</div>
                    </div>

                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Rate</h3>
                    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900">
                      <div className="text-sm font-medium text-zinc-900 dark:text-white">{selected.rate}</div>
                      <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Flexible depending on scope and cadence.</div>
                    </div>
                  </div>
                </div>
              </DialogBody>

              <DialogActions>
                <Button onClick={() => setOpen(false)} color="zinc" plain>Close</Button>
                <Button>Proceed to Intro</Button>
              </DialogActions>
            </div>
          </div>
        </Dialog>
      )}
    </>
  )
}

