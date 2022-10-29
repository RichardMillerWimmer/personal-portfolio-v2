import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/WorkCard.module.scss'
import github from '/github-outline.svg'
import externalLink from '/external-link-outline.svg'
import enter from '/enter.svg'

interface WorkCardProps {
    src: string
    title: string
    description: string
    url: string
    position: number
    site: string
    repo: string
}

const WorkCard = (props: WorkCardProps) => {
    const { src, title, description, url, position, site, repo } = props
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
            <div className={styles.workCard}>
                <div className={styles.contentWrapper}>
                    <a href={url}>
                        <h2>{title}</h2>
                    </a>
                    <div className={styles.descriptionWrapper}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.linkContainer}>
                        <a href={repo} target='_blank' rel='noreferrer' >
                            <img src={github} alt={`${title} github repo`} height='25px' width='25px' />
                        </a>
                        <a href={site} target='_blank' rel='noreferrer' >
                            <img src={externalLink} alt={`${title} site link`} height='25px' width='25px' />
                        </a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <a href={url}>
                        <div>
                            <img src={src} alt={title} />
                            <div className={styles.enterBtn}>
                                <img src={enter} alt="see more" height='100px' width='100px' />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    )

}

export default WorkCard