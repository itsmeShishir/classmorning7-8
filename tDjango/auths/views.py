from django.shortcuts import render
from .models import User
# Create your views here.

def Login(request):
    return render(request, "login.html")

def Register(request):
    return render(request, "register.html")