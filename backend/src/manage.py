from app import app
from models import db
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

# In order for Heroku to run all migrations to the database hosted on the
# platform, the application must include this manage.py script.

migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()