<!-- 0d65c3c2-db9f-4b36-aa7d-0f447db988b8 083d117a-f54a-465b-97dc-3a3509a7fb94 -->
# Live Job Description Editor with Direct Preview Editing

## Overview

Build an overlay-style editor where clients edit directly on the job posting preview that talent will see. This provides immediate visual feedback and is more intuitive for older users (50-60+) who may prefer direct manipulation over abstract forms.

## Implementation Approach

### 1. Replace Form Page (demo/javascript/src/app/(app)/projects/new/page.jsx)

Replace the current form with a direct editing interface:

- Full-page job posting preview matching what talent will see
- Click-to-edit functionality on each section
- Large, clear "Edit" indicators on hover
- Floating save button at bottom right
- Visual indicator at top: "Preview Mode - This is what talent will see"

### 2. Job Posting Preview Layout

Design clean, card-based layout showing:

- **Header Section**: Company logo placeholder, "Rova Partners", "Posted by Rohan Prajapati"
- **Job Title**: Large, prominent heading (click to edit)
- **Key Details**: Badges for engagement type, experience level, start date
- **Project Description**: Rich text area (click to edit)
- **Requirements Section**: Software systems as badge pills, experience requirements
- **Engagement Details**: Clear sections for full/part-time, duration, time overlap
- **Apply Button**: Non-functional "Apply for this Position" CTA (visual only)

### 3. Editing Interactions

Simple, senior-friendly editing:

- **Hover state**: Show large "Click to edit" text overlay with pencil icon
- **Click to edit**: Replace section with input/textarea, large font size (16px minimum)
- **Inline editing**: Edit directly in place, no modals or sidebars
- **Auto-save**: Save changes automatically after 2 seconds of no typing
- **Clear buttons**: Large "Done" button to finish editing section
- **Validation**: Red border if required fields empty, simple error messages

### 4. Components to Use

Leverage existing Catalyst components:

- `Heading` and `Subheading` for job title and sections
- `Input` and `Textarea` for editable fields (sized up for accessibility)
- `Badge` for software systems, engagement type, experience level
- `Button` for "Done" and "Publish Job" actions
- `Avatar` for company/user representation

### 5. State Management

Track editable fields:

```javascript
const [jobData, setJobData] = useState({
  title: 'Click to add project title',
  description: 'Click to add project description...',
  softwareSystems: [],
  experienceLevel: '',
  engagementType: '',
  startDate: '',
  timeOverlap: [],
  estimatedHires: ''
})
const [editingSection, setEditingSection] = useState(null)
```

### 6. Visual Design

Senior-friendly design decisions:

- **Large text**: Minimum 16px for body, 24px for headings
- **High contrast**: Dark text on white background, clear borders
- **Generous spacing**: 24px+ between sections
- **Clear CTAs**: Large buttons with descriptive text
- **Progress indicator**: Show which required fields are complete
- **Undo button**: Allow reverting recent changes

### 7. Final Touches

- Banner at top: "Preview Mode - This is what your job posting will look like to talent"
- Required field indicator: Small checklist in corner showing completion
- Draft auto-save: Save to localStorage every change
- Publish button: Bottom right, lime green accent (matching app theme)

## Files to Modify

1. `demo/javascript/src/app/(app)/projects/new/page.jsx` - Complete rewrite with new editing interface
2. Keep all existing Catalyst components - no new component creation needed

## Key Benefits

- More intuitive for non-technical users
- Immediate visual feedback
- Less cognitive load than abstract forms
- Clear preview of final result
- Familiar editing pattern (click to edit)

### To-dos

- [x] Replace projects/new/page.jsx with live preview editor structure
- [x] Build job posting preview layout with header, title, details, description, requirements
- [x] Implement click-to-edit functionality for each section with hover states
- [x] Add inline editing with Input/Textarea components, large fonts for accessibility
- [x] Add badge/pill selection UI for software systems, experience level, engagement details
- [x] Implement auto-save functionality and draft persistence
- [x] Add publish button and completion validation

### Additional Features Completed

- [x] Add undo/redo functionality with history tracking
- [x] Add red border validation for required fields with clear error messages
- [x] Add progress indicator showing completion status
- [x] Enhance hover states with pencil icon and better visual feedback
- [x] Add floating save indicator at bottom right
- [x] Ensure all interactive elements meet accessibility standards for 50-60+ users
- [x] Add keyboard navigation support for editing sections
- [x] Add draft management with clear save/load states
- [x] Ensure mobile responsiveness for all editing interactions
- [x] Final polish and testing of all editing interactions

## ✅ COMPLETED - All Features Implemented!

The live job description editor is now fully functional and accessible at:

**🌐 http://localhost:3003/projects/new**

### What's Working:

1. **Live Preview Mode** - Shows exactly what talent will see
2. **Click-to-Edit** - Hover over any section to see pencil icon and "Click to edit"
3. **Template Text** - Helpful placeholder text throughout
4. **Undo/Redo** - Full history tracking with undo/redo buttons
5. **Real-time Validation** - Red borders and error messages for required fields
6. **Auto-save** - Automatic saving with visual indicator
7. **Progress Tracking** - Shows completion status in banner
8. **Accessibility** - Full keyboard navigation and ARIA support
9. **Mobile Responsive** - Works on all screen sizes
10. **Senior-Friendly** - Large fonts, high contrast, clear interactions
