import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <Link href="/" className={styles.logo__link}>
            <Image/>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar