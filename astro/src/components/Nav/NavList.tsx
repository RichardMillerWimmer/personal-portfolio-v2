import React from 'react';
import NavLink from './NavLink';
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// interface NavProps {
//     open: boolean,
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>
// }

// type StyledUIType = {
//     open: boolean
// }

// const Ul = styled.ul<StyledUIType>`
// z-index: 1;
// list-style: none;
// display: flex;
// flex-flow: row nowrap;
// justify-content: center;
// li {
//     text-align: center;
//     padding: 18px 10px;
// }
// @media (max-width: 768px) {
//     flex-flow: column nowrap;
//     background-color: #3d3d3d;
//     position: fixed;
//     transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
//     top: 0;
//     right: 0;
//     height: 100vh;
//     width: 100%;
//     padding-top: 3.5rem;
//     transition: transform 0.3s ease-in-out;
//     li {
//         color: #fff;
//     }    
// }
// `

const NavList = (props: { page: any; }): JSX.Element => {
    // const router = useRouter();
    console.log(props.page)
    console.log(window.location.pathname)

    return (
        <ul>
            <NavLink text='home' href='/' />
            <NavLink text='work' href='/work' />
            <NavLink text='about' href='/about' />
            <NavLink text='blog' href='/blog' />
            <NavLink text='contact' href='/contact' />
        </ul>
    )
}

export default NavList
