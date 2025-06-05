import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from "../../public/svg/logo.png"
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  const navLinks = [
    {
      name: "Register",
      link: "/attend",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Speakers",
      link: "/speakers",
    },
    {
      name: "Agenda",
      link: "/agenda",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <Link href="/" className={styles.logo__link}>
            <Image fill quality={100} alt='She STEMin Africa' src={LOGO}/>
          </Link>
        </div>
        <nav>

        </nav>
      </header>
    </>
  )
}

export default Navbar