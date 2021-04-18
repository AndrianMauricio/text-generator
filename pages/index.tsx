import CreateButtonTemplate from "components/CreateTemplateButton"
import TemplateCard from "components/TemplateCard"

export default function Home() {
  return (
    <div className="container p-10">
      <TemplateCard
        title="Título"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis voluptatibus deleniti tenetur voluptates mollitia corporis ratione quia iusto minima! Facere deserunt veritatis laudantium tenetur error accusamus dolorem ipsa minus."
      />
      <CreateButtonTemplate />
    </div>
  )
}
