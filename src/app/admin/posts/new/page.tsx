'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Post } from '@/app/types/Post'
import PostForm from '@/components/post-form'
import { useCreatePost } from '@/lib/hooks'
import AdminLayout from '@/components/layouts/AdminLayout'

export default function NewPostPage() {

    const router = useRouter()
    const { mutate: createPost } = useCreatePost()

    const handleCreatePost = (post: Omit<Post, "id">) => {
        createPost(post, {
            onSuccess: () => {
                router.push("/admin")
            },
            onError: () => toast.error("Failed to create post"),
        })
    }

    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <PostForm onSubmit={handleCreatePost} />
        </AdminLayout>
    )
}
