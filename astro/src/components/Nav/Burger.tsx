import React, { useState } from 'react';
import styled from 'styled-components'
// import NavList from './NavList.tsx';
import styles from '../../styles/Burger.module.scss'


type StyledBurgerType = {
  open: boolean;
}

// const StyledBurger = styled.div<StyledBurgerType>`
//   width: 2rem;
//   height: 2rem;
//   position: fixed;
//   bottom: 12px;
//   left: 50%;
//   transition: all 0.3s linear;
//   transform: ${({ open }) => open ? 'translate(-35%, 0)' : 'translate(-46%)'};
//   z-index: 20;
//   display: none;
//   @ (max-width: 768px) {
//     display: flex;
//     justify-content: space-around;
//     flex-flow: column nowrap;
//   }
//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background-color: #fff;
//     border-radius: 10px;
//     transform-origin: 1px;
//     transition: all 0.3s linear;
//     &:nth-child(1) {
//       transform: ${({ open }) => open ? 'rotate(45deg) scale(1.05, 1)' : 'rotate(0)'};
//     }
//     &:nth-child(2) {
//       transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
//     opacity: ${({ open }) => open ? 0 : 1};
//     }
//     &:nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg) scale(1.05, 1)' : 'rotate(0)'};
//     }
//   }
// `

const Burger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const conditionalClass = open ? `${styles.open} ${styles.bar}` : styles.bar

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.burgerContainer} onClick={() => setOpen(!open)}>
          <div className={`${conditionalClass} ${styles.bar1}`} />
          <div className={`${conditionalClass} ${styles.bar2}`} />
          <div className={`${conditionalClass} ${styles.bar3}`} />
        </div>
      </div>
      {/* <NavList open={open} setOpen={setOpen} /> */}
    </>
  )
}

export default Burger