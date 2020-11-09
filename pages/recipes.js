import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Recipes() {
  const { data, error } = useSWR('/api/recipes', fetcher);

  console.log(data);

  console.log(error);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => {
        return <Person key={i} person={p} />
        //return <h1>{p.title.rendered}</h1>
      })}
    </ul>
  )
}
