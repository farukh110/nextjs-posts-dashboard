'use client'

import { useState } from 'react'
import { Post } from '@/app/types/Post'
import dynamic from 'next/dynamic'
const TinyEditor = dynamic(() => import('../tiny-editor'), { ssr: false })

export default function PostForm({
    initialData,
    onSubmit,
}: {
    initialData?: Post
    onSubmit: (post: Omit<Post, 'id'>) => void
}) {
    const [title, setTitle] = useState(initialData?.title || '')
    const [body, setBody] = useState(initialData?.body || '')
    const [errors, setErrors] = useState<{ title?: string; body?: string }>({})

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors: typeof errors = {}

        if (!title.trim()) newErrors.title = 'Title is required'
        if (!body.trim() || body === '<p></p>') newErrors.body = 'Body is required'

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            onSubmit({ title, body })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-2 rounded"
                    placeholder="Post Title"
                />
                {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
            </div>

            <div>
                <TinyEditor value={body} onChange={setBody} />
                {errors.body && <p className="text-sm text-red-500 mt-1">{errors.body}</p>}
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {initialData ? 'Update Post' : 'Create Post'}
            </button>
        </form>
    )
}
