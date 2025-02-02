
from django.shortcuts import render


def index(request):
    print("index!")
    print("index!")
    return render(request, "index.html")
