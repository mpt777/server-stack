from django.http import HttpResponseForbidden
from django.shortcuts import render
from django.views import View
from django.utils.decorators import method_decorator

def superuser_required(view_func):
    """
    Decorator that checks if the user is a superuser.
    If the user is not a superuser, it returns a HttpResponseForbidden.
    """
    def _wrapped_view(request, *args, **kwargs):
        if not request.user.is_superuser:
            return HttpResponseForbidden("You don't have permission to access this page.")
        return view_func(request, *args, **kwargs)
    return _wrapped_view