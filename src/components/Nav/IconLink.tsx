import React from 'react'
import styles from '../../styles/IconLink.module.scss'


type IconLinkType = {
    text: string;
    href: string;
    page: string;
    child: string;
}

const NavLink = ({ text, href, page, child }: IconLinkType): JSX.Element => {
    if (page === '/') {
        page = '/home'
    }

    const regex = new RegExp(`/${text}`, 'g')
    const isCurrentPage = regex.test(page)

    return (
        <li className={styles.iconLink}>
            <a aria-current={isCurrentPage ? 'page' : null} href={href}>
                <img src={child} alt={text} />
            </a>
        </li >
    )
}

export default NavLink