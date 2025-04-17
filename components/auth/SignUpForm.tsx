'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignUpValues = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const [error, setError] = useState<string>('')
  const [isVerificationEmailSent, setIsVerificationEmailSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpValues) => {
    try {
      const { error, data: signUpData } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
      if (signUpData.user && !signUpData.session) {
        setIsVerificationEmailSent(true)
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (isVerificationEmailSent) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-primary/10 rounded-lg text-center">
          <svg
            className="mx-auto h-12 w-12 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-semibold">Check your email</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We've sent you a verification link to your email address.
            Please check your inbox and click the link to verify your account.
          </p>
        </div>
        <p className="text-sm text-center text-muted-foreground">
          Didn't receive the email?{' '}
          <button
            onClick={() => setIsVerificationEmailSent(false)}
            className="text-primary hover:underline"
          >
            Try again
          </button>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          {...register('password')}
          type="password"
          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium">
          Confirm Password
        </label>
        <input
          {...register('confirmPassword')}
          type="password"
          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
        )}
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive p-3 rounded-md">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2"
      >
        {isSubmitting ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  )
}