# Fractional Accounting Marketplace Dashboard

A complete client-facing dashboard for a fractional accounting marketplace, built using the Catalyst UI Kit sidebar layout.

## Overview

This dashboard enables clients to:
1. **Create projects** for their accounting needs
2. **Assign talent** to work on those projects
3. **View and approve payouts** for completed work

## Features

### Navigation Structure

The dashboard includes four main sections accessible via the sidebar:

#### 1. Overview (`/accounting-dashboard`)
- **Key Metrics**:
  - Active Projects count
  - Total Spend tracking
  - Active Talent count
  - Pending Approvals count
- **Active Projects Card**: Shows recent projects with talent, budget, hours, and due dates
- **Pending Approvals Card**: Quick access to approve/review talent payouts

#### 2. Projects (`/accounting-dashboard/projects`)
- Complete project list with details:
  - Project name and description
  - Assigned talent
  - Status (In Progress, Pending Approval, Completed)
  - Budget vs. spent tracking
  - Hours logged
  - Due dates
- "New Project" button to create projects
- Clickable rows for detailed project views

#### 3. Talent (`/accounting-dashboard/talent`)
- Browse available accounting professionals
- View talent profiles with:
  - Specialties (Auditing, Tax Prep, Financial Planning, etc.)
  - Experience level
  - Hourly rates
  - Availability status
  - Completed projects count
  - Star ratings
- Search functionality
- "Assign" button to assign talent to projects
- "Invite Talent" to onboard new professionals

#### 4. Billing (`/accounting-dashboard/billing`)
- **Pending Approvals Section**:
  - List of payouts awaiting approval
  - Project, talent, hours, and amount details
  - Approve/Reject actions
  - Total pending amount displayed
  - "Approve All Pending" bulk action
- **Recent Activity Section**:
  - Complete history of all billing entries
  - Status tracking (Pending, Approved, Paid)
  - Payment history with dates

## User Flow

### Creating a Project
1. Navigate to **Projects** page
2. Click "New Project" button
3. Fill in project details (name, description, budget, due date)
4. Assign talent from available pool

### Assigning Talent
1. Go to **Talent** page
2. Browse available professionals
3. Filter by specialty or availability
4. Click "Assign" on desired talent
5. Assign to specific project

### Approving Payouts
1. View **Overview** page to see pending approvals
2. Or navigate to **Billing** page for full list
3. Review talent hours and work description
4. Click "Approve" to approve payment
5. Or click "Reject" to send back for review

## Design Highlights

- **Clean, Professional UI**: Modern design suitable for business clients
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Status Indicators**: Color-coded badges for quick status recognition
- **Data Tables**: Well-organized information display
- **Action Buttons**: Clear CTAs for key workflows
- **Dark Mode Support**: Automatic dark mode styling included

## Components Used

Built entirely with Catalyst UI Kit components:
- `SidebarLayout` - Main responsive layout
- `Sidebar` & `Navbar` - Navigation components
- `Avatar` - User/talent avatars
- `Badge` - Status indicators
- `Button` - Action buttons
- `Table` - Data tables with clickable rows
- `Stat` - Dashboard metrics
- `Heading` & `Subheading` - Typography
- `Input` - Search functionality
- `Dropdown` - Account menus

## Running the Demo

1. Navigate to the demo directory:
   ```bash
   cd demo/javascript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. Click "Accounting Dashboard" in the sidebar to access the marketplace

## Data Structure

The dashboard uses mock data demonstrating:
- **Projects**: Multiple projects in various stages
- **Talent**: 6 accounting professionals with specialties
- **Billing**: Mix of pending, approved, and paid entries
- **Metrics**: Calculated from project and billing data

## Customization

All files are located in `/demo/javascript/src/app/(app)/accounting-dashboard/`:
- `accounting-dashboard.jsx` - Layout component
- `page.jsx` - Overview page
- `projects/page.jsx` - Projects management
- `talent/page.jsx` - Talent browser
- `billing/page.jsx` - Billing and approvals

Customize by:
- Modifying mock data in each page component
- Adding new fields to the data structures
- Creating detail pages for individual projects/talent
- Integrating with your backend API
- Adjusting Tailwind CSS classes for styling

## Next Steps

To make this production-ready:
1. Connect to backend API for data fetching
2. Add authentication and user context
3. Implement form validation for project creation
4. Add project detail pages
5. Implement talent assignment flow
6. Add payment processing integration
7. Include email notifications for approvals
8. Add search and filtering functionality

