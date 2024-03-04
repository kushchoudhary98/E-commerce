import Card from './components/Card'
import './jewelery.css'
import { useEffect, useState } from 'react'
import CardSkeleton from './components/CardSkeleton'

export default function Women() {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function getData() {
            await fetch("https://fakestoreapi.com/products/category/women\'s%20clothing")
                .then(res => res.json())
                .then(json => {
                    setData(json)
                    setLoad(true)
                })
        }
        getData()
    }, [])

    return (
        <div id='category-page'>
            <div id="cards" className='flex flex-wrap justify-start gap-5 md:w-11/12 w-11/12 mt-[100px] lg:mt-[100px]'>
                {
                    load ? data.map((item) => {
                        return <Card item={item}></Card>
                    })
                        : [1, 2, 3, 4].map((item) => {
                            return (<CardSkeleton />)
                        })
                }
            </div>
        </div>
    )
}
