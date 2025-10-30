'use client'

import { useState, useEffect } from 'react'
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Input } from '@/components/input'

const initialProjects = [
  {
    id: 'PRJ-001',
    name: 'Monthly Close – Q1',
    description: 'Month-end reconciliations and review',
    talent: 'Sarah CPA',
    status: 'In Progress', // In Progress | Completed | Draft | Archived
    type: 'Recurring',     // Recurring | One-Time
  },
  {
    id: 'PRJ-002',
    name: 'Tax Prep & Filing',
    description: 'Annual tax preparation and filing',
    talent: 'Unassigned',
    status: 'Draft',
    type: 'One-Time',
  },
  {
    id: 'PRJ-003',
    name: 'Client Cleanup',
    description: 'Books cleanup and migration',
    talent: 'Mike Tax',
    status: 'In Progress',
    type: 'One-Time',
  },
  {
    id: 'PRJ-004',
    name: 'Payroll Setup',
    description: 'Configure payroll and integrations',
    talent: 'Emma Ops',
    status: 'Completed',
    type: 'One-Time',
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All') // All | Draft | Active | Completed | Archived

  useEffect(() => {
    // Check if there's a new project in localStorage
    const newProject = localStorage.getItem('newProject')
    if (newProject) {
      const parsedProject = JSON.parse(newProject)
      setProjects(prev => [parsedProject, ...prev])
      localStorage.removeItem('newProject')
    }
  }, [])

  const normalizedStatusToFilter = (status) => {
    if (status === 'Completed') return 'Completed'
    if (status === 'In Progress' || status === 'Pending Approval' || status === 'Ongoing') return 'Active'
    return 'All'
  }

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = [p.id, p.name, p.description, p.talent]
      .join(' ')?.toLowerCase().includes(search.toLowerCase())
    const category = normalizedStatusToFilter(p.status)
    const matchesFilter = filter === 'All' ? true : category === filter
    return matchesSearch && matchesFilter
  })

  const statusColor = (status) => {
    if (status === 'Completed') return 'green'
    if (status === 'In Progress') return 'blue'
    if (status === 'Draft') return 'amber'
    if (status === 'Archived') return 'zinc'
    return 'zinc'
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Heading className="text-xl">My Projects</Heading>
        <div className="flex items-center gap-3 ml-auto">
          <div className="w-64 hidden sm:block">
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {['All', 'Draft', 'Active', 'Completed', 'Archived'].map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className={[
              'px-3 py-1.5 text-xs rounded-full border transition',
              filter === label
                ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white'
                : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-700',
            ].join(' ')}
            aria-pressed={filter === label}
          >
            {label}
          </button>
        ))}
      </div>

      <Table className="mt-6 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Project</TableHeader>
            <TableHeader>Talent</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Type</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProjects.map((project) => (
            <TableRow key={project.id} href={`/accounting-dashboard/projects/${project.id}`}>
              <TableCell>
                <div>
                  <div className="text-sm font-medium text-zinc-950 dark:text-white">{project.name}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar
                    initials={
                      project.talent === 'Unassigned'
                        ? 'UA'
                        : project.talent.split(' ').map((w) => w[0]).join('').slice(0, 2)
                    }
                    className="size-6"
                  />
                  <span className="text-zinc-500 dark:text-zinc-400">{project.talent}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge color={statusColor(project.status)}>{project.status}</Badge>
              </TableCell>
              <TableCell className="text-zinc-500">{project.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

