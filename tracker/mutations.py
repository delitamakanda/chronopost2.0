import graphene
from django.contrib.auth.models import User
from tracker.models import Customer, Order, OrderItem
from tracker.types import CustomerListType, CustomerType, OrderType, OrderItemType


class CreateCustomer(graphene.Mutation):
    customer = graphene.Field(CustomerType)

    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
        phone = graphene.String(required=True)

    def mutate(self, info, first_name, last_name, email, phone):
        customer = Customer(first_name=first_name, last_name=last_name, email=email, phone=phone)
        customer.save()
        return CreateCustomer(customer=customer)

class Mutation(graphene.ObjectType):
    create_customer = CreateCustomer.Field()