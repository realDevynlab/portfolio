"use client"

import { useState } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Posts from "@/components/posts"
import { PostMetadata } from "@/lib/posts"

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState("")
  const filtered = posts.filter(post => post.title?.toLowerCase().includes(query.toLowerCase()))

  const isFiltered = query.length > 0

  function resetFilter() {
    setQuery("")
  }

  return (
    <div>
      <div className="mb-12 flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search posts..."
          className="h-9 w-full sm:w-1/2"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button size="sm" variant="secondary" onClick={resetFilter} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <Posts posts={filtered} />
    </div>
  )
}
