import Card from './components/Card'
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
            <div id="cards" className='md:w-9/12 w-11/12 mt-[64px] lg:mt-[100px]'>
                {loader ? data.map((item) => {
                    return <Card item={item}></Card>
                }) :
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[]} />}
            </div>
        </div>
    )
}
