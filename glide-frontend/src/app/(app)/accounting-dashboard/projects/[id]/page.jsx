'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import ApplicantCard from '@/components/ApplicantCard'

const projectsData = {
  'PRJ-001': {
    id: 'PRJ-001',
    title: 'Q4 Financial Audit',
    description: 'Complete financial audit for Q4 2024',
    status: 'In Progress',
    budget: '$5,000',
    spent: '$2,100',
    hoursLogged: 42,
    dueDate: 'Mar 15, 2025',
    createdDate: 'Jan 1, 2025',
    scopeOfWork: 'Comprehensive financial audit for Q4 2024 including balance sheet review, income statement analysis, and compliance verification.',
    companyOverview: 'Growing SaaS company focused on B2B solutions with 50+ employees.',
    talent: {
      name: 'Sarah CPA',
      initials: 'SC',
      joined: 'Jan 5, 2025'
    },
    applicants: [
      {
        id: 'APP-001',
        name: 'Sarah CPA',
        initials: 'SC',
        status: 'Active',
        yearsExperience: '8+',
        hourlyRate: '$120',
        location: 'San Francisco, CA',
        lastActive: '2 hours ago',
        matchScore: 95,
        skills: ['QuickBooks', 'Excel', 'Financial Analysis', 'Tax Preparation'],
        availability: 'Immediately',
        resumeUrl: '/resumes/sarah-cpa.pdf'
      },
      {
        id: 'APP-002',
        name: 'Michael Chen',
        initials: 'MC',
        status: 'Pending Review',
        yearsExperience: '5+',
        hourlyRate: '$100',
        location: 'New York, NY',
        lastActive: '1 day ago',
        matchScore: 87,
        skills: ['Xero', 'Bookkeeping', 'Financial Reporting'],
        availability: 'Within 1 week',
        resumeUrl: '/resumes/michael-chen.pdf'
      },
      {
        id: 'APP-003',
        name: 'Jennifer Wright',
        initials: 'JW',
        status: 'Pending Review',
        yearsExperience: '12+',
        hourlyRate: '$150',
        location: 'Austin, TX',
        lastActive: '3 days ago',
        matchScore: 82,
        skills: ['CPA', 'Audit', 'Compliance', 'Tax Planning'],
        availability: 'Within 2 weeks',
        resumeUrl: '/resumes/jennifer-wright.pdf'
      }
    ],
    billing: {
      invoices: [
        { id: 'INV-001', date: 'Jan 15, 2025', amount: '$1,200', status: 'Paid' },
        { id: 'INV-002', date: 'Jan 1, 2025', amount: '$900', status: 'Paid' }
      ],
      upcoming: [
        { date: 'Feb 1, 2025', amount: '$1,200', description: 'Monthly retainer' }
      ]
    },
    activity: [
      { date: 'Jan 15, 2025', action: 'Invoice INV-001 paid', type: 'billing' },
      { date: 'Jan 12, 2025', action: 'Application submitted by Michael Chen', type: 'applicant' },
      { date: 'Jan 10, 2025', action: 'Application submitted by Jennifer Wright', type: 'applicant' },
      { date: 'Jan 5, 2025', action: 'Sarah CPA accepted project', type: 'hiring' },
      { date: 'Jan 1, 2025', action: 'Project created', type: 'system' }
    ]
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const projectId = params.id
    if (projectsData[projectId]) {
      setProject(projectsData[projectId])
    }
  }, [params.id])

  const handleViewProfile = (applicant) => {
    // Open profile modal or navigate to profile page
    console.log('View profile:', applicant)
  }

  const handleSendMessage = (applicant) => {
    // Open message interface
    console.log('Send message to:', applicant)
  }

  const getTabsForStatus = () => {
    return [
      { id: 'overview', label: 'Overview' },
      { id: 'applicants', label: 'Applicants' },
      { id: 'billing', label: 'Billing' },
    ]
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-zinc-500">Project not found</p>
      </div>
    )
  }

  const tabs = getTabsForStatus()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mt-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
          <div>
            <Heading className="text-2xl">{project.title}</Heading>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge 
            color={project.status === 'Completed' ? 'zinc' : project.status === 'In Progress' ? 'blue' : 'amber'}
          >
            {project.status}
          </Badge>
          <Button 
            color="zinc" 
            plain
            onClick={() => router.push(`/accounting-dashboard/projects/${project.id}/edit`)}
          >
            Edit Project
          </Button>
        </div>
      </div>

      {/* Stats Cards removed per request */}

      {/* Tabs */}
      <div className="border-b border-zinc-200 dark:border-zinc-700">
        <nav className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-zinc-900 dark:text-white border-b-2 border-lime-500'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-6 space-y-4">
              {/* Job Title */}
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h2>

              {/* Badges Section */}
              <div className="flex flex-wrap gap-2">
                {project.engagementDetails && (
                  <Badge color="zinc">
                    {project.engagementDetails}
                  </Badge>
                )}
                {project.engagementType && (
                  <Badge color="zinc">
                    {project.engagementType}
                  </Badge>
                )}
                {project.startDate && (
                  <Badge color="zinc">
                    {project.startDate}
                  </Badge>
                )}
              </div>

              {/* Company Overview */}
              {project.companyOverview && (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">About the Company</h3>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {project.companyOverview}
                  </p>
                </div>
              )}

              {/* Statement of Work (SOW) */}
              {project.scopeOfWork && (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">Statement of Work (SOW)</h3>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {project.scopeOfWork}
                  </p>
                </div>
              )}

              {/* Required Software */}
              {project.softwareSystems && project.softwareSystems.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">Required Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.softwareSystems.map((system) => {
                      const getLogo = (name) => {
                        const lowerName = name.toLowerCase()
                        if (lowerName.includes('ramp')) {
                          return (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#2563EB"/>
                              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563EB" strokeWidth="1.5" fill="none"/>
                            </svg>
                          )
                        } else if (lowerName.includes('quickbook')) {
                          return (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" fill="#0077C5"/>
                              <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6" stroke="white" strokeWidth="2" fill="none"/>
                            </svg>
                          )
                        } else if (lowerName.includes('xero')) {
                          return (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="2" y="2" width="20" height="20" rx="2" fill="#13B5EA"/>
                              <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          )
                        }
                        return null
                      }
                      
                      return (
                        <Badge key={system} color="zinc" className="flex items-center gap-1.5">
                          {getLogo(system)}
                          {system}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Info Box */}
              <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-3 space-y-1.5">
                {project.yearsOfExperience && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-white">Preferred Experience:</strong> {project.yearsOfExperience}
                  </p>
                )}
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  <strong className="text-zinc-900 dark:text-white">Estimated Hires:</strong> {project.estimatedHires || 1} {(project.estimatedHires || 1) === 1 ? 'person' : 'people'}
                </p>
              </div>

              {/* Assigned Talent */}
              {project.talent && (
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-3">Assigned Talent</h3>
                  <div className="flex items-center gap-3">
                    <Avatar initials={project.talent.initials} className="size-10" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-white">{project.talent.name}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Joined {project.talent.joined}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'applicants' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {project.applicants.length} Applicants
              </h3>
              <div className="flex gap-2">
                <Button color="zinc" plain className="text-xs">Filter</Button>
                <Button color="zinc" plain className="text-xs">Sort</Button>
              </div>
            </div>
            
            {project.applicants.map((applicant) => (
              <ApplicantCard
                key={applicant.id}
                applicant={applicant}
                onViewProfile={handleViewProfile}
                onSendMessage={handleSendMessage}
              />
            ))}
          </div>
        )}

        {activeTab === 'billing' && project.billing && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Invoices</h3>
              <div className="space-y-3">
                {project.billing.invoices && project.billing.invoices.length > 0 ? (
                  project.billing.invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-white">{invoice.id}</p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">{invoice.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-zinc-900 dark:text-white">{invoice.amount}</span>
                        <Badge color="zinc">{invoice.status}</Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">No invoices yet</p>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Upcoming Payments</h3>
              <div className="space-y-3">
                {project.billing.upcoming && project.billing.upcoming.length > 0 ? (
                  project.billing.upcoming.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-white">{payment.description}</p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">{payment.date}</p>
                      </div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">{payment.amount}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">No upcoming payments</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Activity tab removed per request */}
      </div>
    </div>
  )
}

