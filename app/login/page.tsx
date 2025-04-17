'use client'

import { useState } from 'react'
import { signInWithEmail } from '@/lib/auth'
import { useAuth } from '@/lib/providers/AuthProvider'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user } = useAuth()

  if (user) {
    redirect('/dashboard')
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await signInWithEmail(email, password)
    if (error) {
      console.error('Error logging in:', error.message)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  )
}