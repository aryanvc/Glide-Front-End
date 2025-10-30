import { Stat } from '@/app/stat'
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Text } from '@/components/text'

const activeProjects = [
  {
    id: 'PRJ-001',
    name: 'Q4 Financial Audit',
    talent: 'Sarah CPA',
    status: 'In Progress',
    budget: '$5,000',
    hoursLogged: 42,
    dueDate: 'Mar 15, 2025',
  },
  {
    id: 'PRJ-002',
    name: 'Tax Prep & Filing',
    talent: 'Mike Tax',
    status: 'In Progress',
    budget: '$3,500',
    hoursLogged: 28,
    dueDate: 'Apr 15, 2025',
  },
  {
    id: 'PRJ-003',
    name: 'Budget Planning',
    talent: 'Lisa Budget',
    status: 'Pending Approval',
    budget: '$2,500',
    hoursLogged: 15,
    dueDate: 'Feb 28, 2025',
  },
]

const pendingApprovals = [
  {
    id: 'PAY-001',
    project: 'Q4 Financial Audit',
    talent: 'Sarah CPA',
    amount: '$420',
    hours: 8,
    date: 'Jan 15, 2025',
  },
  {
    id: 'PAY-002',
    project: 'Tax Prep & Filing',
    talent: 'Mike Tax',
    amount: '$315',
    hours: 6,
    date: 'Jan 14, 2025',
  },
  {
    id: 'PAY-003',
    project: 'Budget Planning',
    talent: 'Lisa Budget',
    amount: '$225',
    hours: 5,
    date: 'Jan 13, 2025',
  },
]

export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Heading className="text-xl">Overview</Heading>
        <div className="flex items-center gap-3">{/* optional actions */}</div>
      </div>

      <div className="mt-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Active Projects" value="8" change="+3" />
        <Stat title="Total Spend" value="$18,450" change="+12.5%" />
        <Stat title="Active Talent" value="12" change="+2" />
        <Stat title="Pending Approvals" value="5" change="+1" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="flex items-end justify-between">
            <Subheading>Active Projects</Subheading>
            <Button href="/projects" plain>
              View all
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            {activeProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg border border-zinc-950/5 p-4 dark:border-white/5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-medium text-zinc-950 dark:text-white">{project.name}</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <Avatar initials="SC" className="size-4" />
                      <span>{project.talent}</span>
                    </div>
                  </div>
                  <Badge color={project.status === 'In Progress' ? 'blue' : 'amber'}>
                    {project.status}
                  </Badge>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">Budget:</span>
                    <span className="ml-2 font-medium text-zinc-950 dark:text-white">{project.budget}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400">Hours:</span>
                    <span className="ml-2 font-medium text-zinc-950 dark:text-white">{project.hoursLogged}</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  Due: {project.dueDate}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between">
            <Subheading>Pending Approvals</Subheading>
            <Button href="/billing" plain>
              View all
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            {pendingApprovals.map((approval) => (
              <div
                key={approval.id}
                className="rounded-lg border border-zinc-950/5 p-4 dark:border-white/5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-medium text-zinc-950 dark:text-white">{approval.project}</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <Avatar initials="SC" className="size-4" />
                      <span>{approval.talent}</span>
                    </div>
                  </div>
                  <Badge color="amber">Pending</Badge>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {approval.hours} hours • {approval.date}
                  </div>
                  <div className="text-base font-semibold text-zinc-950 dark:text-white">{approval.amount}</div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">Approve</Button>
                  <Button size="sm" color="zinc" plain>
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
