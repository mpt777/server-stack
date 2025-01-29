from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import Group, User
from django.contrib.auth import authenticate, login, logout

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

def get_user(username="", email="", password=""):
    user = None
    if username:
        user = User.objects.filter(username=username).first() or user
    if email:
        user = User.objects.filter(email=email).first() or user
    if user and user.check_password(password):
        return user
    return None