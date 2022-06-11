import React, { useState } from 'react'
import Img1 from '/assets/work/PolymathVisualsThumbnail.png'
import Img2 from '/assets/work/TopTableGamesThumbnail.png'
import Img3 from '/assets/work/ValeriePortfolioThumbnail.png'
import styles from '../styles/Carousel.module.scss'

const testArr = [Img1, Img2, Img3]

const Carousel = () => {
    const [current, setCurrent] = useState<number>(0)
    const length = testArr.length
    console.log(current)
    console.log(testArr[current])


    const renderDotSet = (length) => {
        let dots = []
        for (let i = 0; i < length; i++) {
            dots.push(<span key={i} className={styles.dot} onClick={() => { setCurrent(i) }}></span>)
        }
        return dots
    }

    const nextSlide = () => {
        setCurrent(current === testArr.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? testArr.length - 1 : current - 1)
    }

    const renderSlide = testArr.map((img, index) => {
        return (
            <div className={index === current ? styles.slides : styles.active} key={index}>
                <div className={styles.numberText}>{current + 1} / {length}</div>
                <img className={styles.slideImg} src={img} />
            </div>
        )
    })


    return (
        <div>
            <div className={styles.slideshowContainer}>
                {renderSlide}
                <a className={styles.prev} onClick={prevSlide}>&#10094;</a>
                <a className={styles.next} onClick={nextSlide}>&#10095;</a>
            </div>
            <br />

            <div>
                {renderDotSet(testArr.length)}
            </div>
        </div>
    )
}

export default Carousel