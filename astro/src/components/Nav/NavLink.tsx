import React, { useState } from 'react'
import '../../styles/global.scss'

type NavLinkType = {
    text: string
    href: string
}

const NavLink = ({ text, href }: NavLinkType): JSX.Element => {
    const [active, setActive] = useState<string>()

    const onClickHandler = (text: string): void => {
        console.log(text)
        setActive(text)
        console.log('setActive Hit')
        console.log(active)
    }

    return (
        <li onClick={() => onClickHandler(text)} className={active === text ? 'isActive' : ''}><a href={href}>{text}</a></li>)
}

export default NavLink