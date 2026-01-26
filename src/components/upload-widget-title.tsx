import { UploadCloud } from "lucide-react"

export function UploadWidgetTitle() {
  return (
    <div className="flex items-center gap-1.5 font-medium text-sm">
      <UploadCloud strokeWidth={1.5} className='size-4 text-zinc-400' />
      <span>Upload files</span>
    </div>
  )
}
