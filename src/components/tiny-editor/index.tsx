'use client'

import { useRef, useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function TinyEditor({
    value,
    onChange,
}: {
    value: string
    onChange: (content: string) => void
}) {
    const editorRef = useRef<any>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY

    if (!isClient) {
        return (
            <div className="border rounded-md p-2 bg-white dark:bg-gray-900">
                <p className="text-muted-foreground">Loading editor...</p>
            </div>
        )
    }

    return (
        <div className="border rounded-md p-2 bg-white dark:bg-gray-900">
            <Editor
                apiKey={apiKey}
                onInit={(_, editor) => (editorRef.current = editor)}
                value={value}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount',
                    ],
                    toolbar:
                        'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
                onEditorChange={onChange}
            />
        </div>
    )
}
