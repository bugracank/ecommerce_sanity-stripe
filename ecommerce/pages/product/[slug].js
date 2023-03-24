import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }
  const relatedTo = products.filter(
      (item) => item.brand === product.brand && item._id !== product._id
  );
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="product-detail-image">
            <img src={urlFor(image && image[index])}  />
          </div>

        </div>

        <div className="product-detail-description">
          <h1>{name}</h1>
          <h1>Details:</h1>
          <p>{details}</p>
          <p>${price}</p>
          <div className="product-detail-cart">
            <span onClick={decQty}>
              <AiOutlineMinus />
            </span>
            <span>{qty}</span>
            <span onClick={incQty}>
              <AiOutlinePlus />
            </span>
          </div>

          <div className="product-details-buttons">
            <button type="button"  onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button"  onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="slugs-container">
          <h2>You may also like</h2>

            <div className="slugs-inner-container">
              {relatedTo &&
                  relatedTo.map((item) => <Product key={item._id} product={item} />)}
            </div>

      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails