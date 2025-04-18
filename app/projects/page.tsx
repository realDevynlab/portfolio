import { getProjects } from "@/lib/projects"
import Projects from "@/components/projects"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="pt-40 pb-24">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
