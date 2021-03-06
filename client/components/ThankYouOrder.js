import React from 'react'
import { Link } from 'react-router-dom'

const ThankYouOrder = () => {
  return (
    <div className="center">
      <h1 className="karla-font">
        Thank you for your order!
      </h1>
      <br />
      <br />
      <Link to="/home">
      <button className="btn btn-secondary" type="button">Keep Shopping</button>
      </Link>
    </div>
  )
}

export default ThankYouOrder
