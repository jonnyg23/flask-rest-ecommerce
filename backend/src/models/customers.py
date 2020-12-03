from .models.models import db
from sqlalchemy import Column, Integer, String, Boolean, DateTime, \
    Float, create_engine, relationship
from flask_sqlalchemy import SQLAlchemy


'''
The Customers Model columns are:
    > *Primary Key*: CustomerID <INTEGER>
    - FirstName <STRING> [Limit 50]
    - LastName <STRING> [Limit 50]
    - Class <STRING> [Limit 60]
    - Room <STRING> [Limit 30]
    - Building <STRING> [Limit 60]
    - Address1 <STRING> [Limit 60]
    - Address2 <STRING> [Limit 60]
    - City <STRING> [Limit 30]
    - State <STRING> [Limit 30]
    - PostalCode <STRING> [Limit 15] (Not all postal codes are numeric)
    - Country <STRING> [Limit 50]
    - Phone <STRING> [Limit 25]
    - Email <STRING> [Limit 75]
    - CreditCard <INTEGER>
    - CreditCardTypeID <INTEGER>
    - CardExpMo <STRING> [Limit 15]
    - CardExpYr <INTEGER>
    - BillingAddress <STRING> [Limit 60]
    - BillingCity <STRING> [Limit 30]
    - BillingRegion <STRING> [Limit 60]
    - BillingPostalCode <STRING> [Limit 15]
    - BillingCountry <STRING> [Limit 60]
    - ShipAddress <STRING> [Limit 60]
    - ShipCity <STRING> [Limit 30]
    - ShipRegion <STRING> [Limit 60]
    - ShipPostalCode <STRING> [Limit 15]
    - ShipCountry <STRING> [Limit 60]
    - DateEntered <DATETIME>
'''


class Customers(db.Model):
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    address1 = Column(String(60), nullable=False)
    address2 = Column(String(60))
    city = Column(String(30), nullable=False)
    state = Column(String(30), nullable=False)
    postalcode = Column(String(15), nullable=False)
    country = Column(String(50), nullable=False)
    phone = Column(String(25))
    email = Column(String(75))
    creditcard = Column(Integer)
    creditcard_type_id = Column(Integer)
    card_exp_month = Column(String(15))
    card_exp_year = Column(Integer)
    billing_address = Column(String(60))
    billing_city = Column(String(30))
    billing_region = Column(String(60))
    billing_country = Column(String(60))
    billing_postalcode = Column(String(15))
    shipping_address = Column(String(60))
    shipping_city = Column(String(30))
    shipping_region = Column(String(60))
    shipping_country = Column(String(60))
    shipping_postalcode = Column(String(15))
    date_entered = Column(DateTime)
    orders = relationship('Orders', backref='Customers', lazy='dynamic')

    def __init__(self, first_name, last_name, address1, address2, city,
                 state, postalcode, country, phone, email, creditcard,
                 creditcard_type_id, card_exp_month, card_exp_year,
                 billing_address, billing_city, billing_region,
                 billing_postalcode, billing_country, shipping_address,
                 shipping_city, shipping_region, shipping_postalcode,
                 shipping_country, date_entered):
        self.first_name = first_name
        self.last_name = last_name
        self.address1 = address1
        self.address2 = address2
        self.city = city
        self.state = state
        self.postalcode = postalcode
        self.country = country
        self.phone = phone
        self.email = email
        self.creditcard = creditcard
        self.creditcard_type_id = creditcard_type_id
        self.card_exp_month = card_exp_month
        self.card_exp_year = card_exp_year
        self.billing_address = billing_address
        self.billing_city = billing_city
        self.billing_region = billing_region
        self.billing_postalcode = billing_postalcode
        self.billing_country = billing_country
        self.shipping_address = shipping_address
        self.shipping_city = shipping_city
        self.shipping_region = shipping_region
        self.shipping_postalcode = shipping_postalcode
        self.shipping_country = shipping_country
        self.date_entered = date_entered

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
            'first_name': self.first_name,
            'last_name': self.last_name,
            'address1': self.address1,
            'address2': self.address2,
            'city': self.city,
            'state': self.state,
            'postalcode': self.postalcode,
            'country': self.country,
            'phone': self.phone,
            'email': self.email,
            'creditcard': self.creditcard,
            'creditcard_type_id': self.creditcard_type_id,
            'card_exp_month': self.card_exp_month,
            'card_exp_year': self.card_exp_year,
            'billing_address': self.billing_address,
            'billing_city': self.billing_city,
            'billing_region': self.billing_region,
            'billing_postalcode': self.billing_postalcode,
            'billing_country': self.billing_country,
            'shipping_address': self.shipping_address,
            'shipping_city': self.shipping_city,
            'shipping_region': self.shipping_region,
            'shipping_postalcode': self.shipping_postalcode,
            'shipping_country': self.shipping_country,
            'date_entered': self.date_entered
        }
