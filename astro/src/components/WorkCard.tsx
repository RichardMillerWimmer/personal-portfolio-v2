import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Thumbnail.module.scss'

interface WorkCardProps {
    src: string
    title: string
    description: string
    url: string
    position: number
}

const WorkCard = (props: WorkCardProps) => {
    const { src, title, description, url, position } = props
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const animationRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsIntersecting(entry.isIntersecting)
        })
        observer.observe(animationRef.current)
    }, [])

    let direction = position % 2 === 0 ? "row" : "row-reverse"

    return (
        <div ref={animationRef}>
            <div className={`${styles.container}`} >
                <a href={url}>
                    <div className={`flexContainer ${direction}`}>
                        <div className={styles.imageContainer}>
                            <img className={styles.workImg} src={src} />
                            <div className={styles.thumbnailContent}>
                                <p>{description}</p>
                                <p className={styles.seeMoreCenter}>see more</p>
                            </div>
                        </div>
                        <div className={styles.titleContainer}>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </a>
            </div>
        </div >
    )

}

export default WorkCard