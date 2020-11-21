import json
import os
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

# check_permissions() method should do the following:
# 1. Raise AuthError if permissions not in the payload.
# !!NOTE Review RBAC settings in Auth0
# 2. Raise an AuthError if the permission string is not in the payload
#    permission array.
#       i. If the permission string is in the payload - return True


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

# verify_decode_jwt() method should do/verify the following:
# 1. The input token should be an Auth0 token with key id (kid)
# 2. The method should verify the token using Auth0 /.well-known/jwks.json
# 3. The method should decode the payload from the token.
# 4. The method should validate the claims.
# 5. Finally, it should return the decoded payload

# !!NOTE urlopen has a common certificate error described here:
# https://stackoverflow.com/questions/50236117/
# scraping-ssl-certificate-verify-failed-error-for-http-en-wikipedia-org


def verify_decode_jwt(token):
    """
    Verifies the decoded JWT token.
    Raises AuthError if invalid.
    --------------------
    Inputs <datatype>:
        - token <string>: A JSON web token
    Returns <datatype>:
        - payload <string> OR Raises error codes 400 or 401
    """
    jsonurl = urlopen(f'https://{auth0_domain}/.well-known/jwks.json')
    jwks = json.loads(jsonurl.read())
    unverified_header = jwt.get_unverified_header(token)
    rsa_key = {}
    if 'kid' not in unverified_header:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization malformed.'
        }, 401)

    for key in jwks['keys']:
        if key['kid'] == unverified_header['kid']:
            rsa_key = {
                'kty': key['kty'],
                'kid': key['kid'],
                'use': key['use'],
                'n': key['n'],
                'e': key['e']
            }

    if rsa_key:
        try:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=algorithms,
                audience=api_audience,
                issuer='https://' + auth0_domain + '/'
            )

            return payload

        except jwt.ExpiredSignatureError:
            raise AuthError({
                'code': 'token_expired',
                'description': 'Token expired.'
            }, 401)

        except jwt.JWTClaimsError:
            raise AuthError({
                'code': 'invalid_claims',
                'description': 'Incorrect claims. \
                    Please, check the audience and issuer.'
            }, 401)
        except Exception:
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Unable to parse authentication token.'
            }, 400)
    raise AuthError({
        'code': 'invalid_header',
                'description': 'Unable to find the appropriate key.'
    }, 400)
