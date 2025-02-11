import { useLocation, Navigate, Outlet } from 'react-router'
import { DashboardLayout, PageContainer } from '@toolpad/core'

import { useSession } from '../SessionContext'

function Layout() {
  const { session } = useSession()
  const location = useLocation()

  if (!session) {
    const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`

    return <Navigate to={redirectTo} replace />
  }

  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  )
}

export default Layout
