type Customer = {
    id: String;
    email: String;
    firstName: String;
    lastName: String;
    phone: String;
    createdAt: String;
}

type CustomerList = {
    results: [Customer];
}

type Items = {
    id: String;
    name: String;
    price: Number;
    quantity: Number;
}

type Orders = {
    id: String;
    address: String;
    carrier: String;
    city: String;
    createdAt: String;
    lat: Number;
    lng: Number;
    shippingCost: Number;
    trackingId: String;
    trackingItems: [Items];
}

type OrdersList = {
    results: [Orders];
}
