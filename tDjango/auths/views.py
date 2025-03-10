from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout, get_user_model
from django.http import HttpResponse
from .forms import REgisterUser

# Create your views here.
User = get_user_model()

def Login(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(request, email=email, password=password)
        if not email:
            return HttpResponse(status=400, message = "email or password donesnot match")
        if user is not None:
            login(request, user)
            return render(request, "index.html")
        else:
            return render(request, "login.html")
        
    return render(request, "login.html")

def Register(request):
    if request.method == "POST":
        email = request.POST.get("email")
        username = request.POST.get("username")
        password = request.POST.get("password")

        if not email or not username or not password:
            return render(request, "register.html")
        user = User.objects.create_user(email=email, username=username, password=password)
        login(request, user)
        return render(request, "index.html")
    
    return render(request, "register.html")

def changePassword(request):
    if request.method == "POST":
        old_password = request.POST.get("old_password")
        new_password = request.POST.get("new_password")
        confirm_password = request.POST.get("confirm_password")

        user = request.user
        if user.check_password(old_password):
            user.set_password(new_password)
            user.save()
            return render(request, "index.html")
        else:
            return render(request, "changePassword.html")
    
    return render(request, "changePassword.html")


def changeUserdetails(request):
    if request.method == "POST":
        email = request.POST.get("email")
        username = request.POST.get("username")

        user = request.user
        user.email = email
        user.username = username
        user.save()
        return render(request, "index.html")
    
    return render(request, "changeUserdetails.html")

        
def logouts(request):
    logout(request)
    return redirect("login")


def RegisterUsers(request):
    form = REgisterUser()
    if request.method == "POST":
        form = REgisterUser(request.POST)
        if form.is_valid():
            form.save()
    context = {
        "form": form
    }
    return render(request, "registerss.html", context)