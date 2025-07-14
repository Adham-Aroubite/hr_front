'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredUserType?: 'HR' | 'CANDIDATE'
}

export function ProtectedRoute({ children, requiredUserType }: ProtectedRouteProps) {
  const { isAuthenticated, user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.push('/login')
        return
      }

      if (requiredUserType && user?.profile?.user_type !== requiredUserType) {
        // Redirect to appropriate dashboard
        const redirectPath = user?.profile?.user_type === 'HR' ? '/dashboard' : '/candidate/dashboard'
        router.push(redirectPath)
      }
    }
  }, [isAuthenticated, user, loading, requiredUserType, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  if (requiredUserType && user?.profile?.user_type !== requiredUserType) {
    return null
  }

  return <>{children}</>
}