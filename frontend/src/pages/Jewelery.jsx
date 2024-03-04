import Card from './components/Card'
import CardSkeleton from './components/CardSkeleton'
import './jewelery.css'
import { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

export default function Jewelery() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        async function getData() {
            await fetch("https://fakestoreapi.com/products/category/jewelery")
                .then(res => res.json())
                .then(json => {
                    setData(json)
                    setLoader(true)
                })
        }
        getData()
    }, [])

    return (
        <div id='category-page'>
            <div id="cards" className='flex flex-wrap flex-col sm:flex-row gap-5 md:w-screen px-5 mt-[100px] lg:mt-[100px]'>
                {
                    loader ? data.map((item) => {
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
