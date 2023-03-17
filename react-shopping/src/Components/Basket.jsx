import React from 'react'
import Basketitem from './Basketitem'

function Basket({basket,resetBasket, total, products}) {
  return (
       <div className='basket-container container'>
        <h3>Alışveriş İçeriği</h3>
        {
            basket.map(item => (
                <Basketitem key={item.id} item = {item} product={products.find(p => p.id == item.id)} />
               ))
        }
               
        <div className='total'>
            Toplam : {total}₺
        </div>
        
        <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>

       </div>
  )
}

export default Basket