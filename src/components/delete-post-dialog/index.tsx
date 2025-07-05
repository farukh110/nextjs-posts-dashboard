"use client"

import { useDeletePost } from "@/lib/hooks"
import { useToast } from "@/hooks/use-toast"
import type { Post } from "@/lib/api"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog"
import { AlertDialogContent } from "@radix-ui/react-alert-dialog"

interface DeletePostDialogProps {
  post: Post | null
  onClose: () => void
}

export function DeletePostDialog({ post, onClose }: DeletePostDialogProps) {
  const deletePost = useDeletePost()
  const { toast } = useToast()

  const handleDelete = async () => {
    if (!post) return

    try {
      await deletePost.mutateAsync(post.id)
      toast({
        title: "Success",
        description: "Post deleted successfully.",
      })
      onClose()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post.",
        variant: "destructive",
      })
    }
  }

  return (
    <AlertDialog open={!!post} onOpenChange={() => onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Post</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete "{post?.title}"? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deletePost.isPending}
            className="bg-red-600 hover:bg-red-700"
          >
            {deletePost.isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
