from django.core.management.base import BaseCommand, CommandError
from tracker.models import Customer, OrderItem, Order, CARRIER_CHOICES
from faker import Faker

fake = Faker()

class Command(BaseCommand):
    help = "Fake data"

    def handle(self, *args, **options):
        # create 10 customers
        for _ in range(10):
            print(fake.name())
            obj = Customer.objects.get_or_create(
                first_name=fake.name().split(' ')[0],
                last_name=fake.name().split(' ')[1],
                email=fake.email(),
                phone=fake.phone_number(),
            )

        # create 10 order items
        for _ in range(10):
            obj = OrderItem.objects.get_or_create(
                price=fake.random_int(min=0.00, max=50.00),
                quantity=fake.random_int(min=0, max=10),
                name='lorem ipsum {}'.format(fake.random_int(min=0, max=1000)),
            )
        items = OrderItem.objects.all()
        # create 10 orders
        for _ in range(10):
            print(fake.name())
            obj = Order.objects.get_or_create(
                customer=fake.random_element(Customer.objects.all()),
                address=fake.address(),
                city=fake.city(),
                lat=fake.latitude(),
                lng=fake.longitude(),
                shipping_cost=fake.random_int(min=0.00, max=50.00),
                tracking_id=fake.ssn(),
            )
        
        orders = Order.objects.all()
        for order in orders:
            order.tracking_items.set(items)
            order.save()