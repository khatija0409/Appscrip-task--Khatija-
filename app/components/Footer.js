import React from 'react'
import styles from "../page.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.Upperfooter}>
        <div className={styles.leftUpper}>

          <span className={styles.footerText}>
            BE THE FIRST TO KNOW
          </span>
          <p className={styles.footerTextSmall}>
            Sign up for updates from meta muse.
          </p>


          <input type="email" placeholder="Enter your e-mail..." className={styles.search} />
          <button className={styles.subBut} type="submit">Subscribe</button>
        </div>

        <div className={styles.rightUpper}>
          <p className={styles.footerText}>CONTACT US</p>

          <p className={styles.footerTextSmall}> +44 221 133 5360</p>
          <p className={styles.footerTextSmall}>  customercare@mettamuse.com</p>
          <p className={styles.footerText}>  CURRENCY</p>
          <p className={styles.footerText}> USD</p>
          <p className={styles.footerTextSmall}>  Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>



      </div>


      <div className={styles.footerline}>

      </div>

      <div className={styles.Lowerfooter}>
        <div>
          <p className={styles.footerText}>
            metta muse
          </p>
          <p className={styles.footerTextSmall}>
            About Us
          </p>
          <p className={styles.footerTextSmall}>
            Stories
          </p>
          <p className={styles.footerTextSmall}>
            Artisans
          </p>
          <p className={styles.footerTextSmall}>
            Boutiques
          </p>
          <p className={styles.footerTextSmall}>
            Contact Us
          </p>
          <p className={styles.footerTextSmall}>
            EU Compliance Docs
          </p>

        </div>


        <div>

          <p className={styles.footerText}>
            QUICK LINKS
          </p>
          <p className={styles.footerTextSmall}>
            Orders & Shipping
          </p>
          <p className={styles.footerTextSmall}>
            Join/Login as a seller
          </p>
          <p className={styles.footerTextSmall}>
            Payment & Pricing
          </p>
          <p className={styles.footerTextSmall}>
            Return & Refunds
          </p>
          <p className={styles.footerTextSmall}>
            FAQs
          </p>
          <p className={styles.footerTextSmall}>
            Privacy Policy
          </p>

          <p className={styles.footerTextSmall}>
            Terms & Conditions
          </p>

        </div>

        <div>
          <p className={styles.footerText}>
            FOLLOW US
          </p>
          <p className={styles.footerText}>
            metta muse ACCEPTS
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
