import useOrders from "hooks/useOrders";
import { useEffect, useState } from "react";
import Image from '../assets/images/orders.jpeg';

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
        <div style={{ backgroundColor: '#EC4899'}}>
            <div className="w-full h-64">
                <img src={Image} alt="" />
            </div>
            {loading && <p className="text-center">Loading...</p>}
            <div className="pt-5 pb-20">
                {error && <p className="text-red-500 text-center">{JSON.stringify(error)}</p>}
                {orders?.map((order: any, idx: number) => (
                    <div key={idx} className="w-full bg-white rounded-lg shadow-lg">
                        {order.customer.firstName} {order.customer.lastName}
                        {order.id}

                    </div>
                ))}
                <button style={{ color: '#EC4899'}} onClick={handleSubscribeToNewOrders} className="w-full rounded bg-white p-2">Load more results</button>
            </div>
        </div>
    )
}

export default OrdersScreen;