import React, { useState } from 'react'
import Img1 from '/assets/work/PolymathVisualsThumbnail.png'
import Img2 from '/assets/work/TopTableGamesThumbnail.png'
import Img3 from '/assets/work/ValeriePortfolioThumbnail.png'
import styles from '../styles/Carousel.module.scss'

const Carousel = ({ imgArray }) => {
    const [active, setActive] = useState(0)
    const length = imgArray.length

    const nextSlide = () => {
        
    }
    const prevSlide = () => {

    }

    return (
        <div>
            <div className={styles.slideshowContainer}>

                <div className={styles.slides}>
                    <div className={styles.numberText}>1 / 3</div>
                    <img className={styles.slideImg} src={Img1} />
                </div>

                <div className={styles.slides}>
                    <div className={styles.numberText}>2 / 3</div>
                    <img className={styles.slideImg} src={Img2} />
                </div>

                <div className={styles.slides}>
                    <div className={styles.numberText}>3 / 3</div>
                    <img className={styles.slideImg} src={Img3} />
                </div>

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