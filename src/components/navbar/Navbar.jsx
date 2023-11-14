import './navbar.css';
import '../../data/navbarData.js'
import { navbarData } from '../../data/navbarData.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import CartIcon from '../../assets/cart.svg'

const Navbar = () => {
    return(
        <nav className="navbar-monogram">
            <div className="monogram-container">
                <svg height="38" viewBox="0 0 520 114" fill="currentColor"><title>Monogram</title><path d="M150,36V0H0V114H150ZM144,6V36H78V6ZM6,6H72V72H6ZM72,108H6V78H72Zm72,0H78V78h0V42h66Z"></path><rect x="35.5" y="17" width="6" height="44"></rect><rect x="53" y="17" width="6" height="44"></rect><rect x="18" y="17" width="6" height="44"></rect><path d="M111.5,50a25,25,0,1,0,25,25A25,25,0,0,0,111.5,50Zm0,44a19,19,0,1,1,19-19A19,19,0,0,1,111.5,94Z"></path><polygon points="206.809 62.675 197.497 42.37 191.584 42.37 191.586 72.048 197.523 72.048 197.523 55.206 205.264 72.048 208.374 72.048 216.112 55.206 216.112 72.048 222.042 72.048 222.042 42.37 216.116 42.37 206.809 62.675"></polygon><path d="M254.479,43.7a17.5,17.5,0,0,0-16.021,0,14.407,14.407,0,0,0-5.676,5.491,16.649,16.649,0,0,0,.006,16.083,14.247,14.247,0,0,0,5.671,5.463h0a16.777,16.777,0,0,0,7.787,1.927h.248a16.4,16.4,0,0,0,7.991-1.946,14.508,14.508,0,0,0,5.675-5.474,16.621,16.621,0,0,0-.006-16.063A14.429,14.429,0,0,0,254.479,43.7Zm.2,18.682a8.787,8.787,0,0,1-3.407,3.376,10.262,10.262,0,0,1-9.593,0,8.734,8.734,0,0,1-3.417-3.363,11.047,11.047,0,0,1-.026-10.274,8.733,8.733,0,0,1,3.407-3.394,9.8,9.8,0,0,1,4.858-1.211,9.653,9.653,0,0,1,4.81,1.209,8.786,8.786,0,0,1,3.38,3.384A11.041,11.041,0,0,1,254.678,62.38Z"></path><polygon points="289.285 61.212 276.742 42.59 276.593 42.37 270.888 42.37 270.888 72.048 277.114 72.048 277.114 53.166 289.807 72.048 295.512 72.048 295.512 42.37 289.285 42.37 289.285 61.212"></polygon><path d="M327.94,43.7a17.506,17.506,0,0,0-16.024,0,14.414,14.414,0,0,0-5.676,5.491,16.639,16.639,0,0,0,.006,16.083,14.249,14.249,0,0,0,5.672,5.463h0a16.767,16.767,0,0,0,7.786,1.927h.251a16.358,16.358,0,0,0,7.991-1.946,14.5,14.5,0,0,0,5.675-5.473,16.607,16.607,0,0,0-.006-16.064A14.435,14.435,0,0,0,327.94,43.7Zm.2,18.682a8.819,8.819,0,0,1-3.408,3.377,9.828,9.828,0,0,1-4.8,1.189,9.686,9.686,0,0,1-4.8-1.19,8.739,8.739,0,0,1-3.419-3.363,11.052,11.052,0,0,1-.024-10.274,8.715,8.715,0,0,1,3.4-3.394,10.261,10.261,0,0,1,9.668,0,8.777,8.777,0,0,1,3.379,3.384A11.047,11.047,0,0,1,328.139,62.38Z"></path><path d="M360.847,60.071H365.7V65.68a12.124,12.124,0,0,1-9.842-.3A8.491,8.491,0,0,1,352.4,62.02a10.373,10.373,0,0,1-1.257-5.21,9.7,9.7,0,0,1,1.33-5.127,8.954,8.954,0,0,1,3.6-3.382,10.926,10.926,0,0,1,5.151-1.2,18.4,18.4,0,0,1,5.167.676,10.671,10.671,0,0,1,3.971,2.157l.826.71v-6.31l-.207-.15a13.858,13.858,0,0,0-4.574-2.173,21.461,21.461,0,0,0-5.627-.681,17.6,17.6,0,0,0-8.264,1.9,13.706,13.706,0,0,0-5.647,5.445,17.611,17.611,0,0,0,.008,16.272,13.557,13.557,0,0,0,5.631,5.413l.474.233.011-.025a20.172,20.172,0,0,0,18.694-1.363l.237-.147V54.911H360.847Z"></path><path d="M430.287,41.958h-5.74L412.621,71.636h6.435l2.59-6.606h11.5l2.633,6.606h6.391L430.412,42.271Zm1.033,17.766h-7.845L427.4,49.45Z"></path><polygon points="476.574 41.958 467.268 62.263 457.955 41.958 452.043 41.958 452.031 71.636 457.969 71.636 457.969 54.794 465.709 71.636 468.82 71.636 476.56 54.794 476.56 71.636 482.501 71.636 482.501 41.958 476.574 41.958"></polygon><path d="M404.4,57.222a9.5,9.5,0,0,0,1.649-5.623,9.138,9.138,0,0,0-2.779-7.193,11.069,11.069,0,0,0-7.683-2.448H383.069V71.636h6.225v-10.5h4.883l5.554,10.5h6.483l-5.959-11.25A9.062,9.062,0,0,0,404.4,57.222Zm-4.579-5.62a3.694,3.694,0,0,1-1.351,3.125,6.154,6.154,0,0,1-3.8,1.1h-.024l-5.345,0V47.266h5.345C398.172,47.266,399.817,48.633,399.818,51.6Z"></path></svg>
            </div>
            <ul className="links-container">
                {
                    navbarData.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })
                    
                }
                <img className='cart' src={CartIcon}  alt='shopping-cart'/>
                <select name="currency" id="currency-select">
                    {
                        navbarData.at(5).submenu.map((currency) => {
                            return <option key={6 - currency.length}>{currency}</option>
                        })
                    }
                </select>
                {/* <a href="#">How it works</a>
                <a href="#">Workflows <FontAwesomeIcon icon={faCaretDown} /></a>
                <a href="#">Download</a>
                <a href="#">Blog</a>
                <a href="#">Support</a>
                <a className="shop" href="#">Shop</a>
                <img className='cart' src={CartIcon}  alt='shopping-cart'/> */}
            </ul>
        </nav>
    )
}

export default Navbar;