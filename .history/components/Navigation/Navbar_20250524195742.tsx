"use client";

import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../public/svg/logo.png";
import MainButton from "../ReUsables/MainButton";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  //Get pathname 
  const pathname = usePathname()
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    {
      name: "Donate",
      link: "/donate",
    },
    {
      name: "Local Initiatives",
      link: "/events",
    },
  ];

  const mainButtonData = {
    name: "Contact us",
    link: "/contact",
    background: "#f5f5f5",
    text: "var(--darkpink)",
    border: "1px solid var(--darkpink)",
    hovBack: "var(--darkpink)",
    hovText: "#f5f5f5",
    hovBorder: "1px solid transparent",
  };

  return (
    <>
      <header className={styles.nav__header}>
        <div className={`containerr ${styles.nav__container}`}>
          <Link href="/" className={styles.logo__link}>
            <Image fill quality={100} alt="She STEMin Africa" src={LOGO} />
          </Link>

          <nav className={styles.navigation}>
            {navLinks.map((data, i) => (
              <Link key={i} href={data.link} className={styles.nav__link}>
                {data.name}
              </Link>
            ))}
          </nav>
          <div className={styles.nav__contact}>
            <MainButton buttonprops={mainButtonData} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
