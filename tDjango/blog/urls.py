from django.urls import path
from .views import index, single, contact, category, admins, create_category, get_category, update_category, delete_category

urlpatterns = [
    path("", index, name="index"),
    path("single/<int:pk>", single, name="single"),
    path("contact", contact, name="contact"),
    path("category", category, name="category"),
    path("admins", admins, name="admins"),
    path("create_category", create_category, name="create_category"),
    path("get_category", get_category, name="get_category"),
    path("update_category/<int:pk>", update_category, name="update_category"),
    path("delete_category/<int:pk>", delete_category, name="delete_category")
]