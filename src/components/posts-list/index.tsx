"use client"

import { usePosts } from "@/lib/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Eye } from "lucide-react"
import Link from "next/link"
import Spinner from "../ui/spinner"

export function PostsList() {
    const { data: posts, isLoading, error } = usePosts()

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/60">
                <Spinner size={10} />
            </div>
        )
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Failed to load posts. Please try again later.</AlertDescription>
            </Alert>
        )
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-slate-600">No posts found.</p>
            </div>
        )
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-slate-600 line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: post.body }}></div>
                        <Link href={`/posts/${post.id}`}>
                            <Button className="gap-2">
                                <Eye className="h-4 w-4" />
                                Read More
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
