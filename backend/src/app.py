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
# Custom Methods
# ----------------------------------------------------------------------------#


def error_message(error, text):
    """
    Gives default or custom text for the error.
    --------------------
    Inputs <datatype>:
        - error <Error Object>: The error code
        - text <string>: Custom error text if error has no message
    Returns <datatype>:
        - error description <string>: The custom error description or default
    """
    try:
        return error.description['message']
    except TypeError:
        return text

# ----------------------------------------------------------------------------#
# Setup Application & Create API Endpoints
# ----------------------------------------------------------------------------#


def create_app(test_config=None):

    # Create and configure the application
    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    @app.route('/collections', methods=['GET'])
    def get_category_info():
        """
        GET request to retrieve category info and default images from database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /collections'
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

    @app.route('/collections/<int:category_id>', methods=['GET'])
    def get_specific_category_info(category_id):
        """
        GET request to retrieve category info and default images from database.
        --------------------
        Tested with:
            Error:
                - Postman 'GET /collections/<int:category_id>'
                - test_404_non_existing_collection

        Returns JSON:
            - success <boolean>
            - category_info <dict>
        """
        try:
            # Query the database for a category with id given
            selection = Categories.query.filter(
                Categories.id == category_id).one_or_none()

            return jsonify({
                'success': True,
                'category_info': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_category_info()')
            abort(404, {'message':
                        f'Category ID: {category_id} does not exist.'})

    @app.route('/collections/mens-apparel', methods=['GET'])
    def get_mens_apparel():
        """
        GET request to retrieve all mens-apparel products from database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /collections/mens-apparel'
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

    @app.route('/collections/mens-apparel/<int:product_id>', methods=['GET'])
    def get_specific_mens_apparel(product_id):
        """
        GET request to retrieve a specific mens-apparel products from database.
        --------------------
        Tested with:
            Error:
                - Postman 'GET /collections/mens-apparel/<int:product_id>'
                - test_404_invalid_mens_product

        Returns JSON:
            - success <boolean>
            - mens_apparel_data <dict>
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
                        Products.id == product_id).one_or_none()

            return jsonify({
                'success': True,
                'mens_apparel_data': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_mens_apparel()')
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

    @app.route('/collections/womens-apparel', methods=['GET'])
    def get_womens_apparel():
        """
        GET request to retrieve all womens-apparel products from database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /collections/womens-apparel'
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

    @app.route('/collections/womens-apparel/<int:product_id>', methods=['GET'])
    def get_specific_womens_apparel(product_id):
        """
        GET request to retrieve a specific womens-apparel
        product from database.
        --------------------
        Tested with:
            Error:
                - Postman 'GET /collections/womens-apparel/<int:product_id>'
                - test_404_invalid_womens_product

        Returns JSON:
            - success <boolean>
            - womens_apparel_data <dict>
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
                        Products.id == product_id).one_or_none()

            return jsonify({
                'success': True,
                'womens_apparel_data': selection.info
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_womens_apparel()')
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

    @app.route('/collections/holiday', methods=['GET'])
    def get_holiday_products():
        """
        GET request to retrieve all holiday products from database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /collections/holiday'
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

    @app.route('/collections/holiday/<int:product_id>', methods=['GET'])
    def get_specific_holiday_products(product_id):
        """
        GET request to retrieve a specific holiday product from database.
        --------------------
        Tested with:
            Error:
                - Postman 'GET /collections/holiday/<int:product_id>'
                - test_404_invalid_holiday_products

        Returns JSON:
            - success <boolean>
            - holiday_products_data <dict>
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
                        Products.id == product_id).one_or_none()

            return jsonify({
                'success': True,
                'holiday_products_data': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_holiday_products()')
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

    @app.route('/collections/misc', methods=['GET'])
    def get_misc_products():
        """
        GET request to retrieve all miscellaneous products from database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /collections/misc'
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

    @app.route('/collections/misc/<int:product_id>', methods=['GET'])
    def get_specific_misc_products(product_id):
        """
        GET request to retrieve a specific miscellaneous
        product from database.
        --------------------
        Tested with:
            Error:
                - Postman 'GET /collections/misc/<int:product_id>'
                - test_404_invalid_misc_products

        Returns JSON:
            - success <boolean>
            - misc_products_data <dict>
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
                        Products.id == product_id).one_or_none()

            return jsonify({
                'success': True,
                'misc_products_data': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_misc_products()')
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

    @app.route('/products', methods=['GET'])
    def get_products():
        """
        GET request to retrieve all products from database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /products'
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

    @app.route('/products/<int:product_id>', methods=['GET'])
    def get_specific_product(product_id):
        """
        GET request to retrieve a specific product from database.
        --------------------
        Tested with:
            Error:
                - Postman 'GET /products/<int:product_id>'
                - test_404_invalid_misc_products

        Returns JSON:
            - success <boolean>
            - products <json>
        """
        try:
            # Query database for all products
            selection = Products.query.order_by(Products.id).filter(
                Products.id == product_id).one_or_none()

            return jsonify({
                'success': True,
                'products': selection.info()
            })

        except Exception as e:
            # Print exception error as well as abort 404
            print(f'Exception "{e}" in get_specific_product()')
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

    @app.route('/products', methods=['POST'])
    # @requires_auth('post:products')
    def post_products(payload):
        """
        POST request to add a new product to database.
        --------------------
        Tested with:
            Success:
                - Postman 'POST /products'
                - test_post_products
            Error:
                - test_400_post_products

        Returns JSON:
            - success <boolean>
            - product <dict>
        """
        body = request.get_json()

        if not body:
            abort(400, {'message': 'Invalid JSON body'})

        new_name = body.get('product_name', None)
        new_description = body.get('product_description', None)
        new_msrp = body.get('msrp', None)
        new_picture = body.get('picture', None)
        new_category_id = body.get('category_id', None)

        # Return 400 error if any paramters are missing
        if not new_name:
            abort(400,
                  {'message': 'product_name parameter is missing.'})

        if not new_description:
            abort(400,
                  {'message': 'product_description parameter is missing.'})

        if not new_msrp:
            abort(400,
                  {'message': 'msrp parameter is missing.'})

        if not new_picture:
            abort(400,
                  {'message': 'picture parameter is missing.'})

        if not new_category_id:
            abort(400,
                  {'message': 'category_id parameter is missing.'})

        # Attempt to add new product to database
        try:
            product = Products(
                product_name=new_name,
                product_description=new_description,
                msrp=new_msrp,
                picture=new_picture,
                category_id=new_category_id
            )
            # Add product and commit to database
            product.insert()

            return jsonify({
                'success': True,
                'product': product.info(),
            })

        except Exception as e:
            # Print exception error, abort 422,
            # and rollback database session
            print(f'Exception "{e}" in post_products()')
            db.session.rollback()
            abort(422)

    @app.route('/products/<int:product_id>', methods=['PATCH'])
    # @requires_auth('patch:products')
    def patch_products(payload, product_id):
        """
        PATCH request to edit a product from the database.
        --------------------
        Tested with:
            Success:
                - Postman 'PATCH /products/<int:product_id>'
                - test_patch_products
            Error:
                - test_400_patch_products

        Returns JSON:
            - success <boolean>
            - product <list>
        """
        product_selected = Products.query.filter(
            Products.id == product_id).one_or_none()

        if not product_selected:
            # If product not found in database with id, abort 404
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

        # Get parameters from JSON body
        body = request.get_json()

        # If invalid JSON body, abort(400)
        if not body:
            abort(400, {'message': 'JSON body is invalid.'})

        product_name = body.get('product_name', None)
        product_description = body.get('product_description', None)
        msrp = body.get('msrp', None)
        picture = body.get('picture', None)
        category_id = body.get('category_id', None)

        try:
            # If any parameter is present then
            # update each correspondingly
            if product_name:
                product_selected.product_name = product_name
            if product_description:
                product_selected.product_description = product_description
            if msrp:
                product_selected.msrp = msrp
            if picture:
                product_selected.picture = picture
            if category_id:
                product_selected.category_id = category_id

            # Update database session (runs db.session.commit())
            product_selected.update()

            return jsonify({
                'success': True,
                'product': [product_selected.info()]
            })

        except Exception as e:
            # Print exception error, abort 422,
            # and rollback database session
            print(f'Exception "{e}" in patch_products()')
            db.session.rollback()
            abort(422)

    @app.route('/products/<int:product_id>', methods=['DELETE'])
    # @requires_auth('delete:products')
    def delete_products(payload, product_id):
        """
        DELETE request to remove a product from the database.
        --------------------
        Tested with:
            Success:
                - Postman 'DELETE /products/<int:product_id>'
                - test_delete_products
            Error:
                - test_404_delete_products

        Returns JSON:
            - success <boolean>
            - product <list>
        """
        # Query database for product with given id
        product_selected = Products.query.filter(
            Products.id == product_id).one_or_none()

        # If product id is not found in database, abort 404
        if not product_selected:
            abort(404, {'message':
                        f'Product ID: {product_id} does not exist.'})

        try:
            # Attempt to delete the product from the database
            product_selected.delete()

            return jsonify({
                'success': True,
                'delete': product_id
            })

        except Exception as e:
            # Print exception error, abort 422,
            # and rollback database session
            print(f'Exception "{e}" in delete_products()')
            db.session.rollback()
            abort(422)

# TODO Add '/search' for searching products
    @app.route('/search', methods=['GET'])
    def get_search_results():
        """
        GET request to search for a product from the database.
        --------------------
        Tested with:
            Success:
                - Postman 'GET /search?q=Mens+Summer+Blue+Tee'
                - test_get_search_results
            Error:
                - test_404_get_search_results

        Returns JSON:
            - success <boolean>
            - search_results <list>
        """
        search_term = request.args.get('q')

        if search_term:
            search_results = Products.query.filter(
                Products.product_name.ilike(f'%{search_term}%')).all()

            if not search_results:
                # If search term is not provided, abort 404
                abort(404,
                      {'message':
                       f"No product with the search term: '{search_term}'"})

            products = [product.info() for product in search_results]
            selection = Products.query.order_by(Products.id).all()

            return jsonify({
                'success': True,
                'search_term': search_term,
                'search_results': products,
                'total_search_results': len(products),
                'total_products': len(selection)
            })

        else:
            # Search term is None of <class 'NoneType'>
            return jsonify({
                'search_term': None
            })

# Possible endpoint additions

# TODO Add '/login' for auth

# TODO Add '/<int:customerID>/checkouts/<int:orderID>'


# ----------------------------------------------------------------------------#
# App Error Handling
# ----------------------------------------------------------------------------#

    @app.errorhandler(400)
    def bad_request(error):
        """400 Bad-Request App Error Handler"""
        return jsonify({
            "success": False,
            "error": 400,
            "message": error_message(error, "bad request")
        }), 400

    @app.errorhandler(401)
    def unauthorized(error):
        """401 Unauthorized App Error Handler"""
        return jsonify({
            "success": False,
            "error": 401,
            "message": error_message(error, "unauthorized")
        }), 401

    @app.errorhandler(403)
    def forbidden(error):
        """403 Forbidden App Error Handler"""
        return jsonify({
            "success": False,
            "error": 403,
            "message": error_message(error, "forbidden")
        }), 403

    @app.errorhandler(404)
    def not_found(error):
        """404 Not-Found App Error Handler"""
        return jsonify({
            "success": False,
            "error": 404,
            "message": error_message(error, "resource not found")
        }), 404

    @app.errorhandler(422)
    def unprocessable(error):
        """422 Unprocessable App Error Handler"""
        return jsonify({
            "success": False,
            "error": 422,
            "message": error_message(error, "unprocessable")
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
