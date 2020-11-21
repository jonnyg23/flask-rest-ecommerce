from sqlalchemy import Column, Integer, String, create_engine
from flask_sqlalchemy import SQLAlchemy
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


'''
def db_drop_and_create_all():
    db.drop_all()
    db.create_all()
'''

# TODO Create 'Products' model
'''
The Product Model columns are:
    - *Primary key*: ProductID <INTEGER>
    - *Foreign key*: SupplierID <INTEGER> (optional, if using 'Supplier' Model)
    - *Foreign Key*: CategoryID <INTEGER>
    - SKU Stock Keeping Unit <STRING> (optional)
    - IDSKU <STRING> (optional)
    - VendorProductID <INTEGER> (optional)
    - ProductName <STRING>
    - ProductDescription <STRING>
    - QuantityPerUnit <INTEGER>
    - UnitPrice <FLOAT>
    - MSRP <FLOAT>
    - AvailableSizes <?>
    - AvailabeColors <?>
    - Size <?>
    - Color <?>
    - Discount <?>
    - UnitWeight <?>
    - UnitsInStock <INTEGER>
    - UnitsOnOrder <?>
    - ReorderLevel <?>
    - ProductAvailable <?>
    - DiscountAvailable <?>
    - CurrentOrder <?>
    - Picture <?>
    - Ranking <?>
    - Note <STRING>
'''


# TODO Create 'Category' model
'''
The Category Model columns are:
    - *Primary Key*: CategoryID <INTEGER>
    - CategoryName <STRING>
    - Description <STRING>
    - Picture <?>
    - Active <?>
'''


# TODO Create 'Orders' model
'''
The Orders Model columns are:
    - *Primary Key*: OrderID <INTEGER>
    - *Foreign Key*: PaymentID <INTEGER?>
    - *Foreign Key*: ShipperID <INTEGER> (optional - if using 'Shippers' Model)
    - *Foreign Key*: CustomerID <INTEGER>
    - OrderNumber <INTEGER>
    - OrderDate <DATETIME>
    - RequiredDate <DATETIME>
    - Freight <?> (optional)
    - SalesTax <FLOAT>
    - Timestamp <DATETIME>
    - TransactStatus <STRING> (e.g. 'succeed', 'declined', 'refunded', etc)
    - ErrLoc <?>
    - ErrMsg <STRING>
    - Fulfilled <INTEGER> (binary - 1 or 0 for True or False)
    - Deleted <INTEGER> (binary - 1 or 0 for True or False)
    - Paid <INTEGER> (binary - 1 or 0 for True or False)
    - PaymentDate <DATETIME>
'''


# TODO Create 'OrderDetails' model
'''
The OrderDetails Model columns are:
    - *Primary Key*: OrderDetailID <INTEGER>
    - *Foreign Key*: OrderID <INTEGER>
    - *Foreign Key*: ProductID <INTEGER>
    - OrderNumber <INTEGER>
    - Price <FLOAT>
    - Quantity <INTEGER>
    - Discount <?>
    - Total <FLOAT>
    - IDSKU <STRING> (optional)
    - Size <?>
    - Color <?>
    - Fulfilled <INTEGER> (binary - 1 or 0 for True or False)
    - ShipDate <DATETIME>
    - BillDate <DATETIME>
'''


# TODO Create 'Payment' model
'''
The Payment Model columns are:
    - *Primary Key*: PaymentID <INTEGER>
    - PaymentType <STRING>
    - Allowed <INTEGER?> (binary - 1 or 0 for True or False)
'''


# TODO Create 'Customers' model
'''
The Customers Model columns are:
    - *Primary Key*: CustomerID <INTEGER>
    - FirstName <STRING>
    - LastName <STRING>
    - Class <?>
    - Room <?>
    - Building <?>
    - Address1 <?>
    - Address2 <?>
    - City <STRING>
    - State <INTEGER> (Integer if using drop-down selection, else String)
    - PostalCode <INTEGER>
    - Country <INTEGER> (Integer if using drop-down selection, else String)
    - Phone <INTEGER>
    - Email <STRING>
    - CreditCard <INTEGER>
    - CreditCardTypeID <INTEGER>
    - CardExpMo <INTEGER?>
    - CardExpYr <INTEGER?>
    - BillingAddress <STRING>
    - BillingCity <STRING>
    - BillingRegion <STRING>
    - BillingPostalCode <INTEGER>
    - BillingCountry <INTEGER> (Integer if using drop-down selection, else Str)
    - ShipAddress <STRING>
    - ShipCity <STRING>
    - ShipRegion <STRING>
    - ShipPostalCode <INTEGER>
    - ShipCountry <INTEGER> (Integer if using drop-down selection, else Str)
    - DateEntered <DATETIME?>
'''
# ----------------------------------------------------------------------------#
# Optional Models:
#   [Suppliers, Shippers]
# ----------------------------------------------------------------------------#

# Suppliers Model
'''
The Suppliers Model columns are:
    - *Primary Key*: SupplierID <INTEGER>
    - CompanyName <STRING>
    - ContactFName <STRING>
    - ContactLName <STRING>
    - ContactTitle <STRING>
    - Address1 <STRING>
    - Address2 <STRING>
    - City <STRING>
    - State <INTEGER> (Integer if using drop-down selection, else String)
    - PostalCode <INTEGER>
    - Country <INTEGER> (Integer if using drop-down selection, else Str)
    - Phone <INTEGER>
    - Fax <INTEGER>
    - Email <STRING>
    - URL <STRING>
    - PaymentMethods <?>
    - DiscountType <?>
    - TypeGoods <?>
    - Notes <STRING>
    - DiscountAvailable <INTEGER> (binary - 1 or 0 for True or False)
    - CurrentOrder <?>
    - Logo <?>
'''

# Shippers Model
'''
The Shippers Model columns are:
    - *Primary Key*: ShipperID <INTEGER>
    - CompanyName <STRING>
    - Phone <INTEGER>
'''
