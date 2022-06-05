import React from 'react'
import Img1 from '/assets/work/PolymathVisualsThumbnail.png'
import Img2 from '/assets/work/TopTableGamesThumbnail.png'
import Img3 from '/assets/work/ValeriePortfolioThumbnail.png'

const Carousel = () => {
    return (
        <div>
            <div className="slideshowContainer">

                <div className="slides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={Img1} />
                </div>

                <div className="slides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={Img2} />
                </div>

                <div className="slides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={Img3} />
                </div>

                <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                <a className="next" onClick="plusSlides(1)">&#10095;</a>
            </div>
            <br />

            <div>
                <span className="dot" onClick="currentSlide(1)"></span>
                <span className="dot" onClick="currentSlide(2)"></span>
                <span className="dot" onClick="currentSlide(3)"></span>
            </div>
        </div>
    )
}

export default Carousel