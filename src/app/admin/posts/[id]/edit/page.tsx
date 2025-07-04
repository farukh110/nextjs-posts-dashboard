'use client'

import { useParams, useRouter } from 'next/navigation'
import { usePost, useUpdatePost } from '@/lib/hooks'
import { toast } from 'sonner'
import PostForm from '@/components/post-form'
import { Post } from '@/app/types/Post'
import AdminLayout from '@/components/layouts/AdminLayout'
import Spinner from '@/components/ui/spinner'

export default function EditPostPage() {
    const { id } = useParams() as { id: string }
    const router = useRouter()

    const { data: post, isLoading } = usePost(id)
    const { mutate: updatePost } = useUpdatePost()

    const handleUpdate = (updatedData: Omit<Post, 'id'>) => {
        updatePost(
            { ...updatedData, id: Number(id), userId: post?.userId || 1 },
            {
                onSuccess: () => {
                    toast.success('Post updated!')
                    router.push('/admin')
                },
                onError: () => toast.error('Failed to update post'),
            }
        )
    }

    return (
        <AdminLayout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
                {isLoading ? <div className="relative min-h-[calc(100vh-64px)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Spinner />
                    </div>
                </div> : post && <PostForm initialData={post} onSubmit={handleUpdate} />}
            </div>
        </AdminLayout>
    )
}
