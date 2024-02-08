import Card from './components/Card'
import './jewelery.css'
import { useEffect, useState } from 'react'

export default function Men() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            await fetch("https://fakestoreapi.com/products/category/men\'s%20clothing")
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
