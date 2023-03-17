import React from 'react'

function Basketitem({item, product}) {
  return (
    <div className='basketitem'>
        <li>
        {product.title} x <span>{item.amount}</span>
        </li>
    </div>
  )
}

export default Basketitem