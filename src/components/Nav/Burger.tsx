import React, { useState } from 'react';
import NavList from './NavList.tsx';
import styles from '../../styles/Burger.module.scss'

const Burger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const conditionalClass = open ? `${styles.open}` : ''

  return (
    <div className={styles.navContatiner}>
      <div className={`${conditionalClass} ${styles.menu}`}>
        <button className={styles.burgerContainer} onClick={() => setOpen(!open)} aria-expanded={open}>
          <div className={`${conditionalClass} ${styles.bar} ${styles.bar1}`} />
          <div className={`${conditionalClass} ${styles.bar} ${styles.bar2}`} />
          <div className={`${conditionalClass} ${styles.bar} ${styles.bar3}`} />
        </button>
        <NavList setOpen={setOpen} />
      </div>
      <div className={styles.navlistContainer}>
      </div>
    </div>
  )
}

export default Burger