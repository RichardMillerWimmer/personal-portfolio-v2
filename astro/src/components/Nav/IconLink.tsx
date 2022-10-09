import React from 'react'
import styles from '../../styles/IconLink.module.scss'

type IconLinkType = {
    text: string;
    href: string;
    page: string;
    child: JSX.Element
}

const NavLink = ({ text, href, page }: IconLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    return (
        <li><a className={`${page === `/${text}` ? `${styles.isActive} ${styles.navLink}` : styles.navLink}`} href={href}>{text}</a></li >)
}

export default NavLink