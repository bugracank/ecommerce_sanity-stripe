import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="inner-product-container">
      <Link href={`/product/${slug.current}`} className="products-link">
        <div className="products-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="products-image"
          />
          <p >{name}</p>
          <p >${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product