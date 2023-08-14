import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
query MyQuery {
    listCustomers {
      results {
        createdAt
        email
        firstName
        id
        lastName
        phone
      }
    }
  }
`

export const GET_CUSTOMER_ORDERS = (customerId: string) => gql`
query MyQuery {
    allOrdersByCustomer(customerId: "${customerId}") {
      id
      address
      carrier
      city
      createdAt
      id
      lat
      lng
      shippingCost
      trackingId
      trackingItems {
        name
        price
        quantity
        id
      }
    }
  }
`

export const GET_ORDERS = gql`
query MyQuery {
    allOrders {
      results {
        address
        carrier
        city
        createdAt
        id
        lat
        lng
        shippingCost
        trackingId
        customer {
          id
          firstName
        }
        trackingItems {
          id
        }
      }
    }
  }
`