function NavBar() {
    return(
        <nav className="nav">
            <a href="/home" className="site-title">HiltzSite</a>
            <ul id='nav-list'>
                <li className="active"><a href="/home"> Home </a></li>
                <li><a href="/projects"> Projects </a></li>
                <li>Projects DropDown
                    <ul>
                        <li><a href="/projects/project1"> Project1 </a></li>
                        <li><a href="/projects/project2"> Project2 </a></li>
                        <li><a href="/projects/project3"> Project3 </a></li>
                        <li><a href="/projects/upcoming-projects"> Upcoming Projects </a></li>
                    </ul>                 
                </li>
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