from django.urls import re_path
from media.views import *


urlpatterns = [
    re_path(r'private/(?P<file>.*)', serve_protected_document, name='serve_protected_document'),
]

