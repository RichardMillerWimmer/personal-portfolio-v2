import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Carousel.module.scss'

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState<number>(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => nextSlide(), 3000)
        return () => resetTimeout()
    }, [current])

    const renderDotSet = (length) => {
        let dots = []
        for (let i = 0; i < length; i++) {
            dots.push(<span key={i} className={i === current ? `${styles.dot} ${styles.activeDot}` : styles.dot} onClick={() => { setCurrent(i) }}></span>)
        }
        return dots
    }

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    const renderSlide = images.map((img, index) => {
        return (
            <div className={index === current ? styles.active : styles.slides} key={index}>
                <img className={styles.slideImg} src={img} alt='project example' />
            </div>
        )
    })

    return (
        <div>
            <div className={styles.slideshowContainer}>
                {renderSlide}
                <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
                <button className={styles.next} onClick={nextSlide}>&#10095;</button>
                <div className={styles.dotContainer}>
                    {renderDotSet(images.length)}
                </div>
            </div>
            <br />
        </div>
    )
}

export default Carousel