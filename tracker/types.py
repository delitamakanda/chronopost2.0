import graphene
from graphene_django_extras import DjangoSerializerType, DjangoListObjectType, DjangoObjectType
from graphene_django_extras.paginations import LimitOffsetGraphqlPagination
from tracker.models import Customer, Order, OrderItem
from django.contrib.auth.models import User

class UserType(DjangoObjectType):

    class Meta:
        model = User

class OrderItemType(DjangoObjectType):
    class Meta:
        model = OrderItem


class CustomerType(DjangoObjectType):
    class Meta:
        model = Customer
        filter_fields = {
            'id': ('exact', ),
            'first_name': ('exact', 'icontains', ),
            'last_name': ('exact', 'icontains',),
            'email': ('exact', 'icontains',),
            'phone': ('exact', 'icontains',),
        }

class OrderType(DjangoObjectType):
    class Meta:
        model = Order
        convert_choices_to_enum = False
        filter_fields = {
            'id': ('exact', ),
            'tracking_id': ('exact', 'icontains', ),
            'city': ('exact', 'icontains',),
            'address': ('exact', 'icontains',),
            'customer__first_name': ('exact', 'icontains',),
            'customer__last_name': ('exact', 'icontains',),
        }

class CustomerListType(DjangoListObjectType):
    class Meta:
        model = Customer
        pagination = LimitOffsetGraphqlPagination(default_limit=25, ordering='-created_at')
        
class OrderListType(DjangoListObjectType):
    class Meta:
        model = Order
        pagination = LimitOffsetGraphqlPagination(default_limit=25, ordering='-created_at')
        