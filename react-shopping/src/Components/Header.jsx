import React from 'react'
import { moneyFormat } from '../helpers'


function Header({total, money}) {
  return (
    <div className='header'>
      {total > 0 && money - total !== 0 && (
        <div>Harcayacak <span>{moneyFormat(money - total)}</span> ₺ paranız kaldı!</div>
      )}
      {total ==0 && (
        <div> Harcamak için <span>{moneyFormat(money)}</span> ₺ paranız var!</div>
      )}
      {money - total == 0 && (
        <div>Para Bitti</div>
      )}
      
    </div>

    
  )
}

export default Header