import React from "react";
import HeroImage from "../../assets/HeadPhone.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>
          100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
        </h1>
      </div>
      <div>
        <img src={HeroImage} alt="headphones" width={212} />
      </div>
    </div>
  );
};
export default Hero;