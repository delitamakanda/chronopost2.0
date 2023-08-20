import Inbox from "components/icons/inbox";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "components/utils/Map";
import Marker from "components/utils/Marker";

const render = (status: Status) => {
    return <h1>{status}</h1>;
};

type Props = {
    order: any;
    fullWidth?: boolean | any;
};

const DeliveryCard = ({ order, fullWidth }: Props) => {
    const center = {lat: order.lat, lng: order.lng};
    const zoom = 4;
    const position = {lat: order.lat, lng: order.lng};
    return (
        <div className={fullWidth ? 'rounded-none-m-0': 'rounded-lg my-2 shadow'} style={{backgroundColor: fullWidth ? '#EB6A7C': '#59C1CC'}}>
            <div className="flex flex-col items-center" style={fullWidth && { height: '100%'}}>
                <Inbox size={50} color="white" />
                <div className="text-xs text-center uppercase text-white font-bold">
                    <p>{order.carrier} - {order.trackingId}</p>
                    <p className="text-lg font-bold">Expected Delivery : {new Date(order.createdAt).toLocaleDateString()}</p>
                    <hr />
                </div>
                <div className="mx-auto">
                    <p className="text-base text-center text-white font-bold mt-5">Address</p>
                    <p className=" text-center text-white text-sm">{order.address}, {order.city}</p>
                    <p className=" text-center text-white text-sm italic">Shipping Cost: {order.shippingCost}€</p>
                </div>
                <hr style={{ borderColor: "white"}} />
                <div className="p-5 w-full">
                {order.trackingItems.map((item: any, index: number) => (
                    <div className="flex flex-row justify-between items-center" key={index}>
                        <p className="italic  text-white text-sm">{item.name}</p>
                        <p className=" text-white text-xl">{item.quantity}</p>
                    </div>
                ))}
                </div>
                {
                    order.lat && order.lng && (
                        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API as string} render={render}>
                            <Map zoom={zoom} center={center}>
                                <Marker position={position} />
                            </Map>
                        </Wrapper>
                    )
                }
            </div>
        </div>
    )
}

export default DeliveryCard;

/*
address
: 
"34740 Brittany Forest\nElizabethmouth, WV 16959"
carrier
: 
"CHRONOPOST"
city
: 
"Oliverbury"
createdAt
: 
"2023-08-12"
id
: 
"6b51c77b-0eee-4c4b-82df-529b03484a93"
lat
: 
75.275918
lng
: 
28.619033
shippingCost
: 
6
trackingId
: 
"130-74-3149"
trackingItems
: 
[{name: "article 271", price: 608, quantity: 2, id: "fcd75466-4686-4304-81c7-350d92afcb49",…},…]
__typename
: 
"OrderType"*/