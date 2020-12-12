import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS

# from .auth.auth import AuthError, requires_auth
from models import db_drop_and_create_all, setup_db, db, Products, \
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
    def get_category_info():
        """
        GET request to retrieve category info and default images from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /collections'
                - test_get_category_info

        Returns JSON:
            - success <boolean>
            - category_info <list>
        """
        try:
            # Query the database and order images by ids
            selection = Categories.query.order_by(Categories.id).all()
            category_info = [cat.info() for cat in selection]

            return jsonify({
                'success': True,
                'category_info': category_info
            })

        except Exception as e:
            # Print exception error as well as abort 500
            print(f'Exception "{e}" in get_category_info()')
            abort(500)

    @app.route('/collections/<int:id>', methods=['GET'])
    def get_specific_category_info(id):
        """
        GET request to retrieve category info and default images from database.
        --------------------
        Tested with:
            Error:
                - Auth0 'GET /collections/<int:id>'
                - test_404_non_existing_collection

        Returns JSON:
            - success <boolean>
            - category_info <list>
        """
        try:
            # Query the database for a category with id given
            selection = Categories.query.filter(
                Categories.id == id).one_or_none()

            return jsonify({
                'success': True,
                'category_info': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_category_info()')
            abort(404)

    @app.route('/collections/mens-apparel', methods=['GET'])
    def get_mens_apparel():
        """
        GET request to retrieve all mens-apparel products from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /collections/mens-apparel'
                - test_get_mens_apparel

        Returns JSON:
            - success <boolean>
            - mens_apparel_data <list>
        """
        try:
            # Find id from Categories table where category_name == Mens-Apparel
            mens_apparel_category_id = Categories.query.filter(
                Categories.category_name == 'Mens-Apparel').one_or_none()

            # Query database for only mens apparel products
            selection = Products.query.filter(
                Products.category_id.any(
                    mens_apparel_category_id.id)).all()

            # Create list with product info
            mens_apparel_data = [product.info() for product in selection]

            return jsonify({
                'success': True,
                'mens_apparel_data': mens_apparel_data
            })

        except Exception as e:
            # Print exception error as well as abort 500
            print(f'Exception "{e}" in get_mens_apparel()')
            abort(500)

    @app.route('/collections/mens-apparel/<int:id>', methods=['GET'])
    def get_specific_mens_apparel(id):
        """
        GET request to retrieve a specific mens-apparel products from database.
        --------------------
        Tested with:
            Error:
                - Auth0 'GET /collections/mens-apparel/<int:id>'
                - test_404_invalid_mens_product

        Returns JSON:
            - success <boolean>
            - mens_apparel_data <list>
        """
        try:
            # Find id from Categories table where category_name == Mens-Apparel
            mens_apparel_category_id = Categories.query.filter(
                Categories.category_name == 'Mens-Apparel').one_or_none()

            # Query database for a specific mens apparel
            # product with id specified
            selection = Products.query.filter(
                Products.category_id.any(
                    mens_apparel_category_id.id)).filter(
                        Products.id == id).one_or_none()

            return jsonify({
                'success': True,
                'mens_apparel_data': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_mens_apparel()')
            abort(404)

    @app.route('/collections/womens-apparel', methods=['GET'])
    def get_womens_apparel():
        """
        GET request to retrieve all womens-apparel products from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /collections/womens-apparel'
                - test_get_womens_apparel

        Returns JSON:
            - success <boolean>
            - womens_apparel_data <list>
        """
        try:
            # Find id from Categories table where
            # category_name == Womens-Apparel
            womens_apparel_category_id = Categories.query.filter(
                Categories.category_name == 'Womens-Apparel').one_or_none()

            # Query database for only womens apparel products
            selection = Products.query.filter(
                Products.category_id.any(
                    womens_apparel_category_id.id)).all()

            # Create list with product info
            womens_apparel_data = [product.info() for product in selection]

            return jsonify({
                'success': True,
                'womens_apparel_data': womens_apparel_data
            })

        except Exception as e:
            # Print exception error as well as abort 500
            print(f'Exception "{e}" in get_mens_apparel()')
            abort(500)

    @app.route('/collections/womens-apparel/<int:id>', methods=['GET'])
    def get_specific_womens_apparel(id):
        """
        GET request to retrieve a specific womens-apparel
        product from database.
        --------------------
        Tested with:
            Error:
                - Auth0 'GET /collections/womens-apparel/<int:id>'
                - test_404_invalid_womens_product

        Returns JSON:
            - success <boolean>
            - womens_apparel_data <list>
        """
        try:
            # Find id from Categories table where
            # category_name == Womens-Apparel
            womens_apparel_category_id = Categories.query.filter(
                Categories.category_name == 'Womens-Apparel').one_or_none()

            # Query database for a specific womens apparel
            # product with id specified
            selection = Products.query.filter(
                Products.category_id.any(
                    womens_apparel_category_id.id)).filter(
                        Products.id == id).one_or_none()

            return jsonify({
                'success': True,
                'womens_apparel_data': selection.info
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_womens_apparel()')
            abort(404)

    @app.route('/collections/holiday', methods=['GET'])
    def get_holiday_products():
        """
        GET request to retrieve all holiday products from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /collections/holiday'
                - test_get_holiday_products

        Returns JSON:
            - success <boolean>
            - holiday_products_data <list>
        """
        try:
            # Find id from Categories table where
            # category_name == Holiday
            holiday_category_id = Categories.query.filter(
                Categories.category_name == 'Holiday').one_or_none()

            # Query database for only holiday products
            selection = Products.query.filter(
                Products.category_id.any(
                    holiday_category_id.id)).all()

            # Create list with product info
            holiday_products_data = [product.info() for product in selection]

            return jsonify({
                'success': True,
                'holiday_products_data': holiday_products_data
            })

        except Exception as e:
            # Print exception error as well as abort 500
            print(f'Exception "{e}" in get_holiday_products()')
            abort(500)

    @app.route('/collections/holiday/<int:id>', methods=['GET'])
    def get_specific_holiday_products(id):
        """
        GET request to retrieve a specific holiday product from database.
        --------------------
        Tested with:
            Error:
                - Auth0 'GET /collections/holiday/<int:id>'
                - test_404_invalid_holiday_products

        Returns JSON:
            - success <boolean>
            - holiday_products_data <list>
        """
        try:
            # Find id from Categories table where
            # category_name == Holiday
            holiday_category_id = Categories.query.filter(
                Categories.category_name == 'Holiday').one_or_none()

            # Query database for a specific holiday
            # product with id specified
            selection = Products.query.filter(
                Products.category_id.any(
                    holiday_category_id.id)).filter(
                        Products.id == id).one_or_none()

            return jsonify({
                'success': True,
                'holiday_products_data': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_holiday_products()')
            abort(404)

    @app.route('/collections/misc', methods=['GET'])
    def get_misc_products():
        """
        GET request to retrieve all miscellaneous products from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /collections/misc'
                - test_get_misc_products

        Returns JSON:
            - success <boolean>
            - misc_products_data <list>
        """
        try:
            # Find id from Categories table where
            # category_name == Misc
            misc_category_id = Categories.query.filter(
                Categories.category_name == 'Misc').one_or_none()

            # Query database for only miscellaneous products
            selection = Products.query.filter(
                Products.category_id.any(
                    misc_category_id.id)).all()

            # Create list with product info
            misc_products_data = [product.info() for product in selection]

            return jsonify({
                'success': True,
                'misc_products_data': misc_products_data
            })

        except Exception as e:
            # Print exception error as well as abort 500
            print(f'Exception "{e}" in get_misc_products()')
            abort(500)

    @app.route('/collections/misc/<int:id>', methods=['GET'])
    def get_specific_misc_products(id):
        """
        GET request to retrieve a specific miscellaneous
        product from database.
        --------------------
        Tested with:
            Error:
                - Auth0 'GET /collections/misc/<int:id>'
                - test_404_invalid_misc_products

        Returns JSON:
            - success <boolean>
            - misc_products_data <list>
        """
        try:
            # Find id from Categories table where
            # category_name == Misc
            misc_category_id = Categories.query.filter(
                Categories.category_name == 'Misc').one_or_none()

            # Query database for only miscellaneous products
            selection = Products.query.filter(
                Products.category_id.any(
                    misc_category_id.id)).filter(
                        Products.id == id).one_or_none()

            return jsonify({
                'success': True,
                'misc_products_data': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_misc_products()')
            abort(404)

    # TODO Add '/products' endpoint GET request
    @app.route('/products', methods=['GET'])
    def get_products():
        """
        GET request to retrieve all products from database.
        --------------------
        Tested with:
            Success:
                - Auth0 'GET /products'
                - test_get_products

        Returns JSON:
            - success <boolean>
            - products <list>
        """
        try:
            # Query database for all products
            selection = Products.query.order_by(Products.id).all()

            # Create list with product info
            products = [product.info() for product in selection]

            return jsonify({
                'success': True,
                'products': products
            })

        except Exception as e:
            # Print exception error as well as abort 500
            print(f'Exception "{e}" in get_products()')
            abort(500)

    # TODO Add '/products' endpoint POST request
    @app.route('/products', methods=['POST'])
    # @requires_auth('post:products')
    def post_products():
        pass

    # TODO Add '/products' endpoint PATCH request
    @app.route('/products', methods=['PATCH'])
    # @requires_auth('patch:products')
    def patch_products():
        pass

    # TODO Add '/products' endpoint DELETE request
    @app.route('/products', methods=['DELETE'])
    # @requires_auth('delete:products')
    def delete_products():
        pass

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
