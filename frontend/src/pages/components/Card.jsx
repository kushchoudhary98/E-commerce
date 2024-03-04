import axios from 'axios'
import { useState } from 'react'

export default function Card(props) {
  let link = 'http://localhost:9000/additem'
  const user = JSON.parse(localStorage.getItem('user'));

  const [adding, setAdding] = useState(false);

  const quickViewHandlerOpen = () => {
    document.getElementById(props.item.id).style.display = 'flex';
  }
  const quickViewHandlerClose = () => {
    document.getElementById(props.item.id).style.display = 'none';
  }

  let itemrating = Math.round(props.item.rating.rate);

  const addItemHandler = () => {
    setAdding(true);

    if (!JSON.parse(localStorage.getItem('user'))) {
      setAdding(false);
      window.location.href = '/login';
    }

    axios.post(link, {
      email: user.email,
      item: props.item.id,
      quantity: 1
    }).then((res) => {
      setAdding(false)
    })
  }

  return (
    <div className='w-[300px] h-[470px]'>
      <div id='card' onClick={quickViewHandlerOpen} className='absolute border-[1px] rounded-md w-[300px] h-[470px] cursor-pointer'>
        <div className='flex justify-center items-center bg-gray-100 w-[300px] h-[300px]'>
          <img src={props.item["image"]} className='h-[300px] p-5 object-contain' style={{ mixBlendMode: 'multiply' }}></img>
        </div>
        <div className='w-full h-[150px] flex flex-col justify-between'>
          <div>
            <h2 className='m-3 font-sans font-semibold text-zinc-700 text-lg md:text-lg h-[25px] overflow-hidden max-h-[88px]'>{props.item["title"]}</h2>
            <p className='m-3 max-h-[54px] overflow-hidden hidden md:block'>{props.item["description"]}</p>
          </div>
          <p className='flex m-3 items-center font-sans text-md font-semibold'>${props.item["price"]}</p>
        </div>
      </div>
      <div id={props.item.id} className='fixed top-0 left-0 hidden justify-center items-center z-30 w-screen h-screen transition-all' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className='bg-white flex h-[500px] w-[800px] opacity-100 rounded-lg'>
          <div className='flex justify-center items-center bg-gray-100 w-[300px] h-[500px] rounded-s-lg'>
            <img src={props.item["image"]} className='h-[450px] p-8 object-contain' style={{ mixBlendMode: 'multiply' }}></img>
          </div>
          <div className='h-[500px] w-[500px] pt-8 flex flex-col justify-between'>
            <div>
              <div className='flex justify-between items-center'>
                <h2 className='mx-5 font-sans font-bold text-zinc-700 text-lg md:text-2xl h-[30px] w-[450px] overflow-hidden'>{props.item["title"]}</h2>
                <button onClick={quickViewHandlerClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fillRule="currentColor" className="bi bi-x-lg mx-7" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </button>
              </div>
              <p className='flex m-5 items-center font-sans text-2xl'>${props.item["price"]}</p>
              <div className='flex m-5 gap-1'>
                <p className='mr-2 text-gray-600'>{props.item.rating.rate}</p>
                {[1, 2, 3, 4, 5].map((star) => {
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" className={(star <= itemrating) ? 'text-yellow-500' : 'text-zinc-200'} viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>)
                })}
                <p className='ml-3 text-indigo-700 font-semibold'>{props.item.rating.count} reviews</p>
              </div>
              <p className='m-5 mt-10 overflow-hidden max-h-[192px]'>{props.item["description"]}</p>
            </div>
            <button onClick={addItemHandler} className='bg-indigo-600 hover:bg-indigo-800 m-6 py-2 rounded-lg text-white font-sans text-lg'>
              {adding ? 'Adding...' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
