import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({   heroBanner: {
  smallText,
  midText,
  product,
  buttonText,
  image,
  desc,
  largeText1,
}, }) => {
  return (
    <div className="banner-container">
      <h1 className="banner-title">{largeText1}</h1>

      <div className="banner-left">
        <p >{smallText}</p>
        <h3>{midText}</h3>
        <Link  href={`/product/${product}`}>
          <button className="banner-link">{buttonText}</button>
        </Link>

      </div>
      <img src={urlFor(image)} alt="nike" className="banner-img" />

        <div className="banner-right">

            <h5>Description</h5>
            <p>{desc}</p>

        </div>

    </div>
  )
}

export default HeroBanner