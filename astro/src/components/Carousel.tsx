import React, { useState } from 'react'
import Img1 from '/assets/work/PolymathVisualsThumbnail.png'
import Img2 from '/assets/work/TopTableGamesThumbnail.png'
import Img3 from '/assets/work/ValeriePortfolioThumbnail.png'
import styles from '../styles/Carousel.module.scss'

const testArr = [Img1, Img2, Img3]

const Carousel = ({ }) => {
    const [active, setActive] = useState(0)
    // const length = imgArray.length

    const nextSlide = () => {

    }
    const prevSlide = () => {

    }

    return (
        <div>
            <div className={styles.slideshowContainer}>
                {testArr.map((img) => {
                    return <div className={styles.slides}>
                        <div className={styles.numberText}>1 / 3</div>
                        <img className={styles.slideImg} src={img} />
                    </div>
                })}
                <a className={styles.prev} onClick={() => { }}>&#10094;</a>
                <a className={styles.next} onClick={() => { }}>&#10095;</a>
            </div>
            <br />

            <div>
                <span className={styles.dot} onClick={() => { }}></span>
                <span className={styles.dot} onClick={() => { }}></span>
                <span className={styles.dot} onClick={() => { }}></span>
            </div>
        </div>
    )
}

export default Carousel