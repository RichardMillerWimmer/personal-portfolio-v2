import React from 'react'
// import styles from '../../styles/NavLink.module.scss'
// import '../../styles/NavLink.scss'

type NavLinkType = {
    text: string;
    href: string;
    page: string;
}

const NavLink = ({ text, href, page }: NavLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    return (
        <li className='navWrapper'><a className={`${page === `/${text}` ? `isActive navLink` : `navLink`}`} href={href}>{text}</a></li >)
}

export default NavLink