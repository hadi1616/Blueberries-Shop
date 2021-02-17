import React from 'react'
import products from '../products/data'
function ProductsList ({ catFilter, priceFilter, myBucket, setMyBucket }) {
  const {myBucketProducts, myBucketPrice} = myBucket

  const [minPrice, maxPrice] = priceFilter
  const productItems = products
    .filter(product => catFilter === 'all' || catFilter === product.category)
    .filter(product => product.price >= minPrice && product.price <= maxPrice)
    .map(product => (
      <li key={product.id} className='card'>
        <h3>{product.productName}</h3>
        <p>{product.description}</p>
        <img className='productImage' src={product.img} />
        <div>
          ₪{product.price.toFixed(2)}
          <img
            className='addToBucket'
            src='img/addToBucket.png'
            onClick={e => {
              setMyBucket({
                myBucketProducts: myBucketProducts.concat(product),
                myBucketPrice: myBucketPrice + product.price
              })
            }}
          />
        </div>
      </li>
    ))
  return (
    <ul className='grid'>
      {productItems.length ? (
        productItems
      ) : (
        <li className='card'>No products found</li>
      )}
    </ul>
  )
}

export default ProductsList
