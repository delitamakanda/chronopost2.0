import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
query MyQuery($offset: Int!) {
  listCustomers {
    results(offset: $offset) {
      createdAt
      email
      firstName
      id
      lastName
      phone
    }
    totalCount
  }
}
`

export const GET_CUSTOMER_ORDERS = gql`
query MyQuery($customerId: String!) {
    allOrdersByCustomer(customerId: $customerId) {
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