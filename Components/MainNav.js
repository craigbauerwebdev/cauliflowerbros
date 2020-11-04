//import Head from 'next/head';
import Link from "next/link";

const MainNav = ({children})=> {
    return (
        <nav>
            <ul>
            	<li>
            		<Link href="/">
            			<a>Home</a>
            		</Link>
            	</li>
            	<li>
            		<Link href="/about">
            			<a>About</a>
            		</Link>
            	</li>
            	<li>Recipes</li>
            	<li>Go Vegan</li>
            	<li>Blog</li>
            	<li>Contact</li>
            </ul>
        </nav>
    );
}



export default MainNav;
