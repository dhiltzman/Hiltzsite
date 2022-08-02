function NavBar() {
    const activeCheck = () => {
        var header = document.getElementById("myDIV");
        var btns = header.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
        }
    }
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
        {activeCheck}
    )
}

export default NavBar