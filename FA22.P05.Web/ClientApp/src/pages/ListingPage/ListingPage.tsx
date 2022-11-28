import React from "react";

import styles from './_ListingPage.module.scss';

/**
 * <description here>
 */
export function ListingPage(): React.ReactElement {
  return (
      <div className={styles['product-details']}>
          ProductDetails
           <div className={styles['gallary']}>
        <div className={styles['main-image']}>

        </div>
        <div className={styles['image-options']}>
            <div className={styles['image']} />
            <div className={styles['image']} />
            <div className={styles['image']} />
            <div className={styles['image']} />
            <div className={styles['image']} />
        </div>
          </div>

          <nav className={styles['navbar']}>
              <span>Logo</span>
              <span>My Cart</span>
          </nav>
      </div>

  );
}
