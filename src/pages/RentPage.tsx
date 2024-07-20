
import { useState } from 'react';


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">Rent</button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Kitale</a>
                    <a href="#">Nakuru</a>
                    <a href="#">Eldoret</a>
                    <a href="#">Moiben</a>
                    <a href="#">kisumu</a>
                    <a href="#">kapsabet</a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
