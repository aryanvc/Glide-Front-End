import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

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
                <Button size="sm">Assign</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

