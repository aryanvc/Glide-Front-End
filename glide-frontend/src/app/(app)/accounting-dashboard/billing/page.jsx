import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

const billingEntries = [
  {
    id: 'PAY-001',
    project: 'Q4 Financial Audit',
    talent: 'Sarah CPA',
    amount: '$420',
    hours: 8,
    date: 'Jan 15, 2025',
    status: 'Pending Approval',
    description: 'Financial audit work - Week 2',
  },
  {
    id: 'PAY-002',
    project: 'Tax Prep & Filing',
    talent: 'Mike Tax',
    amount: '$315',
    hours: 6,
    date: 'Jan 14, 2025',
    status: 'Pending Approval',
    description: 'Tax document review and analysis',
  },
  {
    id: 'PAY-003',
    project: 'Budget Planning',
    talent: 'Lisa Budget',
    amount: '$225',
    hours: 5,
    date: 'Jan 13, 2025',
    status: 'Pending Approval',
    description: 'Budget modeling and forecasting',
  },
  {
    id: 'PAY-004',
    project: 'Financial Reporting',
    talent: 'Emma Reports',
    amount: '$550',
    hours: 10,
    date: 'Jan 12, 2025',
    status: 'Approved',
    description: 'Monthly financial reports',
  },
  {
    id: 'PAY-005',
    project: 'Q4 Financial Audit',
    talent: 'Sarah CPA',
    amount: '$750',
    hours: 14,
    date: 'Jan 10, 2025',
    status: 'Approved',
    description: 'Financial audit work - Week 1',
  },
  {
    id: 'PAY-006',
    project: 'Payroll Setup',
    talent: 'David Payroll',
    amount: '$680',
    hours: 12,
    date: 'Jan 8, 2025',
    status: 'Paid',
    description: 'Final payroll system configuration',
  },
]

export default function BillingPage() {
  const pendingEntries = billingEntries.filter(entry => entry.status === 'Pending Approval')
  const totalPending = pendingEntries.reduce((sum, entry) => sum + parseFloat(entry.amount.replace('$', '').replace(',', '')), 0)

  return (
    <>
      <div className="flex items-end justify-between">
        <Heading className="text-xl">Billing</Heading>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Pending Total</div>
            <div className="text-2xl font-semibold text-zinc-950 dark:text-white">${totalPending.toLocaleString()}</div>
          </div>
          <Button>
            Approve All Pending
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <Subheading>Pending Approvals</Subheading>
        <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
          <TableHead>
            <TableRow>
              <TableHeader>Project</TableHeader>
              <TableHeader>Talent</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Hours</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader className="text-right">Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>
                  <div className="text-sm font-medium text-zinc-950 dark:text-white">{entry.project}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar initials="SC" className="size-5" />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{entry.talent}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-zinc-500">{entry.description}</TableCell>
                <TableCell className="text-xs text-zinc-500">{entry.hours}</TableCell>
                <TableCell className="text-sm font-medium text-zinc-950 dark:text-white">{entry.amount}</TableCell>
                <TableCell className="text-xs text-zinc-500">{entry.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" color="zinc" plain>
                      Reject
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-14">
        <Subheading>Recent Activity</Subheading>
        <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
          <TableHead>
            <TableRow>
              <TableHeader>Project</TableHeader>
              <TableHeader>Talent</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Hours</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {billingEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>
                  <div className="text-sm font-medium text-zinc-950 dark:text-white">{entry.project}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar initials="SC" className="size-5" />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{entry.talent}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-zinc-500">{entry.description}</TableCell>
                <TableCell className="text-xs text-zinc-500">{entry.hours}</TableCell>
                <TableCell className="text-sm font-medium text-zinc-950 dark:text-white">{entry.amount}</TableCell>
                <TableCell className="text-xs text-zinc-500">{entry.date}</TableCell>
                <TableCell>
                  <Badge 
                    color={
                      entry.status === 'Paid' ? 'zinc' : 
                      entry.status === 'Approved' ? 'lime' : 
                      'amber'
                    }
                  >
                    {entry.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

