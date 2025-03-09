from django.shortcuts import render
from .models import Contact
from .forms import ContactForm

# Create your views here.


def ContactPage(request):
    form = ContactForm()
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
    context = {
        "form": form
    }
    return render(request, "contactPage.html", context)