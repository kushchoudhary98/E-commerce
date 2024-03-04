import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
    const goToCategory = () => {
        document.getElementById("category").scrollIntoView(true);
    }

    return (
        <section className="w-full mt-[50px] px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    Fashion for everyone
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Let's style you up
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
                    error repellat voluptatibus ad.
                </p>
                <button onClick={goToCategory} className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                    Shop now
                </button>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1449247666642-264389f5f5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    },
    {
        id: 3,
        src: "https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    },
    {
        id: 4,
        src: "https://plus.unsplash.com/premium_photo-1679858782272-8ee1ba3d4c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1559087316-f8860a97e7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1656428851610-a2de17b056a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1665159882377-385d68d2bdff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1663079899610-2f00543940cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbidzJTIwY2xvdGhpbmd8ZW58MHwwfDB8fHww",
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1603252109360-909baaf261c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbidzJTIwY2xvdGhpbmd8ZW58MHwwfDB8fHww",
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1lbidzJTIwY2xvdGhpbmd8ZW58MHwwfDB8fHww",
    },
    {
        id: 14,
        src: "https://plus.unsplash.com/premium_photo-1683120691333-a877e63f7b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4ncyUyMGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1509461641751-ed8c60422376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJ3MlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D",
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1643825664857-7e6e4124f289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVuJ3MlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleHero;