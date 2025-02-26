"use client"

import { useState } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
              <Button variant="outline" size="icon" className="md:hidden mb-4" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-4 w-4" />
              </Button>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

