import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "graphql/queries";
import { useState, useEffect } from "react";

const useOrders = () => {
    const { loading, error, data } = useQuery(GET_ORDERS, { variables: { offset: 0}});
    const [orders, setOrders] = useState<any>([]);

    useEffect(() => {
        if (!data) {
            return;
        }
        const orders = data.allOrders.results.map((o: any) => {
            return {
                ...o,
            }
        });
        setOrders(orders);
    }, [data])
    return { loading, error, orders }
}

export default useOrders;