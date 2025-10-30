'use client'

import { useState, useEffect } from 'react'
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

const initialProjects = [
  {
    id: 'PRJ-001',
    name: 'Q4 Financial Audit',
    description: 'Complete financial audit for Q4 2024',
    talent: 'Sarah CPA',
    status: 'In Progress',
    budget: '$5,000',
    spent: '$2,100',
    hoursLogged: 42,
    dueDate: 'Mar 15, 2025',
    createdDate: 'Jan 1, 2025',
  },
  {
    id: 'PRJ-002',
    name: 'Tax Prep & Filing',
    description: 'Annual tax preparation and filing services',
    talent: 'Mike Tax',
    status: 'In Progress',
    budget: '$3,500',
    spent: '$1,575',
    hoursLogged: 28,
    dueDate: 'Apr 15, 2025',
    createdDate: 'Jan 5, 2025',
  },
  {
    id: 'PRJ-003',
    name: 'Budget Planning',
    description: 'Develop comprehensive budget for 2025',
    talent: 'Lisa Budget',
    status: 'Pending Approval',
    budget: '$2,500',
    spent: '$750',
    hoursLogged: 15,
    dueDate: 'Feb 28, 2025',
    createdDate: 'Jan 10, 2025',
  },
  {
    id: 'PRJ-004',
    name: 'Payroll Setup',
    description: 'Setup and configure payroll system',
    talent: 'David Payroll',
    status: 'Completed',
    budget: '$1,800',
    spent: '$1,800',
    hoursLogged: 24,
    dueDate: 'Jan 31, 2025',
    createdDate: 'Dec 15, 2024',
  },
  {
    id: 'PRJ-005',
    name: 'Financial Reporting',
    description: 'Monthly financial reports and analysis',
    talent: 'Emma Reports',
    status: 'In Progress',
    budget: '$4,200',
    spent: '$2,520',
    hoursLogged: 60,
    dueDate: 'Ongoing',
    createdDate: 'Dec 1, 2024',
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)

  useEffect(() => {
    // Check if there's a new project in localStorage
    const newProject = localStorage.getItem('newProject')
    if (newProject) {
      const parsedProject = JSON.parse(newProject)
      setProjects(prev => [parsedProject, ...prev])
      localStorage.removeItem('newProject')
    }
  }, [])

  return (
    <>
      <div className="flex items-end justify-between">
        <Heading className="text-xl">Projects</Heading>
        <a 
          href="/projects/new" 
          className="transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xs/4 py-2 px-3 rounded-lg border-0 flex items-center gap-2 font-medium bg-lime-400/20 text-lime-700 dark:bg-lime-400/10 dark:text-lime-300"
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </a>
      </div>

      <Table className="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Project</TableHeader>
            <TableHeader>Talent</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Budget</TableHeader>
            <TableHeader>Spent</TableHeader>
            <TableHeader>Hours</TableHeader>
            <TableHeader>Due Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} href={`/accounting-dashboard/projects/${project.id}`}>
              <TableCell>
                <div>
                  <div className="text-sm font-medium text-zinc-950 dark:text-white">{project.name}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{project.description}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar initials="SC" className="size-6" />
                  <span className="text-zinc-500 dark:text-zinc-400">{project.talent}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  color={
                    project.status === 'Completed' ? 'zinc' : 
                    project.status === 'In Progress' ? 'blue' : 
                    'amber'
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell className="text-zinc-500">{project.budget}</TableCell>
              <TableCell className="text-zinc-500">{project.spent}</TableCell>
              <TableCell className="text-zinc-500">{project.hoursLogged}</TableCell>
              <TableCell className="text-zinc-500">{project.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

