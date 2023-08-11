from rest_framework import status
from rest_framework.exceptions import APIException

class AuthenticationFailed(APIException):
    status_code = status.HTTP_401_UNAUTHORIZED
    default_detail = 'Authentication failed'
    default_code = 'authentication_failed'

class FirebaseError(APIException):
    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = 'Not a valid Firebase uid'
    default_code = 'firebase_error'
