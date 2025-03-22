import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pt-32 pb-24'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image src={image} alt={title || ''} className='object-cover' fill />
          </div>
        )}
        <header>
          <h1 className='title'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-xs'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>
        <main className='prose dark:prose-invert mt-16'>
          <MDXContent source={content} />
        </main>
        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}
