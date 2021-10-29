import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1: current - 1)
    }

    const currentSlide = (n) => {
        setCurrent(n);
    }

    return (
        <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && <img src={slide.image} alt='ad' className="adImage"/>}
                    </div>
                )
            })}
            <div className="dotLocation">
                {SliderData.map((slide, index) => {
                    return (
                        <span className={index === current ? 'dot active' : 'dot'} onClick={() => currentSlide(index)} key={index}></span>
                    )
                })}
            </div>
        </section>
    )
}

export default ImageSlider
