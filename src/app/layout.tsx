import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/providers"
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Posts Dashboard",
  description: "A modern dashboard for managing posts",
  icons: {
    icon: "/post.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
