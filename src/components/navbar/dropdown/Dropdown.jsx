import PropTypes from 'prop-types';
import NavItems from '../NavItems';
import './dropdown.css';

const Dropdown = ({submenu, dropdown}) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : "none"}`}>
            {submenu.map((subMenuItems, index) => (
                <NavItems items={subMenuItems} key={index}/>
            ))}
        </ul>
    )
}

Dropdown.propTypes = {
    submenu: PropTypes.any,
    dropdown: PropTypes.bool
}

export default Dropdown;