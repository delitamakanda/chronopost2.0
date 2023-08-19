import { useQuery } from "@apollo/client";
import { GET_CUSTOMER_ORDERS } from "graphql/queries";
import { useState, useEffect } from "react";

const useCustomerOrders = (customerId: string) => {
    const { loading, error, data } = useQuery(GET_CUSTOMER_ORDERS, { variables: { customerId } });
    const [orders, setOrders] = useState<any>([]);

    useEffect(() => {
        if (!data) {
            return;
        }
        const orders = data.allOrdersByCustomer.map((o: any) => {
            return {
                ...o,
            }
        });
        setOrders(orders);
    }, [data])
    return { loading, error, orders }
}

export default useCustomerOrders;