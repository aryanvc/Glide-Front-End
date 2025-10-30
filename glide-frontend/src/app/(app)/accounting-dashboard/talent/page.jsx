'use client'

import { useState } from 'react'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Dialog, DialogTitle, DialogBody, DialogActions } from '@/components/dialog'

const talent = [
  { name: 'Sarah CPA', avatar: 'SC' },
  { name: 'Mike Tax', avatar: 'MT' },
  { name: 'Lisa Budget', avatar: 'LB' },
  { name: 'David Payroll', avatar: 'DP' },
  { name: 'Emma Reports', avatar: 'ER' },
  { name: 'John Bookkeeper', avatar: 'JB' },
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
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" color="zinc" plain onClick={() => onViewProfile(person)}>View Profile</Button>
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
                <div className="flex-1 flex items-start gap-4">
                  <Avatar initials={selected.avatar} className="size-16 sm:size-20" square />
                  <div>
                    <DialogTitle className="text-2xl sm:text-3xl font-semibold">
                      {selected.name}
                    </DialogTitle>
                  </div>
                </div>

                {/* Right: CTAs */}
                <div className="lg:w-64 flex lg:flex-col gap-2">
                  <Button className="w-full">Start Intro Call</Button>
                  <Button className="w-full" color="zinc" plain>Send Message</Button>
                </div>
              </div>

              {/* Bio / Skills */}
              <DialogBody>
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">About</h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">Experienced accounting professional. Strong communicator and process‑driven.</p>

                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Core Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['QuickBooks', 'Xero', 'Excel', 'GAAP', 'Audit', 'Tax'].map((skill) => (
                        <span key={skill} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-xs text-zinc-700 dark:text-zinc-300">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Notes</h3>
                    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900">
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">Add internal notes here later.</div>
                    </div>
                  </div>
                </div>
              </DialogBody>

              <DialogActions>
                <Button onClick={() => setOpen(false)} color="zinc" plain>Close</Button>
              </DialogActions>
            </div>
          </div>
        </Dialog>
      )}
    </>
  )
}

