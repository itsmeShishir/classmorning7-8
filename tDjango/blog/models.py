from django.db import models

# Create your models here.
#ORM Object Relational Mapping -> Object -> Database

class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='category', blank=True, null=True)

    def __str__(self):
        return f"{self.name} and {self.image}"

class Blog(models.Model):
    title = models.CharField(max_length=50)
    desc = models.TextField()
    image = models.ImageField(upload_to='blog', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    isFeatured = models.BooleanField(default=False)
    isTrending = models.BooleanField(default=False)
    isSlider = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    
