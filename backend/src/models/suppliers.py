from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Boolean, create_engine
from flask_sqlalchemy import SQLAlchemy

# Suppliers Model (optional)

'''
The Suppliers Model columns are:
    > *Primary Key*: SupplierID <INTEGER>
    - CompanyName <STRING> [Limit 50]
    - ContactFName <STRING> [Limit 50]
    - ContactLName <STRING> [Limit 50]
    - ContactTitle <STRING> [Limit 30]
    - Address1 <STRING> [Limit 60]
    - Address2 <STRING> [Limit 60]
    - City <STRING> [Limit 30]
    - State <STRING> [Limit 30]
    - PostalCode <STRING> [Limit 15]
    - Country <STRING> [Limit 50]
    - Phone <STRING> [Limit 25]
    - Fax <STRING> [Limit 25]
    - Email <STRING> [Limit 75]
    - WebsiteURL <STRING> [Limit 100]
    - PaymentMethods <STRING> [Limit 100]
        NOTE: Describe how to pay the Supplier.
            Check, Credit Card, Purchase Order, etc
    - DiscountType <STRING> [Limit 100] (Describe type of discounts available)
    - TypeGoods <STRING> [Limit 255] (Describe type of goods available)
    - DiscountAvailabe <BOOLEAN>
    - CustomerSupplierID <STRING> [Limit 50] (Customer ID with Supplier)
    - SizeURL <STRING> [Limit 100]
        NOTE: URL to Supplier Web Page with sizing info on their products
    - ColorURL <STRING> [Limit 100]
        NOTE: URL to Supplier Web Page with color info on their products
    - Logo <STRING> [Limit 75] (Link to image file)
    - Ranking <INTEGER>
        NOTE: This is used to show one Supplier higher on a list regardless
              of alphabet sorting
    - Notes <STRING> [Limit 255] (Notes on the Supplier)
'''

db = SQLAlchemy()


class Suppliers(db.Model):
    __tablename__ = 'suppliers'

    id = Column(Integer, primary_key=True)
    company_name = Column(String(50), nullable=False)
    contact_first_name = Column(String(50), nullable=False)
    contact_last_name = Column(String(50), nullable=False)
    address1 = Column(String(60), nullable=False)
    address2 = Column(String(60))
    city = Column(String(30), nullable=False)
    state = Column(String(30), nullable=False)
    postalcode = Column(String(15), nullable=False)
    country = Column(String(50), nullable=False)
    phone = Column(String(25), nullable=False)
    fax = Column(String(25))
    email = Column(String(75), nullable=False)
    website_url = Column(String(100))
    payment_methods = Column(String(100))  # describe how to pay supplier
    discount_type = Column(String(100))
    type_goods = Column(String(255))
    discount_available = Column(Boolean)
    customer_supplier_id = Column(String(50))  # customer ID with supplier
    size_url = Column(String(100))  # url to supplier sizing info web page
    color_url = Column(String(100))  # url to supplier color info web page
    logo = Column(String(75))  # link to image file
    ranking = Column(Integer)
    notes = Column(String(255))  # notes on the supplier
    products = relationship('Products', backref='Suppliers', lazy='dynamic')

    def __init__(self, company_name, contact_first_name, contact_last_name,
                 address1, address2, city, state, postalcode, country, phone,
                 fax, email, website_url, payment_methods, discount_type,
                 type_goods, discount_available, customer_supplier_id,
                 size_url, color_url, logo, ranking, notes):
        self.company_name = company_name
        self.contact_first_name = contact_first_name
        self.contact_last_name = contact_last_name
        self.address1 = address1
        self.address2 = address2
        self.city = city
        self.state = state
        self.postalcode = postalcode
        self.country = country
        self.phone = phone
        self.fax = fax
        self.email = email
        self.website_url = website_url
        self.payment_methods = payment_methods
        self.discount_type = discount_type
        self.type_goods = type_goods
        self.discount_available = discount_available
        self.customer_supplier_id = customer_supplier_id
        self.size_url = size_url
        self.color_url = color_url
        self.logo = logo
        self.ranking = ranking
        self.notes = notes

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
            'company_name': self.company_name,
            'contact_first_name': self.contact_first_name,
            'contact_last_name': self.contact_last_name,
            'address1': self.address1,
            'address2': self.address2,
            'city': self.city,
            'state': self.state,
            'postalcode': self.postalcode,
            'country': self.country,
            'phone': self.phone,
            'fax': self.fax,
            'email': self.email,
            'website_url': self.website_url,
            'payment_methods': self.payment_methods,
            'discount_type': self.discount_type,
            'type_goods': self.type_goods,
            'discount_available': self.discount_available,
            'customer_supplier_id': self.customer_supplier_id,
            'size_url': self.size_url,
            'color_url': self.color_url,
            'logo': self.logo,
            'ranking': self.ranking,
            'notes': self.notes
        }
