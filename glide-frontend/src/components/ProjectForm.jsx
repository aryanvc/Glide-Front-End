'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'
import { Badge } from '@/components/badge'

const yearsOfExpertise = [
  { id: 'na', label: 'N/A' },
  { id: '1-3', label: '1 – 3 Years' },
  { id: '3-5', label: '3 – 5 Years' },
  { id: '5-7', label: '5 – 7+ Years' },
  { id: '7-9', label: '7 – 9 Years' },
  { id: '9+', label: '9+ Years' }
]

const engagementDetails = [
  { id: 'full-time', label: 'Full-Time Equivalent' },
  { id: 'fractional', label: 'Fractional or Part-Time' }
]

const engagementTypes = [
  { id: 'recurring', label: 'Recurring / Monthly' },
  { id: 'one-time', label: 'One-Time Project' }
]

const startDateOptions = [
  { id: 'asap', label: 'ASAP' },
  { id: '1week', label: 'Within 1 Week' },
  { id: '2weeks', label: 'Within 2 Weeks' },
  { id: 'future', label: 'Planning for the Future' }
]

export default function ProjectForm({ mode = 'create', initialData = null, projectId = null }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    projectTitle: '',
    companyOverview: '',
    scopeOfWork: '',
    softwareSystems: [],
    yearsOfExpertise: '',
    engagementDetails: '',
    engagementType: '',
    startDate: '',
    estimatedHires: 1
  })
  const [softwareInput, setSoftwareInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setFormData(initialData)
    }
  }, [mode, initialData])

  const handleAddSoftware = (e) => {
    if (e.key === 'Enter' && softwareInput.trim()) {
      e.preventDefault()
      if (!formData.softwareSystems.includes(softwareInput.trim())) {
        setFormData(prev => ({
          ...prev,
          softwareSystems: [...prev.softwareSystems, softwareInput.trim()]
        }))
      }
      setSoftwareInput('')
    }
  }

  const handleRemoveSoftware = (system) => {
    setFormData(prev => ({
      ...prev,
      softwareSystems: prev.softwareSystems.filter(s => s !== system)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (mode === 'create') {
      const newProject = {
        id: `PRJ-${Date.now()}`,
        name: formData.projectTitle,
        description: formData.scopeOfWork.substring(0, 50) + '...',
        talent: 'TBD',
        status: 'Pending Approval',
        budget: '-',
        spent: '-',
        hoursLogged: 0,
        dueDate: '-',
        createdDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      }
      localStorage.setItem('newProject', JSON.stringify(newProject))
      router.push('/accounting-dashboard/projects')
    } else {
      // Handle edit logic
      router.push(`/accounting-dashboard/projects/${projectId}`)
    }
  }

  return (
    <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8">
      {/* Form Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <Heading className="text-lg">
            {mode === 'create' ? 'Create New Project' : 'Edit Project'}
          </Heading>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex gap-3">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="text-xs text-blue-900 dark:text-blue-100 font-medium mb-1">How it works</p>
              <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                Fill out the form to {mode === 'create' ? 'create your job posting' : 'update your project'}. See how it looks to talent on the right, then start receiving matches!
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Project Title *
            </label>
            <Input
              value={formData.projectTitle}
              onChange={(e) => setFormData(prev => ({ ...prev, projectTitle: e.target.value }))}
              placeholder="e.g., Monthly Bookkeeping & Financial Reporting"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Company Overview *
            </label>
            <Textarea
              value={formData.companyOverview}
              onChange={(e) => setFormData(prev => ({ ...prev, companyOverview: e.target.value }))}
              placeholder="Tell us about your company..."
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Scope of Work *
            </label>
            <Textarea
              value={formData.scopeOfWork}
              onChange={(e) => setFormData(prev => ({ ...prev, scopeOfWork: e.target.value }))}
              placeholder="Describe what you need help with..."
              rows={5}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Required Software
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.softwareSystems.map((system) => (
                <Badge key={system} color="zinc" className="cursor-pointer" onClick={() => handleRemoveSoftware(system)}>
                  {system} ×
                </Badge>
              ))}
            </div>
            <Input
              value={softwareInput}
              onChange={(e) => setSoftwareInput(e.target.value)}
              onKeyDown={handleAddSoftware}
              placeholder="Type software name and press Enter"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Preferred Years of Experience
            </label>
            <div className="flex flex-wrap gap-2">
              {yearsOfExpertise.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, yearsOfExpertise: option.id }))}
                  className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-all ${
                    formData.yearsOfExpertise === option.id
                      ? 'border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Start Date
            </label>
            <div className="flex flex-wrap gap-2">
              {startDateOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, startDate: option.id }))}
                  className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-all ${
                    formData.startDate === option.id
                      ? 'border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Engagement Details
            </label>
            <div className="flex flex-wrap gap-2">
              {engagementDetails.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, engagementDetails: option.id }))}
                  className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-all ${
                    formData.engagementDetails === option.id
                      ? 'border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Engagement Type
            </label>
            <div className="flex flex-wrap gap-2">
              {engagementTypes.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, engagementType: option.id }))}
                  className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-all ${
                    formData.engagementType === option.id
                      ? 'border-lime-500 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-900 dark:text-white mb-2">
              Estimated Hires: {formData.estimatedHires === 5 ? '5+' : formData.estimatedHires}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={formData.estimatedHires}
              onChange={(e) => setFormData(prev => ({ ...prev, estimatedHires: parseInt(e.target.value) }))}
              className="w-full h-1.5 accent-lime-500 bg-white rounded-full border border-lime-400 appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, rgb(132, 204, 22) 0%, rgb(132, 204, 22) ${(formData.estimatedHires - 1) * 25}%, white ${(formData.estimatedHires - 1) * 25}%, white 100%)`
              }}
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xs/4 py-2.5 px-4 rounded-lg border-0 flex items-center gap-2 font-medium bg-lime-400/20 text-lime-700 dark:bg-lime-400/10 dark:text-lime-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {mode === 'create' ? 'Creating...' : 'Updating...'}
                </>
              ) : (
                <>
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  {mode === 'create' ? 'Create Project' : 'Update Project'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-zinc-200 dark:bg-zinc-700" />

      {/* Preview Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">RP</span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Preview</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">How talent will see this</p>
            </div>
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Posted {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        <div className="lg:sticky lg:top-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            <div className="p-6 space-y-4">
              {formData.projectTitle ? (
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {formData.projectTitle}
                </h2>
              ) : (
                <h2 className="text-xl font-bold text-zinc-400 italic">
                  Enter project title...
                </h2>
              )}

              <div className="flex flex-wrap gap-2">
                {formData.engagementDetails && (
                  <Badge color="zinc">
                    {engagementDetails.find(o => o.id === formData.engagementDetails)?.label}
                  </Badge>
                )}
                {formData.engagementType && (
                  <Badge color="zinc">
                    {engagementTypes.find(o => o.id === formData.engagementType)?.label}
                  </Badge>
                )}
                {formData.startDate && (
                  <Badge color="zinc">
                    {startDateOptions.find(o => o.id === formData.startDate)?.label}
                  </Badge>
                )}
              </div>

              {formData.companyOverview ? (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">About the Company</h3>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {formData.companyOverview}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">About the Company</h3>
                  <p className="text-xs text-zinc-400 italic">Enter company overview...</p>
                </div>
              )}

              {formData.scopeOfWork ? (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">About the Project</h3>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {formData.scopeOfWork}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">About the Project</h3>
                  <p className="text-xs text-zinc-400 italic">Enter scope of work...</p>
                </div>
              )}

              {formData.softwareSystems.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-zinc-900 dark:text-white mb-2">Required Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.softwareSystems.map((system) => {
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

              <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-3 space-y-1.5">
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  <strong className="text-zinc-900 dark:text-white">Preferred Experience:</strong> {formData.yearsOfExpertise ? yearsOfExpertise.find(o => o.id === formData.yearsOfExpertise)?.label : 'Not specified'}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  <strong className="text-zinc-900 dark:text-white">Estimated Hires:</strong> {formData.estimatedHires === 5 ? '5+' : formData.estimatedHires} {formData.estimatedHires === 1 ? 'person' : 'people'}
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-800 px-6 py-4 border-t border-zinc-200 dark:border-zinc-700">
              <a 
                href="#" 
                className="w-full justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xs/4 py-2.5 px-4 rounded-lg border-0 flex items-center gap-2 font-medium bg-lime-400/20 text-lime-700 dark:bg-lime-400/10 dark:text-lime-300"
                onClick={(e) => e.preventDefault()}
              >
                Apply for this Position
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
