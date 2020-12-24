release: cd backend/src && python manage.py migrate
web: gunicorn --chdir backend/src app:app