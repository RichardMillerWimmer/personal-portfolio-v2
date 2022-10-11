import React from 'react'
import styles from '../../styles/IconLink.module.scss'
import WorkIcon from './NavIcons/WorkIcon.astro'

type IconLinkType = {
    text: string;
    href: string;
    page: string;
    child: JSX.Element
}

const NavLink = ({ text, href, page, child }: IconLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    return (
        <li><a className={`${page === `/${text}` ? `${styles.isActive} ${styles.navLink}` : styles.navLink}`} href={href}><WorkIcon /></a></li >)
}

export default NavLink