import Card from './components/Card'
import './jewelery.css'
import { useEffect, useState } from 'react'

export default function Electronics() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            await fetch("https://fakestoreapi.com/products/category/electronics")
                .then(res => res.json())
                .then(json => setData(json))
        }
        getData()
    },[])

  return (
    <div id='category-page'>
        <div id="cards">
            {data.map((item) => {
                return <Card item={item}></Card>
            })}
        </div>
    </div>
  )
}
