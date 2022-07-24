
function NavBar() {
    return(
        <nav className="nav">
            <a href="/home" className="site-title">HiltzSite</a>
            <ul id='nav-list'>
                <li className="active"><a href="/home"> Home </a></li>
                <li><a href="/projects"> Projects </a></li>
                <li><a href="/drone"> Drone Work </a></li>
                <li><a href="/3D-Printing"> 3D Printing </a></li>
                <li><a href="/resume"> Resume </a></li>
                <li><a href="/about"> About </a></li>
                <li><a href="/contact"> Contact </a></li>

            </ul>
        </nav>
    )
}

export default NavBar