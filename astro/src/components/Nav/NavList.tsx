import React from 'react';
import { useRouter, Link } from 'react-router'
interface NavProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavList: React.FC = ({ open, setOpen }: NavProps): any => {
    const router = useRouter();
    // console.log(router)

    return (
        // <ul open={open}>
        //     <li className={router.pathname === "/" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/' ><a>Home</a></Link></li>
        //     <li className={router.pathname === "/projects" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/projects'><a>Projects</a></Link></li>
        //     <li className={router.pathname === "/about" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/about'><a>About</a></Link></li>
        //     <li className={router.pathname === "/cv" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/cv'><a>CV</a></Link></li>
        //     <li className={router.pathname === "/contact" ? styles.active : ""} onClick={() => setOpen(!open)}><Link href='/contact'><a>Contact</a></Link></li>
        // </ul>
    )
}

export default NavList
