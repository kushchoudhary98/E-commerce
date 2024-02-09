import './desc.css'

export default function Desc(props) {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block md:text-sm text-white font-medium mb-3">
                    {props.category}
                </span>
                <h3 className="lg:text-5xl md:text-4xl text-white font-semibold sm:text-3xl mb-3 text-2xl">
                    {props.title}
                </h3>
                <h5 className='text-zinc-400 mb-6 hidden md:block'>
                    {props.desc}
                </h5>
                <div className=" bg-white text-black font-medium py-2 px-4 rounded-2xl transition-all active:scale-95 w-[80px] flex justify-center">
                    $ {props.price}
                </div>
            </div>
        </section>
    )
}
