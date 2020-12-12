import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import db_drop_and_create_all, setup_db, db, Products, \
    Categories, Orders, Order_Details, Payment
# from models import Shippers, Suppliers


class EcommerceTestCase(unittest.TestCase):
    """This class represents the E-commerce Test Case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = 'flask_ecommerce_test'
        self.database_path = "postgresql://{}:{}@{}/{}".format(
            'THEJAGSTER', '', 'localhost:5432', self.database_name)
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

# ----------------------------------------------------------------------------#
    # Used Test-Driven-Development in the making of this API
    # Minimum of 2 tests for each endpoint!

    # Test if '/collections' endpoint can handle GET requests & sends
    # 404 error for a non-existing collection
# ----------------------------------------------------------------------------#

    def test_get_category_info(self):
        """Test for get_category_info() GET /collections"""
        # Test the following:
        #   - Category info can be retrieved
        #   - Response is 200
        #   - Length of category_info data is not 0
        res = self.client().get('/collections')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['category_info']))

    def test_404_non_existing_collection(self):
        """Test get_specific_category_info() for non-existing collection -
        prompt error 404"""
        # Test the following:
        #   - Invalid image id results in a respone of 404
        res = self.client().get(f'/collections/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'],
                         f'Category ID: {9999999999999} does not exist.')

# ----------------------------------------------------------------------------#
    # Test if '/collections/mens-apparel' endpoint can handle GET requests
    # & sends 404 error for non existing mens-apparel products
# ----------------------------------------------------------------------------#

    def test_get_mens_apparel(self):
        """Test for get_mens_apparel() GET /collections/mens-apparel"""
        # Test the following:
        #   - All mens-apparel products are retrieved
        #   - Response is 200
        res = self.client().get('/collections/mens-apparel')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_404_invalid_mens_product(self):
        """Test get_specific_mens_apparel() for
        non-existing mens-apparel products - prompt error 404"""
        # Test the following:
        #   - Invalid mens-apparel results in a respone of 404
        res = self.client().get(
            f'/collections/mens-apparel/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'],
                         f'Product ID: {9999999999999} does not exist.')

# ----------------------------------------------------------------------------#
    # Test if '/collections/womens-apparel' endpoint can handle GET requests
    # & sends 404 error for non existing womens-apparel products
# ----------------------------------------------------------------------------#

    def test_get_womens_apparel(self):
        """Test for get_womens_apparel() GET /collections/womens-apparel"""
        # Test the following:
        #   - All womens-apparel products are retrieved
        #   - Response is 200
        res = self.client().get('/collections/womens-apparel')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_404_invalid_womens_product(self):
        """Test get_specific_womens_apparel() for non-existing
        womens-apparel products - prompt error 404"""
        # Test the following:
        #   - Invalid womens-apparel results in a respone of 404
        res = self.client().get(
            f'/collections/womens-apparel/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'],
                         f'Product ID: {9999999999999} does not exist.')

# ----------------------------------------------------------------------------#
    # Test if '/collections/holiday' endpoint can handle GET requests
    # & sends 404 error for non existing holiday products
# ----------------------------------------------------------------------------#

    def test_get_holiday_products(self):
        """Test for get_holiday_products() GET /collections/holiday"""
        # Test the following:
        #   - All holiday products are retrieved
        #   - Response is 200
        res = self.client().get('/collections/holiday')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_404_invalid_holiday_products(self):
        """Test get_specific_holiday_products() for non-existing
        holiday products - prompt error 404"""
        # Test the following:
        #   - Invalid holiday product results in a respone of 404
        res = self.client().get(f'/collections/holiday/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'],
                         f'Product ID: {9999999999999} does not exist.')

# ----------------------------------------------------------------------------#
    # Test if '/collections/misc' endpoint can handle GET requests
    # & sends 404 error for non existing miscellaneous products
# ----------------------------------------------------------------------------#

    def test_get_misc_products(self):
        """Test for get_misc_products() GET /collections/misc"""
        # Test the following:
        #   - All misc products are retrieved
        #   - Response is 200
        res = self.client().get('/collections/misc')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_404_invalid_misc_products(self):
        """Test get_specific_misc_products() for non-existing misc products -
        prompt error 404"""
        # Test the following:
        #   - Invalid misc product results in a respone of 404
        res = self.client().get(f'/collections/misc/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'],
                         f'Product ID: {9999999999999} does not exist.')

# ----------------------------------------------------------------------------#
    # Test if '/products' endpoint can handle GET, PATCH, POST, & DELETE
    # requests & sends corresponding errors if necessary
# ----------------------------------------------------------------------------#
    # TODO Update all error tests below

    # GET /products tests

    def test_get_products(self):
        """Test for get_products() GET /products"""
        # Test the following:
        #   - All misc products are retrieved
        #   - Response is 200
        res = self.client().get('/products')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_404_invalid_misc_products(self):
        """Test get_specific_product() for non-existing misc products -
        prompt error 404"""
        # Test the following:
        #   - Invalid product results in a respone of 404
        res = self.client().get(f'/products/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'],
                         f'Product ID: {9999999999999} does not exist.')

    # POST /products tests

    def test_post_products(self):
        """Test for post_products() POST /products"""
        # Test the following:
        #   - Products can be added to database
        #   - Response is 200

        # Create new product json
        new_product = {
            'product_name': 'new_name',
            'product_description': 'new_description',
            'msrp': 50,
            'picture': 'new_picture',
            'category_id': [1, 2, 3]
        }
        # Count total products to compare after POST
        product_count_init = len(Products.query.all())

        res = self.client().post('/products', json=new_product)
        data = json.loads(res.data)

        product_count_final = len(Products.query.all())

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertEqual(product_count_final, product_count_init + 1)

    def test_400_post_products(self):
        """Test post_products() for missing parameter -
        prompt error 400"""
        # Test the following:
        #   - Incomplete post entry (possibly a missing parameter)

        # Create new product with missing parameter -> 'product_name'
        new_product = {
            'product_description': 'new_description',
            'msrp': 50,
            'picture': 'new_picture',
            'category_id': [1, 2, 3]
        }
        res = self.client().post('/products', json=new_product)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 400)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'product_name parameter is missing.')

    # PATCH /products tests

    def test_patch_products(self):
        """Test for patch_products() PATCH /products/5"""
        # Test the following:
        #   - Product in database can be edited successfully
        #   - Response is 200

        product_before_patch = Products.query.filter(
            Products.id == 5).one_or_none()

        patched_product = {
            'product_name': 'patched_name',
            'product_description': 'patched_description',
            'msrp': 50,
            'picture': 'patched_picture',
            'category_id': [1, 2, 3]
        }

        res = self.client().patch('/products/5', json=patched_product)
        data = json.loads(res.data)

        product_after_patch = Products.query.filter(
            Products.id == 5).one_or_none()

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertNotEqual(product_before_patch, product_after_patch)

    def test_400_patch_products(self):
        """Test patch_products() for missing parameter -
        prompt error 400"""
        # Test the following:
        #   - Incomplete patch entry (missing product_name parameter)

        patched_product = {
            'product_description': 'patched_description',
            'msrp': 50,
            'picture': 'patched_picture',
            'category_id': [1, 2, 3]
        }

        res = self.client().patch('/products/5', json=patched_product)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 400)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'JSON body is invalid.')

    # DELETE /products tests

    def test_delete_products(self):
        """Test for delete_products() POST /products/5"""
        # Test the following:
        #   - Products can be deleted from the database
        #   - Response is 200

        res = self.client().delete(f'/products/5')
        data = json.loads(res.data)

        product_query = Products.query.filter(
            Products.id == 5).one_or_none()

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertEqual(data['deleted'], 5)
        self.assertEqual(product_query, None)

    def test_404_delete_products(self):
        """Test delete_products() for non-existing ID -
        prompt error 404"""
        # Test the following:
        #   - Deleting a non-existing product id raises 404 error code

        res = self.client().delete(f'/products/{9999999999999}')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(
            data['message'], f'Product ID: {9999999999999} does not exist.')

    # TODO Add tests for '/login' endpoint

    # TODO Add tests for '/<int:customerID>/checkouts/<int:orderID>' endpoint


# Make the tests conveniently executable


if __name__ == "__main__":
    unittest.main()
