import MiddleCard from "./MiddleCard";
import { useState, useEffect } from "react";

export default function Middle() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const temp = []
        async function getCategories(){
            await fetch("https://fakestoreapi.com/products/categories")
                .then(res=>res.json())
                .then(json => json.map((item) => {
                    temp.push(item)
                }))
            setCategories(temp)
        }
        getCategories()
    })


  return (
    <div id="category" className='md:mt-16 mt-10 flex justify-center items-center flex-wrap'>
        {categories.map((i) => {
            return <MiddleCard item={i} />
        })}
    </div>
  )
}
