import { Processor } from '@/components/Processor'

export default function Page ({ params: { slug } }) {
  return (
    <main>
      <Processor slug={slug} />
    </main>
  )
}
