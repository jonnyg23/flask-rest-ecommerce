from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Boolean, create_engine
from flask_sqlalchemy import SQLAlchemy

'''
The Categories Model columns are:
    > *Primary Key*: CategoryID <INTEGER>
    - CategoryName <STRING>
    - Description <STRING>
    - Picture <STRING> [Limit 50]
    - Active <BOOLEAN> (If the category is currently being used)
'''

db = SQLAlchemy()


class Categories(db.Model):
    __tablename__ = 'categories'

    id = Column(Integer, primary_key=True)
    category_name = Column(String(60), unique=True, nullable=False)
    description = Column(String(255), nullable=False)
    picture = Column(String(50))
    active = Column(Boolean)
    products = relationship('Products', backref='Categories', lazy='dynamic')

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

    def format(self):
        return {
            'id': self.id,
            'category_name': self.category_name,
            'description': self.description,
            'picture': self.picture,
            'active': self.active
        }
