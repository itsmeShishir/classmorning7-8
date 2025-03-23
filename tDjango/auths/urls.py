from django.urls import path
from .views import Login, Register, changePassword,changeUserdetails, logouts, RegisterUsers

urlpatterns = [
    path("login", Login, name="login"),
    path("register", Register, name="register"),
    path("changePassword", changePassword, name="changePassword"),
    path("changeUserdetails", changeUserdetails, name="changeUserdetails"),
    path("logout", logouts, name="logout"),
    path("registerUsers", RegisterUsers, name="registerUsers"),      
]