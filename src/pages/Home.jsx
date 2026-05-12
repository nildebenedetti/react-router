import { Link, NavLink } from "react-router";
import Navbar from "../components/Navbar";


function Home() {
    return <div>
        <Navbar />
        <div className="hero-container">
            <img className="hero-banner" src="./images/hero-banner.png" alt="home interior con uomo che guarda un paesaggio verde dalla vetrata"></img>
        </div>
    </div>
}
export default Home