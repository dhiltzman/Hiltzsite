
function NavBar() {
    return(
        <nav className="nav">
            <a href="/home" className="site-title">HiltzSite</a>
            <ul id='nav-list'>
                <li className="active"><a href="/home"> Home </a></li>
                <li><a href="/test"> Test </a></li>
            </ul>
        </nav>
    )
}

export default NavBar