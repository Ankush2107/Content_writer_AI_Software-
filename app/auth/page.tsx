'use client'

import { useState, useEffect } from 'react'
import { SignInForm } from '@/components/auth/SignInForm'
import { SignUpForm } from '@/components/auth/SignUpForm'
import { supabase } from '@/lib/supabase'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectedFrom = searchParams.get('redirectedFrom')

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          router.push(redirectedFrom || '/dashboard')
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [router, redirectedFrom])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 space-y-6 bg-card rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">
            {mode === 'signin' ? 'Sign In' : 'Create an Account'}
          </h1>
          <p className="text-muted-foreground">
            {mode === 'signin' 
              ? 'Enter your credentials to access your account'
              : 'Fill in the details below to create your account'}
          </p>
        </div>

        {mode === 'signin' ? <SignInForm /> : <SignUpForm />}

        <div className="text-center">
          <button
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            className="text-primary hover:underline"
          >
            {mode === 'signin' 
              ? "Don't have an account? Sign up" 
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  )
}