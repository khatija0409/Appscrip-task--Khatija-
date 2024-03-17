"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(true); 

  const images = [
    { src: '/image1.png', alt: 'Image 1 description' },

    { src: ' /image3.jpeg', alt: 'Image 3 description' },
    { src: ' /image4.jpeg', alt: 'Image 4 description' },
    { src: '/image5.jpeg', alt: 'Image 5 description' },
    { src: ' /image6.jpeg', alt: 'Image 6 description' },
    { src: ' /image7.jpeg', alt: 'Image 7 description' },
    { src: ' /image8.jpeg', alt: 'Image 8 description' },
    { src: ' /image9.jpeg', alt: 'Image 9 description' },

  ];

  return (

    <div className={styles.container}>
      <div className={styles.topContainer} >

        <div className={styles.preNav}>
          <img className={styles.logoImg} src="./logo.png" />
          <span className={styles.logoText}>LOGO</span>

          <div className={styles.logo}>
            <div>
              <img className={styles.sideLogo} src="./search.png" />
            </div>
            <div>
              <img className={styles.sideLogo} src="./heart.png" />
            </div>
            <div>
              <img className={styles.sideLogo} src="./shoppingBag.png" />
            </div>
            <div>
              <img className={styles.sideLogo} src="./person.png" />
            </div>
            <span className={styles.engText}>
              ENG
            </span>
            <div>
              <img className={styles.arrow} src="./arrow.png" />
            </div>
          </div>
        </div>

        <div className={styles.nav}>

          <div>
            <span className={styles.navText}>
              SHOP
            </span>
          </div>
          <div>
            <span className={styles.navText}>
              SKILLS
            </span>
          </div>
          <div>
            <span className={styles.navText}>
              STORIES
            </span>
          </div>
          <div>
            <span className={styles.navText}>
              ABOUT
            </span>
          </div>
          <div>
            <span className={styles.navText}>
              CONTACT US
            </span>
          </div>

        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          DISCOVER OUR PRODUCTS
        </div>
        <span className={styles.infoText} >
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.

          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </span>

      </div>

      <div className={styles.midContainer}>
        <div className={styles.midContainerLine}>
        </div>

        <div className={styles.midLeft} >
          <span className={styles.midLeftText} >
            3425 Items
          </span>
          <div className={styles.midLeft1}>

            <button  className={styles.midLeft1But} onClick={() => setIsFilterVisible(!isFilterVisible)}>

              <div className={styles.leftArrowLogo}>
                <img className={styles.leftArrow} src="./arrow.png" />
              </div>
              <span className={styles.midLeft1Text} >
              {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
              </span>
            </button>

          </div>

          <div className={styles.midRight}>

            <button
              onClick={() => { setIsOpen(!isOpen); }}
              className={styles.button}>
              <span className={styles.midRightText}>
                RECOMMENDED
              </span>
              <div >
                <img className={styles.midRightArrow} src="./arrow.png" />
              </div>
            </button>
            {isOpen && (<ul className={styles.dropdown}>
              <li><a href="#">RECOMMENDED</a></li>
              <li><a href="#">NEWEST FIRST</a></li>
              <li><a href="#"> POPULAR</a></li>
              <li><a href="#"> PRICE : HIGH TO LOW</a></li>
              <li><a href="#"> PRICE : LOW TO HIGH</a></li>
            </ul>)}

          </div>
        </div>
        <div className={styles.midContainerLine}>
        </div>
      </div>

      <div className={styles.mainContainer}>

        <div className={styles.filters} style={{ display: isFilterVisible ? 'block' : 'none' }}>

          <div >
            <input type="checkbox" id="checkbox-id" />
            <label htmlFor="checkbox-id" className={styles.filterHeading}>CUSTOMIZABLE</label>
          </div>

          <div className={styles.line}>

          </div>


          <Filter label="IDEAL FOR" />
          <div className={styles.line}>

          </div>
          <Filter label="OCASSION" />
          <div className={styles.line}> </div>
          <Filter label="WORK" />
          <div className={styles.line}> </div>
          <Filter label="FABRIC" />
          <div className={styles.line}> </div>
          <Filter label="SEGMENT" />
          <div className={styles.line}> </div>
          <Filter label="SUITABLE FOR" />
          <div className={styles.line}> </div>
          <Filter label="RAW MATERIALS" />
          <div className={styles.line}> </div>
          <Filter label="PATTERN" />
        </div>

        <div className={styles.products}>
          <div>
            {images.map((image) => (
              <img className={styles.prod}
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={180}
                height={300}


              />
            ))}

          </div>



        </div>
      </div>

      <Footer />
    </div>

  );
}
