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
        """Test get_category_info() for non-existing collection -
        prompt error 404"""
        # Test the following:
        #   - Invalid image id results in a respone of 404
        res = self.client().get('/collections/1000')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

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
        """Test get_mens_apparel() for non-existing mens-apparel products -
        prompt error 404"""
        # Test the following:
        #   - Invalid mens-apparel results in a respone of 404
        res = self.client().get('/collections/mens-apparel/invalid_products')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

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
        """Test get_womens_apparel() for non-existing womens-apparel products -
        prompt error 404"""
        # Test the following:
        #   - Invalid womens-apparel results in a respone of 404
        res = self.client().get('/collections/womens-apparel/invalid_products')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

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
        """Test get_holiday_products() for non-existing holiday products -
        prompt error 404"""
        # Test the following:
        #   - Invalid holiday product results in a respone of 404
        res = self.client().get('/collections/holiday/invalid_products')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

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
        """Test get_misc_products() for non-existing misc products -
        prompt error 404"""
        # Test the following:
        #   - Invalid misc product results in a respone of 404
        res = self.client().get('/collections/misc/invalid_products')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

    # TODO Add tests for '/products' endpoint

    # TODO Add tests for '/login' endpoint

    # TODO Add tests for '/<int:customerID>/checkouts/<int:orderID>' endpoint


# Make the tests conveniently executable

if __name__ == "__main__":
    unittest.main()
