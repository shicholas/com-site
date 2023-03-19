import { Longform } from '@/components/Longform'

export default function Page ({ params: { slug } }) {
  return (
    <main>
      <Longform slug={slug} />
    </main>
  )
}
