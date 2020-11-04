//import Head from 'next/head';
import Link from "next/link";
import MainNav from "./MainNav";

const Header = ({children})=> {
    return (
        <header>
        	<Link href="/">
        		<a>
            		<img height="100" src="/images/cauliflower-bros-logo.jpg" />
            	</a>
            </Link>
            <MainNav />
        </header>
    );
}



export default Header;
