from django.urls import path
from .views import index, single, contact, category, admins, create_category

urlpatterns = [
    path("", index, name="index"),
    path("single/<int:pk>", single, name="single"),
    path("contact", contact, name="contact"),
    path("category", category, name="category"),
    path("admins", admins, name="admins"),
    path("create_category", create_category, name="create_category"),
]