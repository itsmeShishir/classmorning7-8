from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Category, Blog

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