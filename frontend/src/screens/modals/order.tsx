import { useQuery } from "@apollo/client";
import DeliveryCard from "components/ui/DeliveryCard";
import NavHeader from "components/views/NavHeader";
import { GET_ORDER_BY_ID } from "graphql/queries";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const Order = () => {
    const { orderId } = useParams();
    const { data, error, loading } = useQuery(GET_ORDER_BY_ID, { variables: { orderId } });

    useEffect(() => {
        // todo
    }, []);

    return (
        <>
            <NavHeader color="#EB6A7C" title={data?.getOrderById?.customer?.firstName + ' ' + data?.getOrderById?.customer?.lastName} backTitle="Deliveries" />
            <div style={{ backgroundColor: '#EB6A7C'}} className="overflow-y-auto overflow-x-hidden w-full h-full fixed pb-20">
                {loading && <div>Loading...</div>}
                {error && <div className="text-red-500">{JSON.stringify(error)}</div>}
                {data && <DeliveryCard order={data?.getOrderById} fullWidth />}
            </div>
        </>
    )
}

export default Order;
