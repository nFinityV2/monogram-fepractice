import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { useState } from 'react';

const NavItems = ({items}) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li>
            {items.submenu ? (
                <>
                    <a 
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        >
                        {items.title}
                    </a>
                    <Dropdown dropdown={dropdown} submenu={items.submenu}/>
                </>
            ) : (
                <p>{items.title}</p>
            )}
        </li>
    )
}

NavItems.propTypes = {
    items: PropTypes.any
}
export default NavItems;