import React, { useEffect, useState } from 'react'
import styles from './slider.module.scss'

const Slider = (props) => {

    useEffect(() => {
        const images = props.images.map((item, index) => ({imageUrl:item, index}))
        console.log(images)
        setImages(images)
    }, [])

    const [images, setImages] = useState([])
    const activeItem = '../../../../images/sldier-active-circle.svg'
    const unactiveItem = '../../../../images/slider-circle.svg'
    const [itemIndex, setItemIndex] = useState(props.defaultImage)


    const handleImgChange = (index) => {
        setItemIndex(index)
    } 
    
  return (
    <div style={{backgroundColor: (props.backgroundColor ? props.backgroundColor : '#FFF')}} className={styles.SliderContainer}>
        <p>
            {props.sliderTitle}
        </p>
        <img width={420} height={418} className={styles.sliderImage} src={images[itemIndex]?.imageUrl} />
        <div className={styles.sliderButtonBlock}>
            {
            Array(props.images?.length).fill(null).map((item, index) => {
                console.log(index)
                return (
                <button onClick={() => handleImgChange(index)} key={index}>
                    <img src={itemIndex === index ? activeItem : unactiveItem} />
                </button>
            )})
            }
        </div>

    </div>
  )
}

export default Slider