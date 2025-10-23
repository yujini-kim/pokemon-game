import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface AuthFormOptions<T> {
  onSubmitHandler: (values: T) => Promise<unknown>
  successMessage: string
  redirectPath: string
  errorMessage: string
}

export function useAuthForm<T>({
  onSubmitHandler,
  successMessage,
  errorMessage,
  redirectPath,
}: AuthFormOptions<T>) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: T) => {
    setLoading(true)
    try {
      await onSubmitHandler(values)
      toast({ title: successMessage })
      router.push(redirectPath)
    } catch {
      toast({ title: errorMessage, description: '다시 시도해주세요.' })
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleSubmit }
}
