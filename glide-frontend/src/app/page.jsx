import { ApplicationLayout } from './(app)/application-layout'
import AccountingDashboard from './(app)/accounting-dashboard/page'

export default function Home() {
  return (
    <ApplicationLayout>
      <AccountingDashboard />
    </ApplicationLayout>
  )
}
