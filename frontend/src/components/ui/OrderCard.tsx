import ShoppingBag from "components/icons/shopping-bag";
import ShoppingCart from "components/icons/shopping-cart";
import { Link } from "react-router-dom";

type Props = {
    order: any;
}

const OrderCard = ({ order } : Props) => {
    return (
        <Link to={{pathname: `/orders/${order.id}` }} state={{order}} className="hover:opacity-70 focus:opacity-70">
            <div className="p-5 mb-5 bg-white rounded-lg">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <ShoppingCart color="#EB6A7C" />
                        <p className="text-xs">{new Date(order.createdAt).toDateString()}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">
                            {order.carrier.toLowerCase()}-{order.trackingId}
                        </p>
                        <p  className="text-xl text-gray-500">
                            {order.customer.firstName} {order.customer.lastName}
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="text-sm" style={{ color: "#EB6A7C"}}>{order.trackingItems.length}x</p>
                        <span className="ml-2">
                        <ShoppingBag />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OrderCard;