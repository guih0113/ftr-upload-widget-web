import { UploadWidgetUploadItem } from "./upload-widget-upload-item";

export function UploadWidgetUploadList() {
  return (
    <div className="flex flex-col gap-3 px-3">
      <span className="font-medium text-xs">
        Uploaded Files{'  '}
        <span className="text-zinc-400">(2)</span>
      </span>

      <div className="space-y-2">
        <UploadWidgetUploadItem />
        <UploadWidgetUploadItem />
      </div>
    </div>
  )
}
