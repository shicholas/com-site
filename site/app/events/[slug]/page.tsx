import { Event } from '@/components/Event'

export default function Page ({ params: { slug } }) {
  return (
    <main>
      <Event slug={slug} />
    </main>
  )
}
