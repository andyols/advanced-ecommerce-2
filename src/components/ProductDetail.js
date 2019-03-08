import React from 'react'
import PropTypes from 'prop-types'

const ProductDetail = ({ img, title, desc, price }) => {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={img} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <h4>{price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.any
}

export default ProductDetail
