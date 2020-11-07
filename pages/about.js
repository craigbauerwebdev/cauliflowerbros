import Head from 'next/head'
import useSWR from 'swr'

  /* const dev = process.env.NODE_ENV === 'development';
    const server = dev ? 'http://localhost:3000' : 'https://mydomain.com/'; */

  //console.log("SERVER: ", dev, " ", server);

const fetcher = (url) => fetch(url).then((res) => res.json());

const About = () => {
  const { data, error } = useSWR('/api/recipes', fetcher);
  //console.log(error);
  console.log(data);

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...!!!</div>


  return (
    <div className="container">
      <Head>
        <title>About Us | Califlower Brothers</title>
        <link rel="icon" href="/favicon.ico" />
        <meta 
          name="description" 
          content="We are Cauliflower Brothers, a collective that is SuperCharged on Plants (not just Cauliflower). We provide recipes, info and laughs to our readers."
        />
      </Head>

      <main>
        {/*<h1 className="title">
          About Cailiflower Brothers
        </h1>*/}
        <p>Our story coming soon</p>

        
          {data.map((recipe)=> {
            return <p>{recipe.title.rendered}</p>
          })}
     
      </main>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

/* export async function getStaticProps() {

  const dev = process.env.NODE_ENV === 'development';
  const server = dev ? 'http://localhost:3000' : 'https://cauliflowerbrothers.com/';
  console.log("SERVER: ", server);

  const res = await fetch(`${server}/api/recipes`)
  const recipes = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      recipes,
    },
    revalidate: 1, //to update props
  }
} */

export default About;