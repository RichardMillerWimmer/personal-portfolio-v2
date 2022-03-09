import { useState } from 'react';
import NavList from './NavList';


// type StyledBurgerType = {
//   open: boolean
// }

const Burger: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <div className={styles.burgerContainer}>
                <div open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <NavList open={open} setOpen={setOpen} />
        </>
    )
}

export default Burger