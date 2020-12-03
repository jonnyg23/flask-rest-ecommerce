import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import db_drop_and_create_all, setup_db, db, Products, Categories,\
    Orders, Order_Details, Payment, Shippers, Suppliers


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

    # Test if '/' endpoint can handle GET requests & sends
    # 404 error for a non existing default category images
# ----------------------------------------------------------------------------#

    # TODO Add tests for '/collections' endpoint
    def test_get_category_images(self):
        """Test for get_category_images() GET /collections"""
        # Test the following:
        #   - Images can be retrieved
        #   - Response is 200
        #   - Length of category_image data is not 0
        res = self.client().get('/collections')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['category_images']))

    def test_404_non_existing_collection(self):
        """Test get_category_images() for non-existing collection -
        prompt error 404"""
        # Test the following:
        #   - Invalid image id results in a respone of 404
        res = self.client().get('/collections/1000')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

    # TODO Add tests for '/collections/mens-apparel' endpoint

    # TODO Add tests for '/collections/womens-apparel' endpoint

    # TODO Add tests for '/collections/holiday' endpoint

    # TODO Add tests for '/collections/gadgets' endpoint

    # TODO Add tests for '/products' endpoint

    # TODO Add tests for '/login' endpoint

    # TODO Add tests for '/<int:customerID>/checkouts/<int:orderID>' endpoint



# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
