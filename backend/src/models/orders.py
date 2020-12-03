from app import db
from sqlalchemy import Column, Integer, String, Boolean, DateTime, \
    Float, create_engine, ForeignKey, relationship
from flask_sqlalchemy import SQLAlchemy


'''
The Orders Model columns are:
    > *Primary Key*: OrderID <INTEGER>
    > *Foreign Key*: PaymentID <INTEGER>
    > *Foreign Key*: ShipperID <INTEGER> (optional - if using 'Shippers' Model)
    > *Foreign Key*: CustomerID <INTEGER>
    - OrderDate <DATETIME> (Think about GMT time for international ordering)
    - RequiredDate <DATETIME> (Date the items are required by customer)
    - Freight <FLOAT> (freight charges if shipped altogether)
    - SalesTax <FLOAT> (Sales Tax on entire order)
    - Timestamp <STRING> [Limit 50]
    - TransactStatus <STRING> [Limit 50]
        # NOTE: (e.g. 'succeed', 'declined', 'refunded', etc)
    - Fulfilled <BOOLEAN>
    - Deleted <BOOLEAN>
    - Paid <FLOAT>
    - PaymentDate <DATETIME>
'''


class Orders(db.Model):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True)
    order_date = Column(DateTime, nullable=False)
    sales_tax = Column(Float, nullable=False)
    timestamp = Column(Float, nullable=False)
    transact_status = Column(String(50), nullable=False)
    paid = Column(Boolean, nullable=False)
    payment_date = Column(DateTime, nullable=False)
    fulfilled = Column(Boolean, nullable=False)
    payment_id = Column(Integer, ForeignKey('Payment.id'), nullable=False)
    # shipper_id = Column(Integer, ForeignKey('Shippers.id'), nullable=False)
    customer_id = Column(Integer, ForeignKey('Customers.id'), nullable=False)
    order_details = relationship('Order_Details',
                                 backref='Orders',
                                 lazy='dynamic')

    def __init__(self, order_date, sales_tax, timestamp, transact_status,
                 paid, payment_date, fulfilled, payment_id, customer_id):
        self.order_date = order_date
        self.sales_tax = sales_tax
        self.timestamp = timestamp
        self.transact_status = transact_status
        self.paid = paid
        self.payment_date = payment_date
        self.fulfilled = fulfilled
        self.payment_id = payment_id
        # self.shipper_id = shipper_id
        self.customer_id = customer_id

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'order_date': self.order_date,
            'sales_tax': self.sales_tax,
            'timestamp': self.timestamp,
            'transact_status': self.transact_status,
            'paid': self.paid,
            'payment_date': self.payment_date,
            'fulfilled': self.fulfilled,
            'payment_id': self.payment_id,
            # 'shipper_id': self.shipper_id
            'customer_id': self.customer_id
        }
