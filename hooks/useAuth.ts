import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useAuth() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setIsLoading(false)

        if (!session?.user) {
          router.push('/auth')
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [router])

  return { isLoading, user }
}