import React from 'react'
import '../../styles/global.scss'

type NavLinkType = {
    text: string
    href: string
    page: string;
}

const NavLink = ({ text, href, page }: NavLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    return (
        <li><a className={`${page === `/${text}` ? 'isActive' : ''}`} href={href}>{text}</a></li>)
}

export default NavLink