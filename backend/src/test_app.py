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


class EcommerceTestCase(unittest.TestCase):
    """This class represents the E-commerce Test Case"""
