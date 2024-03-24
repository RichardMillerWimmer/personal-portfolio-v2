import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/WorkCard.module.scss'
import { generateSlug } from '../utils/helpers'
import github from '/github-outline.svg'
import externalLink from '/external-link-outline.svg'
import enter from '/enter.svg'

interface WorkCardProps {
    src: string
    images: string[]
    title: string
    description: string
    url: string
    site?: string
    repo: string
}

const WorkCard = (props: WorkCardProps) => {
    const { src, title, description, url, site, repo } = props

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const animationRef = useRef()
    const titleId = generateSlug(title)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsIntersecting(entry.isIntersecting)
        })
        observer.observe(animationRef.current)
    }, [])

    return (
        <div ref={animationRef}>
            <section aria-labelledby={titleId} className={styles.workCard}>
                <div className={styles.contentWrapper}>
                    <a href={url}>
                        <h2 id={titleId}>{title}</h2>
                    </a>
                    <div className={styles.descriptionWrapper}>
                        <p>{description}</p>
                    </div>
                    <div className={styles.linkContainer}>
                        <a href={repo} target='_blank' rel='noreferrer' >
                            <img src={github} alt={`${title} github repo`} height='25px' width='25px' />
                        </a>
                        {site &&
                            <a href={site} target='_blank' rel='noreferrer' >
                                <img src={externalLink} alt={`${title} site link`} height='25px' width='25px' />
                            </a>
                        }

                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <a href={url}>
                        <div>
                            <img src={src} alt={title} />
                            <div className={styles.enterBtn}>
                                <img src={enter} alt="see more" />
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div >
    )

}

export default WorkCard