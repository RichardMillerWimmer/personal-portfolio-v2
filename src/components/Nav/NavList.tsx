import React, { useEffect, useState } from 'react'
import NavLink from './NavLink.tsx'
// import styles from '../../styles/NavList.module.scss'
import '../../styles/NavList.css'


const NavList = () => {
    const [page, setPage] = useState('')

    useEffect(() => {
        setPage(window.location.pathname)
    })

    return (
        <nav>
            <ul className='navList'>
                <NavLink page={page} text='home' href='/' />
                <NavLink page={page} text='work' href='/work' />
                <NavLink page={page} text='about' href='/about' />
                <NavLink page={page} text='blog' href='/blog' />
                <NavLink page={page} text='contact' href='/contact' />
            </ul>
        </nav>
    )
}

export default NavList

