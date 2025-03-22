import { getPosts } from "@/lib/posts"
import PostsWithSearch from "@/components/posts-with-search"

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className="pt-40 pb-44">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
