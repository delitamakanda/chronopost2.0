import jwt
import datetime

from graphql_jwt.mixins import JSONWebTokenMixin

class FirebaseAuthMixin(JSONWebTokenMixin):
    def resolve_token(self, info):
        auth = await super().resolve_token(info)

        if not isinstance(auth, str):
            return None
        
        try:
            payload = jwt.decode(auth, self.secret, algorithms=[self.algorithm])

            now = datetime.datetime.utcnow()
            exp = datetime.datetime.utcfromtimestamp(payload['exp'])

            # Check expiration date
            if (now - exp).total_seconds() > 0:
                raise ValueError("JWT has expired")
                
            return {**auth, **payload}
        except Exception as e:
            print(e)
            return None

    @classmethod
    def authenticate(cls, token):
        user = cls.get_user(context={'request': {'META':{'HTTP_AUTHORIZATION': f'Bearer {token}'}}})
        if not user or not user.is_active:
            raise cls.UserNotAuthenticatedError()
        return user

    async def refresh_token(self, *args, **kwargs):
        original_response = await super().refresh_token(*args, **kwargs)
        if 'access' in original_response:
            new_access_token = original_response['access']
            decoded_new_access_token = jwt.decode(new_access_token, self.secret, algorithms=[self.algorithm])
            
            # Add additional claims to access token
            custom_claims = {"permissions": ["can_do_everything"]}
            encoded_custom_claims = jwt.encode(custom_claims, self.secret, algorithm="HS256").decode('utf-8')
            split_header_and_body = new_access_token.split('.')
            header = '.'.join([split_header_and_body[0], encoded_custom_claims])
            new_access_token = '.'.join([header, split_header_and_body[1]])

            # Replace old response with updated one
            original_response['access'] = new_access_token
            del original_response['token']
        
        return original_response
