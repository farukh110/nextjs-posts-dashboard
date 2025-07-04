// components/ui/spinner.tsx
import { Loader2 } from 'lucide-react'

export default function Spinner({ size = 10 }: { size?: number }) {
    return (
        <Loader2 className={`h-${size} w-${size} animate-spin text-primary`} />
    )
}