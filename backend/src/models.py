from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, \
    create_engine, ForeignKey
import json
import os

database_path = os.environ['DATABASE_URL']

db = SQLAlchemy()

# ----------------------------------------------------------------------------#
# setup_db(app)
#     binds a flask application and a SQLAlchemy service
# ----------------------------------------------------------------------------#


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()

# ----------------------------------------------------------------------------#
# db_drop_and_create_all() method is used for the following:
# 1. To drop the current database tables and start fresh
#       i. This can be used to initialize a clean database
# !!NOTE you can change the database_filename variable to have multiple
# versions of a database
# ----------------------------------------------------------------------------#


def db_drop_and_create_all():
    db.drop_all()
    db.create_all()

# ----------------------------------------------------------------------------#
# Products Model
# ----------------------------------------------------------------------------#


'''
The Product Model columns are:
    > *Primary key*: ProductID <INTEGER>
    > *Foreign key*: SupplierID <INTEGER> (optional, if using 'Supplier' Model)
    > *Foreign Key*: CategoryID <INTEGER>
    - SKU Stock Keeping Unit <STRING> [Limit 50] (optional)
    - SupplierProductID <INTEGER> [Limit 50] (optional)
    - ProductName <STRING> [Limit 60]
    - ProductDescription <STRING> [Limit 255]
    - QuantityPerUnit <INTEGER>
    - UnitPrice <FLOAT> (Retail or Wholesale price)
    - MSRP <FLOAT>
    - AvailableSizes <STRING> [Limit 50]
    - AvailabeColors <STRING> [Limit 100]
    > *Foreign Key*: SizeID <INTEGER> (used to link to Size table)
    > *Foreign Key*: ColorID <INTEGER> (used to link to Color table)
    - Discount <FLOAT>
    - UnitWeight <FLOAT>
    - UnitsInStock <SMALLINTEGER> (between 0-65535 units)
    - UnitsOnOrder <SMALLINTEGER> (between 0-65535 units)
    - ReorderLevel <SMALLINTEGER> (between 0-65535 units)
        NOTE: When to reorder product?
        Use UnitsInStock - UnitsOnOrder = Y
            If Y > ReorderLevel then "Item in Stock"
            If Y <= ReorderLevel then "Item Out of Stock"
    - ProductAvailable <BOOLEAN>
    - DiscountAvailable <BOOLEAN>
    - Picture <STRING> [Limit 50] (link to an image file)
    > *Foreign Key*: ReviewID <INTEGER> (This Model may include Ratings)
    - Note <STRING> [Limit 255] (e.g. Availability between October - December)
'''


class Products(db.Model):
    __tablename__ = 'Products'

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(60), unique=True, nullable=False)
    product_description = db.Column(db.String(255), nullable=False)
    msrp = db.Column(db.Float, nullable=False)
    picture = db.Column(db.String(50))
    category_id = db.Column(db.ARRAY(db.Integer), db.ForeignKey(
        'Categories.id'), nullable=False)
    # supplier_id = Column(Integer, ForeignKey('Supplier.id'), nullable=False)
    order_details = db.relationship('Order_Details',
                                    backref='Products',
                                    lazy='dynamic')

    def __init__(self, product_name, product_description, msrp,
                 picture, category_id):
        self.product_name = product_name
        self.product_description = product_description
        self.msrp = msrp
        self.picture = picture
        self.category_id = category_id

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def info(self):
        return {
            'id': self.id,
            'product_name': self.product_name,
            'product_description': self.product_description,
            'msrp': self.msrp,
            'picture': self.picture,
            'category_id': self.category_id
        }

# ----------------------------------------------------------------------------#
# Categories Model
# ----------------------------------------------------------------------------#


'''
The Categories Model columns are:
    > *Primary Key*: CategoryID <INTEGER>
    - CategoryName <STRING>
    - Description <STRING>
    - Picture <STRING> [Limit 50]
    - Active <BOOLEAN> (If the category is currently being used)
'''


class Categories(db.Model):
    __tablename__ = 'Categories'

    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(60), unique=True, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    picture = db.Column(db.String(50))
    active = db.Column(db.Boolean, nullable=False)
    products = db.relationship(
        'Products', backref='Categories', lazy='dynamic')

    def __init__(self, category_name, description, picture, active):
        # Example: self.question = question
        #          self.answer = answer
        self.category_name = category_name
        self.description = description
        self.picture = picture
        self.active = active

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def info(self):
        return {
            'id': self.id,
            'category_name': self.category_name,
            'description': self.description,
            'picture': self.picture,
            'active': self.active
        }

# ----------------------------------------------------------------------------#
# Orders Model
# ----------------------------------------------------------------------------#


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
    __tablename__ = 'Orders'

    id = db.Column(db.Integer, primary_key=True)
    order_date = db.Column(db.DateTime, nullable=False)
    sales_tax = db.Column(db.Float, nullable=False)
    timestamp = db.Column(db.Float, nullable=False)
    transact_status = db.Column(db.String(50), nullable=False)
    paid = db.Column(db.Boolean, nullable=False)
    payment_date = db.Column(db.DateTime, nullable=False)
    fulfilled = db.Column(db.Boolean, nullable=False)
    payment_id = db.Column(db.Integer, db.ForeignKey(
        'Payment.id'), nullable=False)
    # shipper_id = db.Column(db.Integer, db.ForeignKey('Shippers.id'),
    # nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey(
        'Customers.id'), nullable=False)
    order_details = db.relationship('Order_Details',
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

    def info(self):
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

# ----------------------------------------------------------------------------#
# Order_Details Model
# ----------------------------------------------------------------------------#


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
    __tablename__ = 'Order_Details'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    discount = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float, nullable=False)
    fulfilled = db.Column(db.Boolean, nullable=False)
    bill_date = db.Column(db.DateTime, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey(
        'Orders.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        'Products.id'), nullable=False)

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

    def info(self):
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

# ----------------------------------------------------------------------------#
# Customers Model
# ----------------------------------------------------------------------------#


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
    __tablename__ = 'Customers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    address1 = db.Column(db.String(60), nullable=False)
    address2 = db.Column(db.String(60))
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    postalcode = db.Column(db.String(15), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(25))
    email = db.Column(db.String(75))
    creditcard = db.Column(db.Integer)
    creditcard_type_id = db.Column(db.Integer)
    card_exp_month = db.Column(db.String(15))
    card_exp_year = db.Column(db.Integer)
    billing_address = db.Column(db.String(60))
    billing_city = db.Column(db.String(30))
    billing_region = db.Column(db.String(60))
    billing_country = db.Column(db.String(60))
    billing_postalcode = db.Column(db.String(15))
    shipping_address = db.Column(db.String(60))
    shipping_city = db.Column(db.String(30))
    shipping_region = db.Column(db.String(60))
    shipping_country = db.Column(db.String(60))
    shipping_postalcode = db.Column(db.String(15))
    date_entered = db.Column(db.DateTime)
    orders = db.relationship('Orders', backref='Customers', lazy='dynamic')

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

    def info(self):
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

# ----------------------------------------------------------------------------#
# Payment Model
# ----------------------------------------------------------------------------#


'''
The Payment Model columns are:
    > *Primary Key*: PaymentID <INTEGER>
    - PaymentType <STRING> [Limit 60]
    - Allowed <BOOLEAN>
'''


class Payment(db.Model):
    __tablename__ = 'Payment'

    id = db.Column(db.Integer, primary_key=True)
    payment_type = db.Column(db.String(60), nullable=False)
    allowed = db.Column(db.Boolean, nullable=False)
    orders = db.relationship('Orders', backref='Payment', lazy='dynamic')

    def __init__(self, payment_type, allowed):
        self.payment_type = payment_type
        self.allowed = allowed

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def info(self):
        return {
            'id': self.id,
            'payment_type': self.payment_type,
            'allowed': self.allowed
        }

# ----------------------------------------------------------------------------#
# Shippers Model (optional)
# ----------------------------------------------------------------------------#


'''
The Shippers Model columns are:
    - *Primary Key*: ShipperID <INTEGER>
    - CompanyName <STRING> [Limit 50]
    - Phone <STRING> [Limit 25]
'''

'''
class Shippers(db.Model):
    __tablename__ = 'Shippers'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(25), nullable=False)
    orders = db.relationship('Orders', backref='Shippers', lazy='dynamic')

    def __init__(self, company_name, phone):
        self.company_name = company_name
        self.phone = phone

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
            'phone': self.phone
        }
'''

# ----------------------------------------------------------------------------#
# Suppliers Model (optional)
# ----------------------------------------------------------------------------#


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

'''
class Suppliers(db.Model):
    __tablename__ = 'Suppliers'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(50), nullable=False)
    contact_first_name = db.Column(db.String(50), nullable=False)
    contact_last_name = db.Column(db.String(50), nullable=False)
    address1 = db.Column(db.String(60), nullable=False)
    address2 = db.Column(db.String(60))
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    postalcode = db.Column(db.String(15), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(25), nullable=False)
    fax = db.Column(db.String(25))
    email = db.Column(db.String(75), nullable=False)
    website_url = db.Column(db.String(100))
    payment_methods = db.Column(db.String(100))  # describe how to pay supplier
    discount_type = db.Column(db.String(100))
    type_goods = db.Column(db.String(255))
    discount_available = db.Column(db.Boolean)
    customer_supplier_id = db.Column(db.String(50))  # customer ID
    # with supplier
    size_url = db.Column(db.String(100))  # url to supplier sizing
    # info web page
    color_url = db.Column(db.String(100))  # url to supplier color
    # info web page
    logo = db.Column(db.String(75))  # link to image file
    ranking = db.Column(db.Integer)
    notes = db.Column(db.String(255))  # notes on the supplier
    products = db.relationship('Products', backref='Suppliers', lazy='dynamic')

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
'''
