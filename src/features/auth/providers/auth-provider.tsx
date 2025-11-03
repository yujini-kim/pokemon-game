'use client'
import { useAuthObserver } from '@/features/auth/hooks/use-auth-observer'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useAuthObserver()
  return <>{children}</>
}
