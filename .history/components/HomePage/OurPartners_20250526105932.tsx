// "use client";

// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
// import Image from "next/image";
// import { PartnersData } from "@/utils";
// import styles from "../../styles/HomePage/ourpartners.module.scss";

// const Marquee = () => {
//   return (
//     <div className={styles.marquee}>
//       {PartnersData.map((data, i) => (
//         <div className={styles.partner__box} key={i}>
//           <div
//             className={styles.partner__image}
//             style={{ width: data.width, aspectRatio: data.aspectRatio }}
//           >
//             <Image fill quality={100} src={data.image} alt={data.name} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const OurPartners = () => {
//   const firstSlide1 = useRef(null);
//   const secondSlide1 = useRef(null);
//   const firstSlide2 = useRef(null);
//   const secondSlide2 = useRef(null);
  
//   const sliderRef = useRef(null);
//   const sliderRef2 = useRef(null);

//   const directionRef = useRef(-1); // Use useRef for mutable direction value
//   const directionRef2 = useRef(1);


//   let xPercent = 0;
//   let xPercent2 = 0;
//   const speed = 0.1; // Adjust speed of movement

//   // Use useGSAP hook to handle gsap animations
//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(sliderRef.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: 20000,
//         scrub: 1,
//         onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
//       },
//       // x: "-150px",
//     });
//     gsap.to(sliderRef2.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: 20000,
//         scrub: 1,
//         onUpdate: (e) => (directionRef2.current = e.direction * -1), // Update directionRef's current property
//       },
//       // x: "-150px",
//     });
//     requestAnimationFrame(animation);
//   });

//   const animation = () => {
//     if (xPercent <= -100) xPercent = 0;
//     if (xPercent > 0) xPercent = -100;
//     if (xPercent2 <= -100) xPercent2 = 0;
//     if (xPercent2 > 0) xPercent2 = -100;

//     gsap.set(firstSlide1.current, { xPercent });
//     gsap.set(secondSlide1.current, { xPercent });
//     gsap.set(firstSlide2.current, { xPercent2 });
//     gsap.set(secondSlide2.current, { xPercent2 });
//     xPercent += speed * directionRef.current; // Use directionRef's current property
//     xPercent2 += speed * directionRef2.current; // Use directionRef's current property
//     requestAnimationFrame(animation);
//   };

//   return (
//     <div className={`sectioner ${styles.partners__section}`}>
//       <h2 className={styles.partner__h2}>Our Partners</h2>
//       <div className={styles.partners__container}>
//         <div className={styles.marquee__top}>
//           <div className={styles.mt__content} ref={sliderRef}>
//             <div className={styles.mc__container} ref={firstSlide1}>
//               <Marquee />
//             </div>
//             <div className={styles.mc__container} ref={secondSlide1}>
//               <Marquee />
//             </div>
//           </div>
//         </div>
//         <div className={styles.marquee__bottom}>
//           <div className={styles.mb__content} ref={sliderRef2}>
//             <div className={styles.mc__container} ref={firstSlide2}>
//               <Marquee />
//             </div>
//             <div className={styles.mc__container} ref={secondSlide2}>
//               <Marquee />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurPartners;

"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { PartnersData } from "@/utils";
import styles from "../../styles/HomePage/ourpartners.module.scss";

const Marquee = () => (
  <div className={styles.marquee}>
    {PartnersData.map((data, i) => (
      <div className={styles.partner__box} key={i}>
        <div
          className={styles.partner__image}
          style={{ width: data.width, aspectRatio: data.aspectRatio }}
        >
          <Image fill quality={100} src={data.image} alt={data.name} />
        </div>
      </div>
    ))}
  </div>
);

const OurPartners = () => {
  // these refs hold the elements to translate
  const first1 = useRef<HTMLDivElement>(null);
  const second1 = useRef<HTMLDivElement>(null);
  const first2 = useRef<HTMLDivElement>(null);
  const second2 = useRef<HTMLDivElement>(null);

  // mutable direction values
  const dir1 = useRef(-1);
  const dir2 = useRef(1);

  // persistent xPercents
  const xp1 = useRef(0);
  const xp2 = useRef(0);

  const speed = 0.1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // single ScrollTrigger on window/document
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        // self.direction is +1 or -1
        dir1.current = -self.direction;
        dir2.current = self.direction;
      },
    });

    // the animation loop
    const tick = () => {
      // wrap xp1 between -100 .. 0
      xp1.current =
        xp1.current <= -100
          ? 0
          : xp1.current > 0
          ? -100
          : xp1.current;

      xp2.current =
        xp2.current <= -100
          ? 0
          : xp2.current > 0
          ? -100
          : xp2.current;

      // apply transforms
      gsap.set(first1.current, { xPercent: xp1.current });
      gsap.set(second1.current, { xPercent: xp1.current });
      gsap.set(first2.current, { xPercent: xp2.current });
      gsap.set(second2.current, { xPercent: xp2.current });

      // advance
      xp1.current += speed * dir1.current;
      xp2.current += speed * dir2.current;

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className={`sectioner ${styles.partners__section}`}>
      <h2 className={styles.partner__h2}>Our Partners</h2>
      <div className={styles.partners__container}>
        <div className={styles.marquee__top}>
          <div className={styles.mt__content}>
            <div className={styles.mc__container} ref={first1}>
              <Marquee />
            </div>
            <div className={styles.mc__container} ref={second1}>
              <Marquee />
            </div>
          </div>
        </div>
        <div className={styles.marquee__bottom}>
          <div className={styles.mb__content}>
            <div className={styles.mc__container} ref={first2}>
              <Marquee />
            </div>
            <div className={styles.mc__container} ref={second2}>
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
