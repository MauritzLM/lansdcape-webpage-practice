import { Link } from "react-router-dom";

function Navbar({ currentPage }) {

    return (
        <>
            <nav>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M80-160v-60h240q-20-91-87.5-159.5T80-470q20-5 39.5-7.5T160-480q134 0 227 93t93 227H80Zm460 0q0-42-8-73.5T512-296q40-88 120-136t168-48q21 0 40.5 2.5T880-470q-85 22-154 91.5T640-220h240v60H540Zm-58-193q-9-76 13-142t64.5-115Q602-659 662-688t127-31q-56 35-105.5 95.5T621-494q-44 21-80 58.5T482-353Zm-61-76q-16-15-35-30t-32-23q3-12 4.5-26.5T360-532q0-76-24-144t-68-124q70 28 124 88.5T468-573q-18 32-30.5 69.5T421-429Z" /></svg>
                </Link>

                <p>The Landscaping Company</p>
                <ul>
                    <li className={`${'home' == currentPage && "current-page-tab"}`}><Link to="/">Home</Link></li>
                    <li className={`${'services' == currentPage && "current-page-tab"}`}><Link to="/services">Services</Link></li>
                    <li>About</li>
                </ul>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg>
                </button>
            </nav>
        </>
    )
}

export default Navbar;