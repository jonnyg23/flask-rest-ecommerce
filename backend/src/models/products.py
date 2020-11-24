from app import db
from sqlalchemy import Column, Integer, String, Float, create_engine, \
    ForeignKey, relationship
from flask_sqlalchemy import SQLAlchemy


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
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True)
    product_name = Column(String(60), unique=True, nullable=False)
    product_description = Column(String(255), nullable=False)
    msrp = Column(Float, nullable=False)
    picture = Column(String(50))
    category_id = Column(Integer, ForeignKey('Categories.id'), nullable=False)
    # supplier_id = Column(Integer, ForeignKey('Supplier.id'), nullable=False)
    order_details = relationship('Order_Details',
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

    def format(self):
        return {
            'id': self.id,
            'product_name': self.product_name,
            'product_description': self.product_description,
            'msrp': self.msrp,
            'picture': self.picture,
            'category_id': self.category_id
        }
