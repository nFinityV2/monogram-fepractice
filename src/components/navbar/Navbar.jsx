import './navbar.css';


const Navbar = () => {
    return(
        <nav className="navbar-monogram">
            <div className="monogram-container">
                <img src='' alt="monogram-logo"/>
            </div>
            <div className="links-container">
                <a href="#">How it works</a>
                <a href="#">Workflows</a>
                <a href="#">Download</a>
                <a href="#">Blog</a>
                <a href="#">Support</a>
                <a href="#">Shop</a>
            </div>
        </nav>
    )
}

export default Navbar;