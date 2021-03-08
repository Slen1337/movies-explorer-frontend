import React, { useState, useEffect } from 'react';
import Burger from '../Button/Burger/Burger';
import HeaderMain  from '../Header/HeaderMain/HeaderMain';

export default function NavBar(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowSize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    });


    return(
        <>
            {
            (windowWidth > 768) ? <HeaderMain /> : <Burger/>
            }
        </>
    )
}
