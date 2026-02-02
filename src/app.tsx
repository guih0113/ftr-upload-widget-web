import { UploadWidget } from './components/upload-widget'
import './index.css'
import { Toaster } from 'sonner'

export function App() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center p-10">
      <Toaster richColors />
      <UploadWidget />
    </main>
  )
}
