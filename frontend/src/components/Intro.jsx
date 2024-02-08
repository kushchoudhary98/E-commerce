import Desc from './Desc'
import Middle from './Middle'
import './intro.css'
import { useState, useEffect } from 'react'

export default function Intro() {
    const [id, setId] = useState(1)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0.0)
    const [category, setCategory] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")

    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
            .then(res=>res.json())
            .then(json=> {
                const product = json[id];
                setTitle(product["title"])
                setPrice(product["price"])
                setCategory(product["category"])
                setDesc(product["description"])
                setImage(product["image"])
            })
      
      // useEffect(() => {
      //   setTimeout(() => {
      //     if(id == 3) setId(0);
      //     else setId(id+1);
      //   }, 5000)
      // })

  return (
    <div id='intro-h'>
        <div id='intro'>
          <Desc title={title} price={price} category={category} desc={desc} />
          <img src={image} alt={title} width='300' className='rounded-2xl lg:mr-20 md:mr-10 sm:mr-3' loading='lazy'></img>
        </div>
        <Middle />
    </div>
  )
}