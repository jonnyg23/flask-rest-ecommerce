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
    - SKU Stock Keeping Unit <STRING> (optional)
    - IDSKU <STRING> (optional)
    - VendorProductID <INTEGER> (optional)
    - ProductName <STRING>
    - ProductDescription <STRING>
    - *Foreign key*: SupplierID <INTEGER> (optional, if using 'Supplier' Model)
    - *Foreign Key*: CategoryID <INTEGER>
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
    - CustomerID <INTEGER>
    - OrderNumber <INTEGER>
    - PaymentID <INTEGER?>
    - OrderDate <DATETIME>
    - RequiredDate <DATETIME>
    - ShipperID <INTEGER> (optional - if using 'Shippers' Model)
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

# TODO Create 'Customers' model

# ----------------------------------------------------------------------------#
# Optional Models:
#   [Suppliers, Shippers]
# ----------------------------------------------------------------------------#

# Suppliers Model
'''
'''

# Shippers Model
'''
'''
