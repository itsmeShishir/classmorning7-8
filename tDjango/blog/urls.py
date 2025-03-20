from django.urls import path
from .views import index, single, contact, category, admins, create_category, get_category, update_category, delete_category, allblogs, create_blog, update_blog, delete_blog, create_reating, get_category_blogs

urlpatterns = [
    path("", index, name="index"),
    path("single/<int:pk>", single, name="single"),
    path("contact", contact, name="contact"),
    path("category", category, name="category"),
    path("admins", admins, name="admins"),
    path("create_category", create_category, name="create_category"),
    path("get_category", get_category, name="get_category"),
    path("update_category/<int:pk>", update_category, name="update_category"),
    path("delete_category/<int:pk>", delete_category, name="delete_category"),
    path("allblogs", allblogs, name="allblogs"),
    path("create_blog", create_blog, name="create_blog"),
    path("update_blog/<int:pk>", update_blog, name="update_blog"),
    path("delete_blog/<int:pk>", delete_blog, name="delete_blog"),
    path("create_reating/<int:pk>", create_reating, name="create_reating"),
    path("get_category_blogs/<int:pk>", get_category_blogs, name="get_category_blogs"),
] 