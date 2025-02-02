import React from 'react'

const Cart = ({cardData}) => {
// console.log(props.cardData);

// const { img, userId, title, body}=props.cardData;

  return (
    <div className=' rounded-lg p-5 shadow-lg'>
        <img src={cardData.img} alt="" />
  <p className="text-sm font-semibold">{cardData.dauserId}</p>
  <p className="text-sm font-medium">{cardData.title}</p>
  <p className="tex-sx">{cardData.body}</p>

    </div>
  )
}

export default Cart