from django.urls import path
from tracker import views
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

urlpatterns = [
    path('customers/', views.CustomerListView.as_view(), name='api-customers'),
    path('customers/<str:id>/', views.CustomerDetailView.as_view(), name='api-customer'),
    path('orders/', views.OrderListView.as_view(), name='api-orders'),
    path('orders/<str:id>/', views.OrderDetailView.as_view(), name='api-order'),
    path('graphiql', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
