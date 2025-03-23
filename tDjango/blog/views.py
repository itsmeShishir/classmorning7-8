from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Category, Blog, Reviews
from auths.models import User
from django.contrib.auth.decorators import login_required
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





def contact(request):
    return render(request, "contact.html")

@login_required
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
@login_required
def create_category(request):
    if request.method == "POST":
        name = request.POST.get("name")
        image = request.FILES.get("image")
        Category.objects.create(name=name, image=image)
        return redirect("admins")
    return render(request, "categoryadmin.html")

#get category
@login_required
def get_category(request):
    category = Category.objects.all()
    context = {
        "category": category
    }
    return render(request, "categorylistadmin.html", context)

# update Cateogry -> id , pk -> primary key
@login_required
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
@login_required
def delete_category(request, pk):
    category = get_object_or_404(Category, id=pk)
    category.delete()
    return redirect("admins")

# all blogs 
@login_required
def allblogs(request):
    blog = Blog.objects.all()
    context = {
        "blog": blog
    }
    return render(request, "allblogs.html", context)

#create Blogs
@login_required
def create_blog(request):
    if request.method == "POST":
        title = request.POST.get("title")
        desc = request.POST.get("desc")
        image = request.FILES.get("image")
        category = request.POST.get("category")
        isFeatured = bool(request.POST.get("isFeatured")) or False
        isTrending = bool(request.POST.get("isTrending")) or False
        isSlider = bool(request.POST.get("isSlider")) or False
        category = Category.objects.get(id=category)
        Blog.objects.create(title=title, desc=desc, image=image, category=category, isFeatured=isFeatured, isTrending=isTrending, isSlider=isSlider)
        print("Blog Created")
        return redirect("admins")
    category = Category.objects.all()
    context = {
        "category": category
    }
    return render(request, "blogadmin.html", context)  

# update blog  
@login_required
def update_blog(request, pk):
    blog = get_object_or_404(Blog, id=pk)
    if request.method == "POST":
        title = request.POST.get("title")
        desc = request.POST.get("desc")
        image = request.FILES.get("image")
        category = request.POST.get("category")
        isFeatured = bool(request.POST.get("isFeatured")) or False
        isTrending = bool(request.POST.get("isTrending")) or False
        isSlider = bool(request.POST.get("isSlider")) or False
        category = Category.objects.get(id=category)
        blog.title = title
        blog.desc = desc
        blog.image = image
        blog.category = category
        blog.isFeatured = isFeatured
        blog.isTrending = isTrending
        blog.isSlider = isSlider
        blog.save()
        return redirect("admins")
    return render(request, "blogupdate.html", {"blog": blog})

@login_required
def delete_blog(request, pk):
    blog = get_object_or_404(Blog, id=pk)
    blog.delete()
    return redirect("admins")

def create_reating(request, pk):
    if request.method == "POST":
        user = request.user
        blog = Blog.objects.get(id=pk)
        rating = request.POST.get("rating")
        review = request.POST.get("review")
        Reviews.objects.create(user=user, blog=blog, rating=rating, review=review)
        return redirect("single", pk=blog.id)
    return render(request, "single.html")

def get_reviews(request, pk):
    blog = Blog.objects.get(id=pk)
    reviews = Reviews.objects.filter(blog=blog)
    context = {
        "reviews": reviews
    }
    return render(request, "reviews.html", context)

def single(request, pk):
    singleblog = get_object_or_404(Blog, id=pk)
    countreview = Reviews.objects.filter(blog=singleblog).count()
    reviews = Reviews.objects.filter(blog=singleblog)
    context = {
        "singleblog": singleblog,
        "reviews": reviews, 
        "countreview": countreview
    }
    return render(request, "single.html", context)


def category(request):
    return render(request, "category.html")

def get_category_blogs(request, pk):
    category = Category.objects.get(id=pk)
    blog = Blog.objects.filter(category=category)
    context = {
        "blog": blog
    }
    return render(request, "category.html", context)