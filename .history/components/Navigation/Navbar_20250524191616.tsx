import React from 'react'
import Link from 'next/link'
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.logo__link}>

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar