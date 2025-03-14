from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Category, Blog
from auths.models import User
# Create your views here.

# def index(request):
#     return HttpResponse("<h1>Home Page</h1>")

def index(request):
    category = Category.objects.all()
    blog = Blog.objects.all()
    slider = Blog.objects.filter(isSlider=True)
    isTrending = Blog.objects.filter(isTrending=True)
    context = {
        "category": category,
        "blog": blog, 
        "slider":slider,
        "isTrending":isTrending
    }
    return render(request, "index.html", context)

def single(request, pk):
    singleblog = get_object_or_404(Blog, id=pk)
    return render(request, "single.html", {"singleblog": singleblog})

def category(request):
    return render(request, "category.html")

def contact(request):
    return render(request, "contact.html")

def admins(request):
    total_users = User.objects.count()
    total_category = Category.objects.count()
    total_blog = Blog.objects.count()
    context = {
        "total_users": total_users,
        "total_category": total_category,
        "total_blog": total_blog
    }
    return render(request, "admins.html", context)

# create category
def create_category(request):
    if request.method == "POST":
        name = request.POST.get("name")
        image = request.FILES.get("image")
        Category.objects.create(name=name, image=image)
        return redirect("admins")
    return render(request, "categoryadmin.html")

#get category
def get_category(request):
    category = Category.objects.all()
    context = {
        "category": category
    }
    return render(request, "categorylistadmin.html", context)

# update Cateogry -> id , pk -> primary key
def update_category(request, pk):
    category = get_object_or_404(Category, id=pk)
    if request.method == "POST":
        name = request.POST.get("name")
        image = request.FILES.get("image")
        category.name = name
        category.image = image
        category.save()
        return redirect("admins")
    return render(request, "categoryupdate.html", {"category": category})

# delete -> category, id , pk -> primary key
def delete_category(request, pk):
    category = get_object_or_404(Category, id=pk)
    category.delete()
    return redirect("admins")