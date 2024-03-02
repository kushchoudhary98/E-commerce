import './card.css'
import axios from 'axios'
import { useState } from 'react'

export default function Card(props) {
  let link = 'http://localhost:9000/additem'
  const user = JSON.parse(localStorage.getItem('user'));

  const [adding, setAdding] = useState(false);

  const addItemHandler = () => {
    setAdding(true);
    axios.post(link,{
      email: user.email,
      item: props.item.id,
      quantity: 1
    }).then((res) => {
      setAdding(false)
    })
  }

  return (
    <div id='card'>
      <div className='flex justify-center ml-4'>
        <img src={props.item["image"]} className='w-[100px] md:h-[150px] md:w-auto aspect-auto'></img>
      </div>
      <div className='w-full'>
        <h2 className='m-3 font-sans font-semibold text-lg md:text-2xl overflow-hidden max-h-[88px]'>{props.item["title"]}</h2>
        <p className='m-3 max-h-12 overflow-hidden hidden md:block'>{props.item["description"]}</p>
        <div className='m-3 flex flex-row'>
          <p className='flex items-center font-sans text-white bg-black rounded-lg p-1 px-2 text-sm'>${props.item["price"]}</p>
          <button onClick={addItemHandler} className='text-sm md:text-base ml-4 border-2 border-black px-3 rounded-lg flex items-center py-1 hover:bg-blue-800 hover:border-blue-800 transition-all hover:text-white'>{adding?'Adding...':'Add to cart'}</button>
        </div>
      </div>
    </div>
  )
}
