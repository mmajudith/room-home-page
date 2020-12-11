import React, { useRef,useEffect } from 'react';
import DesktopHero1 from '../images/desktop-image-hero-1.jpg';
import DesktopHero2 from '../images/desktop-image-hero-2.jpg';
import DesktopHero3 from '../images/desktop-image-hero-3.jpg';
import MobileHero1 from '../images/mobile-image-hero-1.jpg';
import MobileHero2 from '../images/mobile-image-hero-2.jpg';
import MobileHero3 from '../images/mobile-image-hero-3.jpg';
import Arrow from '../images/icon-arrow.svg';
import AngleLeft from '../images/icon-angle-left.svg';
import AngleRight from '../images/icon-angle-right.svg';


function Slides() {

    const slideRef = useRef(null)
    let slideIndex = 1;

    const showSlide = (num) => {
        let results = Array.from(slideRef.current.children)
        if (num > results.length) {
            slideIndex = 1
        }

        if (num < 1) {
            slideIndex = results.length
        }

        for (let i = 0; i < results.length; i++) {
            results[i].style.display = 'none'
        }

        results[slideIndex - 1].style.display = 'block'

    }

    const plusIndex = (num) => {
        showSlide(slideIndex += num)
    }

    useEffect(() => {
        plusIndex(0)
    }, [])

    return (
        <div className="slides">
            <div className="slide-container">

                <div ref={slideRef} className="image-text-container">
                    <div className="float">
                        <div className="images-txt-wrapper">
                            <picture className="image-slide">
                                <source srcSet={MobileHero1} media="(max-width: 768px)" />
                                <img src={DesktopHero1} alt="A chair and table with flower on it." />
                            </picture>
                            <div className="text-slide">
                                <h2>Discover innovative ways to decorate</h2>
                                <p>
                                    We provide unmatched quality, comfort, and style for property owners across the country.
                                    Our experts combine form andnfunction in bringing your vision to life. Create a room in your
                                    own style with our collection and make your property a reflection of you and what you love.
                                </p>
                                <p className="arrow">Shop now  <img src={Arrow} alt="arrow icon" /></p>
                            </div>
                        </div>
                    </div>

                    <div className="float">
                        <div className="images-txt-wrapper">
                            <picture className="image-slide">
                                <source srcSet={MobileHero2} media="(max-width: 768px)" />
                                <img src={DesktopHero2} alt="A chair and table with flower on it." />
                            </picture>
                            <div className="text-slide">
                                <h2>We are available all across the globe</h2>
                                <p>
                                    With stores all over the world, it's easy for you to find furniture for your home or place of business.
                                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
                                    store locator. Any questions? Don't hesitate to contact us today.

                                </p>
                                <p className="arrow">Shop now  <img src={Arrow} alt="arrow icon" /></p>
                            </div>
                        </div>
                    </div>

                    <div className="float">
                        <div className="images-txt-wrapper">
                            <picture className="image-slide">
                                <source srcSet={MobileHero3} media="(max-width: 768px)" />
                                <img src={DesktopHero3} alt="A chair and table with flower on it." />
                            </picture>
                            <div className="text-slide">
                                <h2>Manufactured with the best materials</h2>
                                <p>
                                    Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                                    to ensure that every product is made as perfect and as consistent as possible. With three decades of
                                    experience in this industry, we understand what customers want for their home and office.
                            </p>
                                <p className="arrow">Shop now  <img src={Arrow} alt="arrow icon" /></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="angles-wrapper">
                <img onClick={() => plusIndex(-1)} src={AngleLeft} alt="left angle to slide" className="angle-left" />
                <img onClick={() => plusIndex(1)} src={AngleRight} alt="left angle to slide" className="angle-right" />
            </div>
        </div>
    )
}

export default Slides
