from sqlalchemy import Column, Integer, Boolean, DateTime, \
    Float, create_engine, ForeignKey
from flask_sqlalchemy import SQLAlchemy


'''
The OrderDetails Model columns are:
    > *Primary Key*: OrderDetailID <INTEGER>
    > *Foreign Key*: OrderID <INTEGER>
    > *Foreign Key*: ProductID <INTEGER>
    - Price <FLOAT> (Price per item)
    - Quantity <SMALLINTEGER> (Number of items ordered)
    - Discount <FLOAT> (discount applied to the individual item)
    - Total <FLOAT> (Calculated with Price * Quantity * Discount)
    - Size <STRING> [Limit 50]
    - Color <STRING> [Limit 50]
    - Fulfilled <BOOLEAN> (This part of the order has been fulfilled)
    - BillDate <DATETIME> (Date the bill was issued for the item)
    - ShipDate <DATETIME> (Date the items where shipped)
        NOTE: If not shipping all items together, you may need a ShippingDate
              field in the OrderDetails Table to track what day each item
              shipped.
    > *Foreign Key*: ShipperID <INTEGER> (The shipping company used)
    - Freight <FLOAT> (Freight charges if shipped altogether)
    - SalesTax <FLOAT> (Sales tax on entire order)
'''


class Order_Details(db.Model):
    __tablename__ = 'order_details'

    id = Column(Integer, primary_key=True)
    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)
    discount = Column(Float, nullable=False)
    total = Column(Float, nullable=False)
    fulfilled = Column(Boolean, nullable=False)
    bill_date = Column(DateTime, nullable=False)
    order_id = Column(Integer, ForeignKey('Orders.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('Products.id'), nullable=False)

    def __init__(self, price, quantity, discount, total, fulfilled,
                 bill_date, order_id, product_id):
        self.price = price
        self.quantity = quantity
        self.discount = discount
        self.total = total
        self.fulfilled = fulfilled
        self.bill_date = bill_date
        self.order_id = order_id
        self.product_id = product_id

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
            'price': self.price,
            'quantity': self.quantity,
            'discount': self.discount,
            'total': self.total,
            'fulfilled': self.fulfilled,
            'bill_date': self.bill_date,
            'order_id': self.order_id,
            'product_id': self.product_id
        }
