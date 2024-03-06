import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import CartSkeleton from "./components/CartSkeleton";

export default function Cart() {
    let link = "https://e-commerce-backend-uwqv.onrender.com/getcart"
    const user = JSON.parse(localStorage.getItem('user'));
    const [render, setRender] = useState(false);

    if (!user) {
        window.location.href = '/login';
    }

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        axios.post(link, {
            email: user.email
        }).then(res => {
            setData(res.data);
            setLoading(false);
        })
    }, [render]);

    return (
        <div>
            <div className='sm:ml-14 mx-8 lg:mt-[120px] md:mt-[80px] sm:mt-[80px] mt-[80px] flex flex-wrap justify-center'>
                <div id="cart" className='sm:w-1/2 md:min-w-[700px] sm:min-w-[500px]'>
                    <p className='font-sans text-gray-700 md:text-3xl sm:text-2xl text-2xl font-medium'>Shopping Cart</p>
                    <hr className='mt-4' />
                    <ul id="cart-items">
                        {
                            loading ? <CartSkeleton />
                                : (data.cart.length == 0) ? 'Add items to cart'
                                    : data.cart.map((item) => {
                                        return (<CartItem item={{item, render, setRender}} />);
                                    })
                        }
                    </ul>
                </div>
                <div id="order-summary" className='lg:mr-4 flex justify-center'>
                    <OrderSummary price={data.price} />
                </div>
            </div>
        </div>
    )
}
