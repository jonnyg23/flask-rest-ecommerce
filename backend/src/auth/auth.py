import json
from flask import request, _request_ctx_stack, abort
from functools import wraps
from jose import jwt
from urllib.request import urlopen

auth0_domain = os.environ['AUTH0_DOMAIN']
algorithms = os.environ['ALGORITHMS']
api_audience = os.environ['API_AUDIENCE']

# ----------------------------------------------------------------------------#
# AuthError Exception
# A standardized way to communicate auth failure modes
# ----------------------------------------------------------------------------#


class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code

# ----------------------------------------------------------------------------#
# Auth Header
# ----------------------------------------------------------------------------#

# get_token_auth_header() method should do the following:
# 1. Attempt to get the header from request.
#       i. If header is not present - raise AuthError
# 2. Attempt to split bearer, as well as the token.
#       i. If header is malformed - raise AuthError
# 3. Return the token part of the header

def get_token_auth_header():
    """
    Obtains the Access Token from the Authorization Header.
    --------------------
    Inputs <datatype>:
        - None
    Returns <datatype>:
        - Token <string> OR Raises error code 401
    """
    auth = request.headers.get('Authorization', None)
    if not auth:
        raise AuthError({
            'code': 'authorization_header_missing',
            'description': 'Authorization header is expected.'
        }, 401)

    parts = auth.split()
    if parts[0].lower() != 'bearer':
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization header must start with "Bearer".'
        }, 401)

    elif len(parts) == 1:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Token not found.'
        }, 401)

    elif len(parts) > 2:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization header must be bearer token.'
        }, 401)

    token = parts[1]
    return token

def check_permissions(permission, payload):
    """
    Checks if permissions are included in the payload.
    Raises AuthError otherwise.
    --------------------
    Inputs <datatype>:
        - permission <string>: (i.e. 'post:drink')
        - payload <string>: Decoded JWT payload
    Returns <datatype>:
        - True <boolean> OR Raises error codes 400 or 403
    """
    if 'permissions' not in payload:
        raise AuthError({
            'code': 'invalid_claims',
            'description': 'Permissions not included in JWT.'
        }, 400)
   
    if permission not in payload['permissions']:
        raise AuthError({
            'code': 'unauthorized',
            'description': 'Permission not found.'
        }, 401)
    return True

