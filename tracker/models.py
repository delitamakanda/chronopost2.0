import uuid
from django.db import models

class Customer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

    class Meta:
        verbose_name_plural = 'customers'
        verbose_name = 'customer'
        ordering = ['-created_at']


CARRIER_CHOICES = (
    ('chronopost', 'chronopost'),
    ('ups', 'ups'),
    ('fedex', 'fedex'),
    ('usps', 'usps'),
    ('other', 'other'),
)

class OrderItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=6)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'order items'
        verbose_name = 'order item'
        ordering = ['-id']

class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits=10, decimal_places=6)
    carrier = models.CharField(max_length=100, choices=CARRIER_CHOICES, default="chronopost")
    lng = models.DecimalField(max_digits=10, decimal_places=6)
    created_at = models.DateField(auto_now_add=True)
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=6, default=0.00)   
    tracking_id = models.CharField(max_length=100) 
    tracking_items = models.ManyToManyField(OrderItem)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)

    def __str__(self):
        return self.address + " " + self.city

    class Meta:
        verbose_name_plural = "orders"
        verbose_name = "order"
        ordering = ['-created_at']

