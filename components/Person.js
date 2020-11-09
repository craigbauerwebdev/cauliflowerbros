import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/recipes/[id]" as={`/recipes/${person.id}`}>
        {/* <a>{person.name}</a> */}
        <h1>{person.title.rendered}</h1>
      </Link>
    </li>
  )
}
