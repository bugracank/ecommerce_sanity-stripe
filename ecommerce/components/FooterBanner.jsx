import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <h3>{largeText1}</h3>

      <div className="inner-footer-banner-container">
        <div className="footer-banner-left">
          <p>{discount}</p>
          <p>{saleTime}</p>
        </div>
        <div className="footer-banner-right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <Link href={`/product/${product}`}>
            <button className="footer-banner-button" type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner