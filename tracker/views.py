from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from tracker.authentication import FirebaseAuthentication
from tracker.models import Customer, Order, OrderItem
from tracker.serializers import CustomerSerializer, OrderSerializer, OrderItemSerializer

class CustomerListView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (FirebaseAuthentication,)

    def get(self, request, format=None):
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        response =  {
            "status": status.HTTP_200_OK,
            "data": serializer.data,
            "message": "Customer list retrieved successfully"
        }
        return Response(response, status=status.HTTP_200_OK)

class CustomerDetailView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (FirebaseAuthentication,)

    def get(self, request, id, format=None):
        customer = get_object_or_404(Customer, id=idk)
        serializer = CustomerSerializer(customer)
        response =  {
            "status": status.HTTP_200_OK,
            "data": serializer.data,
            "message": "Customer retrieved successfully"
        }
        return Response(response, status=status.HTTP_200_OK)

class OrderListView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (FirebaseAuthentication,)

    def get(self, request, format=None):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        response =  {
            "status": status.HTTP_200_OK,
            "data": serializer.data,
            "message": "Order list retrieved successfully"
        }
        return Response(response, status=status.HTTP_200_OK)

class OrderDetailView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (FirebaseAuthentication,)

    def get(self, request, id, format=None):
        order = get_object_or_404(Order, id=id)
        serializer = OrderSerializer(order)
        response =  {
            "status": status.HTTP_200_OK,
            "data": serializer.data,
            "message": "Order retrieved successfully"
        }
        return Response(response, status=status.HTTP_200_OK)
