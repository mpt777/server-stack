from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings
from django.conf.urls.static import static

from server import views

urlpatterns = [
    path("", views.index),
    path("files/", include('media.urls')),
    path("admin/", admin.site.urls),
]

if bool(settings.DEBUG):
    urlpatterns += static(f"{settings.MEDIA_URL}", document_root=f"{settings.MEDIA_ROOT}")