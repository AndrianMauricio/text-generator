export interface TemplateCardPros {
  title: string
  description: string
}

export default function TemplateCard({ title, description }: TemplateCardPros) {
  return (
    <section className="bg-white rounded-md shadow-lg overflow-hidden flex flex-col p-5 pb-4">
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="text-gray-400 text-xs overflow-hidden h-16 relative">
        <p>{description}</p>
        <div className="absolute bg-gradient-to-t from-white h-4 w-full bottom-0" />
      </div>
    </section>
  )
}
