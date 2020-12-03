import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS

from .auth.auth import AuthError, requires_auth
from .models import db_drop_and_create_all, setup_db, db, Products, \
    Categories, Orders, Order_Details, Payment
# from models import Shippers, Suppliers


# ----------------------------------------------------------------------------#
# Setup Application & Create API Endpoints
# ----------------------------------------------------------------------------#


def create_app(test_config=None):

    # Create and configure the application
    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    # TODO Add '/collections' endpoint
    @app.route('/collections', methods=['GET'])
    def get_category_images():
        """
        GET request to retrieve default category images from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /collections'
                - test_get_category_images
            Error:
                - test_404_non_existing_collection

        Returns <datatype>:
            - cat_default_images <?dtype?>
        """

        return cat_default_images

    # TODO Add '/collections/mens-apparel' endpoint

    # TODO Add '/collections/womens-apparel' endpoint

    # TODO Add '/collections/holiday' endpoint

    # TODO Add '/collections/gadgets' endpoint

    # TODO Add '/products' endpoint

    # Possible endpoint additions

    # TODO Add '/login' for auth

    # TODO Add '/<int:customerID>/checkouts/<int:orderID>'

    # When an item is clicked on, let's say in the '/collections/mens-apparel'
    # endpoint, then there should be a tagged on '/products/<productID?variant'
    # This can be seen below.
    # collections/all/products/1776-stars-mens-apparel?variant=35092988559517
    # This may be added on automatically when sending a particular query.
    # Reference a past Udacity assignment for details.


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
