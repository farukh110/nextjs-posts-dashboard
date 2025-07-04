'use client'

import { useState, ReactNode } from 'react'
import { Menu, X, FileText, UserCircle, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export default function AdminLayout({ children }: { children: ReactNode }) {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { setTheme, theme } = useTheme()

    const navLinks = [
        { name: 'Posts', icon: <FileText className="w-5 h-5" />, href: '/admin' },
    ]

    return (
        <div className="relative min-h-screen bg-muted text-muted-foreground">
            <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white dark:bg-gray-900 shadow px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>

                    <h1 className="hidden sm:block text-base font-semibold text-gray-900 dark:text-white">
                        Admin Panel
                    </h1>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>

                    <Link href="/admin/posts/new">
                        <Button size="sm" className="text-sm px-3 py-1 whitespace-nowrap">
                            New Post
                        </Button>
                    </Link>
                </div>
            </header>

            <div className="flex pt-16 min-h-screen">
                <aside
                    className={`
                        transition-transform duration-700 ease-in-out
                        transform top-16 left-0 z-30 w-64 h-[calc(100vh-64px)] bg-white dark:bg-gray-950
                        border-r shadow-sm p-6 fixed lg:static lg:sticky lg:top-16
                        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                      `}
                >
                    <div>
                        <nav className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                                >
                                    {link.icon}
                                    <span className="text-sm font-medium">{link.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="pt-3 border-t mt-6 dark:border-gray-800">
                        <div className="flex items-center gap-3 px-3">
                            <UserCircle className="w-5 h-5 text-gray-400" />
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                    </div>
                </aside>

                <div
                    className={`
            fixed inset-0 z-20 bg-black lg:hidden
            transition-opacity duration-700 ease-in-out
            ${sidebarOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
                    onClick={() => setSidebarOpen(false)}
                />

                <main className="flex-1 p-4 sm:p-6">{children}</main>
            </div>
        </div>
    )
}
