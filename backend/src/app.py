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


# ----------------------------------------------------------------------------#
# App Error Handling
# ----------------------------------------------------------------------------#

    @app.errorhandler(400)
    def bad_request(error):
        """400 Bad-Request App Error Handler"""
        return jsonify({
            "success": False,
            "error": 400,
            "message": "bad request"
        }), 400

    @app.errorhandler(401)
    def unauthorized(error):
        """401 Unauthorized App Error Handler"""
        return jsonify({
            "success": False,
            "error": 401,
            "message": "unauthorized"
        }), 401

    @app.errorhandler(403)
    def forbidden(error):
        """403 Forbidden App Error Handler"""
        return jsonify({
            "success": False,
            "error": 403,
            "message": "forbidden"
        }), 403

    @app.errorhandler(404)
    def not_found(error):
        """404 Not-Found App Error Handler"""
        return jsonify({
            "success": False,
            "error": 404,
            "message": "resource not found"
        }), 404

    @app.errorhandler(422)
    def unprocessable(error):
        """422 Unprocessable App Error Handler"""
        return jsonify({
            "success": False,
            "error": 422,
            "message": "unprocessable"
        }), 422

    @app.errorhandler(500)
    def internal_server_error(error):
        """500 Internal Server Error App Error Handler"""
        return jsonify({
            'success': False,
            'error': 500,
            'message': 'internal server error'
        }), 500

    return app


app = create_app()

if __name__ == '__main__':
    app.run()
