import './desc.css'

export default function Desc(props) {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block text-xs md:text-sm text-white font-medium mb-3">
                    {props.category}
                </span>
                <h3 className="lg:text-5xl md:text-4xl text-white font-semibold sm:text-3xl mb-3">
                    {props.title}
                </h3>
                <h5 className='text-zinc-200 mb-6'>
                    {props.desc}
                </h5>
                <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                    $ {props.price}
                </button>
            </div>
        </section>
    )
}
