import React from 'react';
import { useRouter, Link } from 'react-router-dom'
interface NavProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type StyledUIType = {
    open: boolean
}

const Ul = styled.ul<StyledUIType>`
z-index: 1;
list-style: none;
display: flex;
flex-flow: row nowrap;
justify-content: center;
li {
    text-align: center;
    padding: 18px 10px;
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3d3d3d;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
        color: #fff;
    }    
}
`

const NavList: React.FC = ({ open, setOpen }: NavProps): any => {
    const router = useRouter();

    return (
        <ul open={open}>
            <li className={router.pathname === "/" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/' >Home</Link></li>
            <li className={router.pathname === "/work" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/work'><a>Work</a></Link></li>
            <li className={router.pathname === "/about" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/about'>About</Link></li>
            <li className={router.pathname === "/contact" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/contact'>Contact</Link></li>
            <li className={router.pathname === "/blog" ? styles.active : ""} onClick={() => setOpen(!open)}><Link to='/blog'>Blog</Link></li>
        </ul>
    )
}

export default NavList
