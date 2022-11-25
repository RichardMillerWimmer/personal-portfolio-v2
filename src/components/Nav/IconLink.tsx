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

    return (
        <li className={styles.iconLink}>
            <a href={href}>
                <img src={child} alt={text} />
            </a>
        </li >
    )
}

export default NavLink