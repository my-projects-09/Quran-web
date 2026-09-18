import './Header.css'
import logo from '../../imgs/icon.png'

import { useState } from 'react';



function Menu(){
    return(
        <div className='the_menu'>
                <h4>قائمة القرّاء الأخرين</h4>

                <h5>قريبًا</h5>
            </div>
    )
}

function HeaderBtn(){
    const [isOpen,setIsOpen] = useState(false)

    const TheFunction = () =>{
        setIsOpen(prev => !prev)
    }

    return(
        <div className='menu_box'>

        <button className='btn_in_header' onClick={TheFunction}>تلاوات أخرى</button>

        {isOpen &&
            <Menu />
        }
        </div>
    )
}

function Header(){

    return(
        <div className="header">

            <img className='logo' src={logo} alt="Logo" />

            <h2 className="title_in_header">Quran Kareem</h2>

            <HeaderBtn />

        </div>
    )
}

export default Header;