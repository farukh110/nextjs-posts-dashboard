'use client'

import AdminLayout from '@/components/layouts/AdminLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useDeletePost, usePosts } from '@/lib/hooks'
import Link from 'next/link'
import { Edit, Trash2 } from 'lucide-react'
import Spinner from '@/components/ui/spinner'
import { toast } from 'sonner'

export default function AdminDashboard() {
    const { data: posts, isLoading } = usePosts()
    const { mutate: deletePost } = useDeletePost()

    return (
        <AdminLayout>
            {isLoading ? (
                <div className="flex items-center justify-center h-[calc(100vh-64px)]">
                    <Spinner />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {posts?.map((post) => (
                        <Card key={post.id} className="flex flex-col justify-between h-full">
                            <CardHeader>
                                <CardTitle className="truncate">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <div
                                    className="text-sm text-muted-foreground line-clamp-3 mb-4"
                                    dangerouslySetInnerHTML={{ __html: post?.body }}
                                />

                                <div className="flex justify-center gap-3 mt-4">
                                    <Link href={`/admin/posts/${post.id}/edit`}>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex items-center gap-1 px-4 py-2"
                                        >
                                            <Edit className="w-4 h-4" />
                                            Edit
                                        </Button>
                                    </Link>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                size="sm"
                                                className="flex items-center gap-1 px-4 py-2 text-white bg-red-600 hover:bg-red-700"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                                Delete
                                            </Button>
                                        </AlertDialogTrigger>

                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This will permanently delete "<strong>{post.title}</strong>".
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() =>
                                                        deletePost(post.id, {
                                                            onSuccess: () => toast.success('Post deleted successfully.'),
                                                            onError: () => toast.error('Failed to delete post.'),
                                                        })
                                                    }
                                                >
                                                    Yes, Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </AdminLayout>
    )
}
