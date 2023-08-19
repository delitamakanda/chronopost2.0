import DeliveryCard from "components/ui/DeliveryCard";
import useCustomerOrders from "hooks/useCustomerOrders";
import { useLocation } from "react-router-dom";

const Customer = () => {
    const location = useLocation();
    const { name, id } = location.state;
    const { orders} = useCustomerOrders(id);
    return (
        <div>
            <div className="py-5 border-b" style={{borderColor:'#59C1CC'}}>
                <p className="text-center text-xl font-bold" style={{color:'#59C1CC'}}>{name}</p>
                <p className="text-center text-sm text-gray-800 italic">deliveries</p>
            </div>
            <>
                {orders && orders.map((order: any, i: number) => (
                    <DeliveryCard key={i} order={order} />
                ))}
            </>
          
        </div>
    )
}

export default Customer;