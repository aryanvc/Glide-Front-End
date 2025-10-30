'use client'

import { useParams } from 'next/navigation'
import ProjectForm from '@/components/ProjectForm'

const projectData = {
  projectTitle: 'Q4 Financial Audit',
  companyOverview: 'Growing SaaS company focused on B2B solutions with 50+ employees.',
  scopeOfWork: 'Comprehensive financial audit for Q4 2024 including balance sheet review, income statement analysis, and compliance verification.',
  softwareSystems: ['QuickBooks', 'Excel'],
  yearsOfExpertise: '5-7',
  engagementDetails: 'fractional',
  engagementType: 'one-time',
  startDate: 'asap',
  estimatedHires: 1
}

export default function EditProjectPage() {
  const params = useParams()
  
  return (
    <ProjectForm 
      mode="edit" 
      initialData={projectData}
      projectId={params.id}
    />
  )
}
