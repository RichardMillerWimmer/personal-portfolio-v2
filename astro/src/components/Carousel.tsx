import React, { useState } from 'react'
import Img1 from '/assets/work/PolymathVisualsThumbnail.png'
import Img2 from '/assets/work/TopTableGamesThumbnail.png'
import Img3 from '/assets/work/ValeriePortfolioThumbnail.png'
import styles from '../styles/Carousel.module.scss'

const testArr = [Img1, Img2, Img3]

const Carousel = ({ }) => {
    const [active, setActive] = useState<number>(0)
    const length = testArr.length


    const renderDotSet = (length) => {
        let dots = []
        for (let i = 0; i < length; i++) {
            dots.push(<span key={i} className={styles.dot} onClick={() => { setActive(i) }}></span>)
        }
        return dots
    }

    const nextSlide = () => {
        if (active === testArr.length - 1) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }
    const prevSlide = () => {
        if (active === 0) {
            setActive(testArr.length - 1)
        } else {
            setActive(active - 1)
        }
    }

    return (
        <div>
            <div className={styles.slideshowContainer}>
                {testArr.map((img, index) => {
                    return <div className={styles.slides} key={index}>
                        <div className={styles.numberText}>{active + 1} / {length}</div>
                        <img className={styles.slideImg} src={img} />
                    </div>
                })}
                <a className={styles.prev} onClick={() => { prevSlide() }}>&#10094;</a>
                <a className={styles.next} onClick={() => { nextSlide() }}>&#10095;</a>
            </div>
            <br />

            <div>
                {renderDotSet(testArr.length)}
            </div>
        </div>
    )
}

export default Carousel