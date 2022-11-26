import React from 'react'
import styles from '../../styles/NavLink.module.scss'
// import '../../styles/NavLink.css'

type NavLinkType = {
    text: string;
    href: string;
    page: string;
}

const NavLink = ({ text, href, page }: NavLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    const regex = new RegExp(`/${text}`, 'g')
    const regexCheck = regex.test(page)

    return (
        <li className={styles.navWrapper}><a className={regexCheck ? `${styles.isActive} ${styles.navLink}` : `${styles.navLink}`} href={href}>{text}</a></li >)
}

export default NavLink