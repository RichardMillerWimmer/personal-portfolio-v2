import React from 'react'
import '../../styles/global.scss'

type NavLinkType = {
    text: string
    href: string
}

const NavLink = ({ text, href }: NavLinkType): JSX.Element => {

    return (
        <li><a href={href}>{text}</a></li>)
}

export default NavLink