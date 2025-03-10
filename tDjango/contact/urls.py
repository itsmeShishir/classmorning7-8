from django.urls import path
from .views import ContactPage

urlpatterns = [
    path("contactpage", ContactPage, name="contactopage"),
]