import React from 'react'
import styles from './tour.module.css'
function Tour() {
  return (
    <>
      <div className={styles.main_div}>
        <div className={styles.heading}>
          <p>
            TOUR DATES
          </p>
          <h6>
            <pre>Remember to book your tickets!
            </pre>
          </h6>
        </div>
        <div className={styles.second__div}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <p>September</p>
            <h6>Sold out</h6>
          </div>

          &nbsp;
          <hr />
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <p>October</p>
            <h6>Sold out</h6>
          </div>
          &nbsp;
          <hr />
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <p>November</p>
            <span>10</span>
          </div>
        </div>
        <div className={styles.final__div}>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Example Image" />
            <h2>New York</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima vel doloribus necessitatibus repellendus autem aliquid iusto, non inventore amet!</p>
            <button className={styles.ticket__button}>Buy Tickets</button>
          </div>

          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="Example Image" />
            <h2>Paris</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima vel doloribus necessitatibus repellendus autem aliquid iusto, non inventore amet!</p>
            <button className={styles.ticket__button}>Buy Tickets</button>
          </div>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1507622560124-621e26755fb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Example Image" />
            <h2>San Francisco</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima vel doloribus necessitatibus repellendus autem aliquid iusto, non inventore amet!</p>
            <button className={styles.ticket__button}>Buy Tickets</button>
          </div>
          <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Example Image" />
            <h2>New York</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima vel doloribus necessitatibus repellendus autem aliquid iusto, non inventore amet!</p>
            <button className={styles.ticket__button}>Buy Tickets</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Tour