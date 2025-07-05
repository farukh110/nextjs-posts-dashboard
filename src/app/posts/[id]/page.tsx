'use client'

import { use } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ArrowLeft, Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { PostDetail } from '@/components/post-detail'
import { usePost } from '@/lib/hooks'
import Spinner from '@/components/ui/spinner'

interface PostPageProps {
    params: Promise<{ id: string }>
}

export default function PostPage({ params }: PostPageProps) {
    const { id } = use(params)
    const { theme, setTheme } = useTheme()
    const { data: post, isLoading } = usePost(id)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 transition-colors">

            <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between gap-2 overflow-x-auto">

                    <div className="flex items-center gap-2 min-w-0">
                        <Link href="/">
                            <Button variant="ghost" className="gap-1 text-sm font-medium px-2">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="hidden xs:inline">Back</span>
                            </Button>
                        </Link>
                        <h1 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                            Post Detail
                        </h1>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="flex-shrink-0"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </Button>
                </div>
            </header>


            <div className="w-full h-auto py-6 sm:py-8 bg-gradient-to-r from-blue-100 via-blue-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border-b dark:border-gray-700 shadow-inner">
                <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center gap-2 text-center text-base sm:text-lg font-semibold text-slate-800 dark:text-blue-200">
                    <div className="flex gap-2 flex-wrap justify-center items-center">
                        <Link
                            href="/"
                            className="hover:underline text-slate-800 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        {isLoading ? (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/60">
                                <Spinner />
                            </div>
                        ) : (
                            <span className="text-slate-800 dark:text-blue-300 truncate max-w-[80vw]">
                                {post?.title || `Post #${id}`}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-16 py-8">
                <PostDetail postId={id} />
            </main>
        </div>
    )
}
