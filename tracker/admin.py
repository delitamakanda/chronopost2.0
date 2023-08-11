from django.contrib import admin
from tracker.models import Customer, Order, OrderItem

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'email', 'phone')
    search_fields = ('first_name', 'email', 'phone')

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at')
    search_fields = ('created_at', 'address', 'city','state', 'zip_code',)
    list_filter = ('created_at',)


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id',)


admin.site.register(Customer, CustomerAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
