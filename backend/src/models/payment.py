from app import db
from sqlalchemy import Column, Integer, String, Boolean, Float, create_engine
from flask_sqlalchemy import SQLAlchemy


'''
The Payment Model columns are:
    > *Primary Key*: PaymentID <INTEGER>
    - PaymentType <STRING> [Limit 60]
    - Allowed <BOOLEAN>
'''


class Payment(db.Model):
    __tablename__ = 'payment'

    id = Column(Integer, primary_key=True)
    payment_type = Column(String(60), nullable=False)
    allowed = Column(Boolean, nullable=False)
    orders = relationship('Orders', backref='Payment', lazy='dynamic')

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

    def format(self):
        return {
            'id': self.id,
            'payment_type': self.payment_type,
            'allowed': self.allowed
        }
