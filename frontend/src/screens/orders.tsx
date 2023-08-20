import useOrders from "hooks/useOrders";
import { useEffect, useState } from "react";
import Image from '../assets/images/orders.jpeg';
import OrderCard from "components/ui/OrderCard";
import { Outlet } from "react-router-dom";

const OrdersScreen = () => {
    const { orders, loading, error } = useOrders();
    const [asc, setAsc] = useState<boolean>(false);

    const handleSort = () => {
        setAsc(!asc);
    };

    const handleSubscribeToNewOrders = () => {
        console.log("Subscribe to new orders");
    }
    
    useEffect(() =>{

    }, []);
    return (
        <div style={{ backgroundColor: '#EB6A7C', height: '100%'}}>
            <div className="w-full h-64">
                <img src={Image} alt="" />
            </div>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{JSON.stringify(error)}</p>}
            <div className="py-2 px-5 pb-20">
                <button className="w-full text-gray-400 bg-pink-200 mb-5" onClick={handleSort}>{asc ? 'Showing: Oldest First': 'Showing: Most Recent First'}</button>

                {orders.sort((a: any, b: any) => {
                    if (!asc) {
                        return new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1;
                    } else {
                        return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
                    }
                }).map((order: any, idx: number) => (
                    <OrderCard key={idx} order={order} />
                ))}
                <button style={{ color: '#EC4899'}} onClick={handleSubscribeToNewOrders} className="w-full rounded bg-white p-2">Load more results</button>
            </div>
            <Outlet />
        </div>
    )
}

export default OrdersScreen;