import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Content Writer Software",
  description: "AI-powered content writing tool",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body 
          className={inter.className}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
