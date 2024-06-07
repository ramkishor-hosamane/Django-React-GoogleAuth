from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'http://localhost:3000/auth/callback/'


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
class ProectedAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):

        return Response({'detail':"You made it"})