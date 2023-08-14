import graphene
from tracker.models import Order, OrderItem, Customer
from tracker.types import OrderItemType, OrderType, CustomerType, CustomerListType, OrderListType
from graphene_django_extras import DjangoListObjectField

class Query(graphene.ObjectType):
    list_customers = DjangoListObjectField(CustomerListType)
    all_orders = DjangoListObjectField(OrderListType)
    all_orders_items = graphene.List(OrderItemType)
    all_orders_by_customer = graphene.List(OrderType, customer_id=graphene.String())
    get_order_by_id = graphene.Field(OrderType, order_id=graphene.String(required=True))
    get_order_items_by_id = graphene.Field(OrderItemType, id=graphene.String(required=True))

    def resolve_get_order_by_id(self, info, order_id):
        return Order.objects.get(id=order_id)

    def resolve_get_order_items_by_id(self, info, id):
        return OrderItem.objects.get(id=id)

    def resolve_all_orders_by_customer(self, info, customer_id):
        return Order.objects.filter(customer__id__iexact=customer_id)

    def resolve_all_orders_items(self, info):
        return OrderItem.objects.all()


