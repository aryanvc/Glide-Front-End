"use client"

import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { useState } from 'react'

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
  const [tab, setTab] = useState('payment') // 'payment' | 'invoices'
  const pendingEntries = billingEntries.filter(entry => entry.status === 'Pending Approval')
  const totalPending = pendingEntries.reduce((sum, entry) => sum + parseFloat(entry.amount.replace('$', '').replace(',', '')), 0)

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading className="text-xl">Billing</Heading>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Pending Total</div>
            <div className="text-2xl font-semibold text-zinc-950 dark:text-white">${totalPending.toLocaleString()}</div>
          </div>
          <Button>Approve All Pending</Button>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="mt-6 border-b border-zinc-200 dark:border-zinc-700">
        <nav className="flex gap-6">
          {[
            { id: 'payment', label: 'Payment Method' },
            { id: 'invoices', label: 'Invoices' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`pb-3 px-1 text-sm font-medium transition-colors ${
                tab === t.id
                  ? 'text-zinc-900 dark:text-white border-b-2 border-lime-500'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      {tab === 'payment' && (
        <div className="mt-6 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Saved Card</h3>
          <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-zinc-500" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><rect x="2" y="9" width="20" height="2"/></svg>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">Visa •••• 4242</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Expires 08/27</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button color="zinc" plain size="sm">Update</Button>
              <Button color="zinc" plain size="sm">Remove</Button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">Add a new card</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800 px-3 py-2 text-sm" placeholder="Card number" />
              <input className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800 px-3 py-2 text-sm" placeholder="Name on card" />
              <input className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800 px-3 py-2 text-sm" placeholder="MM/YY" />
              <input className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800 px-3 py-2 text-sm" placeholder="CVC" />
            </div>
            <Button className="mt-3">Save card</Button>
          </div>
        </div>
      )}

      {tab === 'invoices' && (
        <>
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
      )}
    </>
  )
}

