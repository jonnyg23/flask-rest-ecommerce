from app import db
from sqlalchemy import Column, Integer, String, DateTime, \
    Float, create_engine, relationship
from flask_sqlalchemy import SQLAlchemy

# Shippers Model (optional)

'''
The Shippers Model columns are:
    - *Primary Key*: ShipperID <INTEGER>
    - CompanyName <STRING> [Limit 50]
    - Phone <STRING> [Limit 25]
'''


class Shippers(db.Model):
    __tablename__ = 'shippers'

    id = Column(Integer, primary_key=True)
    company_name = Column(String(50), nullable=False)
    phone = Column(String(25), nullable=False)
    orders = relationship('Orders', backref='Shippers', lazy='dynamic')

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
