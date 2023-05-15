import React from 'react'
import styles from './band.module.css'
function Band() {
  return (
    <>
      <div className={styles.first__heading}>
        <h3>THE BAND</h3>
      </div>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel fuga tempore possimus facilis quia fugiat. In ipsam eligendi possimus non nostrum ratione dolor est laborum itaque debitis tempore fugit atque iure, sapiente consequatur laboriosam commodi aut aliquam et quas. Facilis reprehenderit harum sapiente esse culpa, reiciendis laborum minima velit sed numquam itaque autem nulla at recusandae, modi consectetur quasi, libero tempore. Totam ea nam ducimus, temporibus beatae soluta eos repellat suscipit exercitationem odio, reprehenderit architecto cumque voluptatum nisi, natus debitis doloremque cupiditate labore. Quibusdam ratione odit nostrum sint cum ea nobis, minus expedita aperiam autem molestiae, doloremque, dignissimos commodi!
        </p>

      </div>
      <div className={styles.cards}>
        <div className={styles.images}>
          <img src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="imag1" />&nbsp;&nbsp;
          <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="imag2" />&nbsp;&nbsp;
          <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="imag3" />&nbsp;&nbsp;

        </div>

      </div>
    </>
  )
}

export default Band