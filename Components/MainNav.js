//import Head from 'next/head';
import Link from "next/link";

const MainNav = ({children})=> {
    return (
        <nav>
            <ul>
            	<li>Home!</li>
            	<li>About</li>
            	<li>Recipes</li>
            	<li>Go Vegan</li>
            	<li>Blog</li>
            	<li>Contact</li>
            </ul>
        </nav>
    );
}



export default MainNav;
