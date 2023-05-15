import React from 'react'
import styles from './Slider.module.css'
function Slider() {

  return (
    <React.Fragment>
      <div className={styles.slider}>
        <div className={styles.sliderItem}>
          <img src="https://images.unsplash.com/photo-1474831626379-cfcad2ba6309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80" alt="Image 3" />
        </div>
      </div>

    </React.Fragment>
  )
}

export default Slider