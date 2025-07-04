"use client"

import { usePost } from "@/lib/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface PostDetailProps {
    postId: string
}

export function PostDetail({ postId }: PostDetailProps) {
    const { data: post, isLoading, error } = usePost(postId)

    if (isLoading) {
        return (
            <Card className="mx-auto px-16">
                <CardHeader>
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (error) {
        return (
            <Alert variant="destructive" className="max-w-4xl mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Failed to load post. Please try again later.</AlertDescription>
            </Alert>
        )
    }

    if (!post) {
        return (
            <div className="text-center py-12">
                <p className="text-slate-600">Post not found.</p>
            </div>
        )
    }

    return (
        <Card className="mx-auto">
            <CardHeader>
                <CardTitle className="text-3xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="prose prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </CardContent>
        </Card>
    )
}
