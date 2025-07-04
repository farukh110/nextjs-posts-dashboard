"use client"

import { toast as sonnerToast } from "sonner"
import * as React from "react"

type ToastOptions = {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
  type?: "default" | "success" | "error" | "info" | "warning"
}

function toast({ title, description, action, duration = 3000, type = "default" }: ToastOptions) {
  return sonnerToast[type](title, {
    description,
    duration,
    action,
  })
}

function useToast() {
  return {
    toast,
    success: (title: string, description?: string) =>
      toast({ title, description, type: "success" }),
    error: (title: string, description?: string) =>
      toast({ title, description, type: "error" }),
    info: (title: string, description?: string) =>
      toast({ title, description, type: "info" }),
    warning: (title: string, description?: string) =>
      toast({ title, description, type: "warning" }),
    dismiss: sonnerToast.dismiss,
  }
}

export { useToast, toast };