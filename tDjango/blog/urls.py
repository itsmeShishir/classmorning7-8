from django.urls import path
from .views import index, single, contact, category

urlpatterns = [
    path("", index, name="index"),
    path("single/<int:pk>", single, name="single"),
    path("contact", contact, name="contact"),
    path("category", category, name="category"),
]