import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS

from .database.models import db_drop_and_create_all, setup_db, Drink, db
from .auth.auth import AuthError, requires_auth
from models.models import setup_db
from models.products import Products
from models.categories import Categories
from models.orders import Orders
from models.order_details import Order_Details
from models.payment import Payment
from models.shippers import shippers
from models.suppliers import suppliers
# ----------------------------------------------------------------------------#
# Setup Application & Create API Endpoints
# ----------------------------------------------------------------------------#


def create_app(test_config=None):

    # Create and configure the application
    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    # TODO Add '/' endpoint for homepage

    # TODO Add '/collections' endpoint

    # TODO Add '/collections/mens-apparel' endpoint

    # TODO Add '/collections/womens-apparel' endpoint

    # TODO Add '/collections/holiday' endpoint

    # TODO Add '/collections/gadgets' endpoint

    return app


app = create_app()

if __name__ == '__main__':
    app.run()
