from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
import json
import os

database_path = os.environ['DATABASE_URL']

db = SQLAlchemy()

# ----------------------------------------------------------------------------#
# setup_db(app)
#     binds a flask application and a SQLAlchemy service
# ----------------------------------------------------------------------------#


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()

# ----------------------------------------------------------------------------#
# db_drop_and_create_all() method is used for the following:
# 1. To drop the current database tables and start fresh
#       i. This can be used to initialize a clean database
# !!NOTE you can change the database_filename variable to have multiple
# versions of a database
# ----------------------------------------------------------------------------#


'''
def db_drop_and_create_all():
    db.drop_all()
    db.create_all()
'''
