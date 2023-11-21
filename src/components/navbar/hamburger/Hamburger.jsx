import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './hamburger.css'

const Hamburger = () => {
    return (
        <div className='hamburger'>
            <FontAwesomeIcon icon={faBars} size='2xl' />
        </div>
    )
}

export default Hamburger;