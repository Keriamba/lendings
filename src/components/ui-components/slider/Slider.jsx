import React, { useState } from 'react'
import styles from './slider.module.scss'

const Slider = () => {
    const defaultimageIndex = 1
    const [images, setImages] = useState([{
        imageUrl: '',
        index: 0
    },{
        imageUrl: '../../../../images/ASTRA-LOGO-BIG.svg',
        index: 1
    },{
        imageUrl: '',
        index: 2
    }])
    const activeItem = '../../../../images/sldier-active-circle.svg'
    const unactiveItem = '../../../../images/slider-circle.svg'
    const [itemIndex, setItemIndex] = useState(defaultimageIndex)
    const [imgState, setImgState] = useState('../../../../images/ASTRA-LOGO-BIG.svg')

    const handleImgChange = (index) => {
        const img = images.find(item => item.index === index)
        setItemIndex(index)
        setImgState(img.imageUrl)
    } 

    
  return (
    <div className={styles.slider_container}>
        <p>
            Create an account
        </p>
        <img className={styles.slider_image} src={imgState} />
        <div className={styles.slider_button_block}>
            {
            Array(3).fill(null).map((item, index) => {
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