release: python backend/src manage.py migrate
web: gunicorn --chdir backend/src app:app