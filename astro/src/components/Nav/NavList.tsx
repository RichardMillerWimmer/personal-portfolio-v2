import React from 'react';
import { useRouter, Link } from 'react-router-dom'
interface NavProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavList: React.FC = ({ open, setOpen }: NavProps): any => {
    const router = useRouter();

    return (
        <ul open={open}>
            <li className={router.pathname === "/" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/' >Home</Link></li>
            <li className={router.pathname === "/work" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/work'><a>Work</a></Link></li>
            <li className={router.pathname === "/about" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/about'>About</Link></li>
            <li className={router.pathname === "/contact" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/contact'>Contact</Link></li>
        </ul>
    )
}

export default NavList
