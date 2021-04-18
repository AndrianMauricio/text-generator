import Link from "next/link"

export interface CreateButtonTemplateProps {}

export default function CreateButtonTemplate({}: CreateButtonTemplateProps) {
  return (
    <Link href="/new-template">
      <a className="fixed bottom-0 left-0 w-full h-20 bg-blue-400 uppercase text-white text-xl flex items-center justify-center">
        Crear plantilla
      </a>
    </Link>
  )
}
