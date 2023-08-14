import Inbox from "components/icons/inbox";
import useCustomerOrders from "hooks/useCustomerOrders";

type Props = {
    email: string;
    name: string;
    id: string;
}

const CustomerCard = ({ email, name, id }: Props)=> {
    const { orders, loading } = useCustomerOrders(id);
    return (
        <div className="hover:opacity-70 focus:opacity-70">
            <div className="p-5 mb-5 bg-white rounded-lg">
                <div>
                    <div className="flex flex-row">
                        <div>
                            <p className="text-2xl font-bold">{name}</p>
                            <p className="text-sm" style={{ color: '#59C1CC'}}>ID: {id}</p>
                        </div>
                        <div className="flex flex-row items-center justify-end">
                            <p className="text-xs">{loading ? "loading..." : `${orders.length }x`}</p>
                            <span className="mb-5 ml-auto">
                                <Inbox size={50} color="#59C1CC" />
                            </span>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-xs mt-2">{email}</p>
            </div>
        </div>
    )
}

export default CustomerCard;