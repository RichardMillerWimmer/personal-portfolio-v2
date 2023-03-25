import React from 'react'
import styles from '../../styles/NavLink.module.scss'
// import '../../styles/NavLink.css'

type NavLinkType = {
    text: string;
    href: string;
    page: string;
    child?: string
}

const NavLink = ({ text, href, page, child }: NavLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    const renderLink = () => {
        return child ? <img src={child} alt={text} /> : text
    }

    const regex = new RegExp(`/${text}`, 'g')
    const isCurrentPage = regex.test(page)



    return (
        <li className={styles.navWrapper}>
            <a aria-current={isCurrentPage ? 'page' : null} className={isCurrentPage && !child ? `${styles.isActive} ${styles.navLink}` : `${styles.navLink}`} href={href}>
                {renderLink()}
            </a>
        </li >)
}

export default NavLink