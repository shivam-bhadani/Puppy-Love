import '../CSS/navbar.css'
// import '../JS/navbar'
import { Link } from 'react-router-dom'


const Navbar = () => {


    function clickfunc() {
        let hamburger = document.getElementsByClassName("hamburger")[0];

        let navul = document.querySelector(".navul");

        let bar = document.getElementsByClassName("bar");

        hamburger.addEventListener("click", () => {
            navul.classList.toggle("navActive");
            for (var i = 0; i < 3; i++)
                bar[i].classList.toggle("hamburgerActive")
        });
    }


    return (
        <div>
            <nav className="navbar background">
                <div classNameName="website-name"><Link to="/">Puppy Love Website</Link></div>

                <span className="hamburger" onClick={clickfunc()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>

                <div className="nav-links">
                    <ul className="navul background">
                        <li><Link to="/">Login</Link></li>
                        <li className="lastli"><Link to="/puppy-love">Puppy Love</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
