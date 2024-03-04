import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CategorySkeleton from "./CategorySkeleton";


export default function Category() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    function getImage(image) {
    }

    useEffect(() => {
        const temp = []
        async function getCategories() {
            await fetch("https://fakestoreapi.com/products/categories")
                .then(res => res.json())
                .then(json => json.map((item) => {
                    temp.push(item)
                }))
            setCategories(temp)
            setLoading(false);
        }
        getCategories()
    })

    return (
        <div id="category" className="bg-gray-100 mt-10">
            <div className="mx-auto w-screen px-4 sm:px-6 lg:px-8">
                <div className="mx-auto py-16 lg:max-w-none">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-10">Shop by Category</h2>

                    <div className="flex mt-6 gap-3 flex-wrap justify-evenly">
                        {loading?
                        [1,2,3,4].map((item) => {
                            return (<CategorySkeleton />)
                        })
                        :categories.map((category) => (
                            <div key={category} className="group relative mb-10 w-80">
                                <div className="relative h-80 overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={ '/src/assets/' + category + '.jpg' }
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500 w-80">
                                    <Link to={'/' + category}>
                                        <span className="absolute inset-0 h-80" />
                                        Lorem ipsum dolor sit amet.
                                    </Link>
                                </h3>
                                <p className="text-base font-semibold text-gray-900 w-80">{category.toUpperCase()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
