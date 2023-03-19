import { BlogPost } from '@/components/BlogPost'

export default function Page ({ params: { slug } }) {
  return (
    <main>
      <BlogPost slug={slug} />
    </main>
  )
}
