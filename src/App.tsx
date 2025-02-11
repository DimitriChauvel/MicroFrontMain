import { useCallback, useMemo, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { Navigation, Session } from '@toolpad/core'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Dashboard } from '@mui/icons-material'

import { SessionContext } from './SessionContext'

const navigation: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <Dashboard />,
  },
]

const branding = {
  title: 'MicroFront'
}

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const navigate = useNavigate()

  const signIn = useCallback(() => {
    navigate('/sign-in')
  }, [navigate])

  const signOut = useCallback(() => {
    setSession(null)
    navigate('/sign-in')
  }, [navigate])

  const sessionContextValue = useMemo(() => ({session, setSession}), [session, setSession])

  return (
    <SessionContext.Provider value={sessionContextValue}>
      <ReactRouterAppProvider
        navigation={navigation}
        branding={branding}
        session={session}
        authentication={{signIn, signOut}}
      >
        <Outlet />
      </ReactRouterAppProvider>
    </SessionContext.Provider>
  )
}

export default App
