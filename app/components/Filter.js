import React from 'react'
import styles from "../page.module.css";
import { useState } from "react";
const Filter = ({label}) => {
    const [isListOpen, setIsListOpen] = useState(false);

  const handleButtonClick = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <div className={styles.idealFor}>
    <button className={styles.idealforBut} onClick={handleButtonClick}>
      <span>{label}</span>
     
      <div className={styles.filterArrow}> 
      </div>
      <img className={styles.idealforArrow} src="./arrow.png" />
       
    </button>

    <p>All</p>
    { isListOpen && (    <ul className={styles.idealoptions}>
      <li>
        <input type="checkbox" id="ideal-for-men" name="ideal-for" value="men" />
        <label htmlFor="ideal-for-men">Men</label>
      </li>
      <li>
        <input type="checkbox" id="ideal-for-men" name="ideal-for" value="men" />
        <label htmlFor="ideal-for-men">Women</label>

      </li>
      <li>
        <input type="checkbox" id="ideal-for-men" name="ideal-for" value="men" />
        <label htmlFor="ideal-for-men">Baby & Kids</label>

      </li>

    </ul>)}
    

  </div>
  )
}

export default Filter
