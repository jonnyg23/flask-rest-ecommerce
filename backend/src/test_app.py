import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from .models.models import db_drop_and_create_all, setup_db, Drink, db
from .models.products import Products
from .models.categories import Categories
from .models.orders import Orders
from .models.order_details import Order_Details
from .models.payment import Payment
from .models.shippers import shippers
from .models.suppliers import suppliers

database_name = os.environ['DATABASE_NAME']
database_path = os.environ['DATABASE_URL']


class EcommerceTestCase(unittest.TestCase):
    """This class represents the E-commerce Test Case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = database_name
        self.database_path = database_path
        setup_db(self.app, self.database_path)

        # Binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # Create all tables
            self.db.create_all()

    def tearDown(self):
        """Executed after reach test"""
        pass