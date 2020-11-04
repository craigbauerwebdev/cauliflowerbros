//import Head from 'next/head';
import Link from "next/link";
import MainNav from "./MainNav";

const Header = ({children})=> {
    return (
        <header>
            <img height="100" src="/images/cauliflower-bros-logo.jpg" />
            <MainNav />
            {/*<Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>*/}
        </header>
    );
}



export default Header;
