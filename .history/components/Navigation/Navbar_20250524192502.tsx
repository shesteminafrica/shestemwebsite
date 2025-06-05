"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../../public/svg/logo.png";
import MainButton from "../ReUsables/MainButton";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
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

  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <Link href="/" className={styles.logo__link}>
            <Image fill quality={100} alt="She STEMin Africa" src={LOGO} />
          </Link>
        </div>
        <nav className={styles.navigation}>
          {navLinks.map((data, i) => (
            <Link key={i} href={data.link}>
              {data.name}
            </Link>
          ))}
        </nav>
        <
      </header>
    </>
  );
};

export default Navbar;
