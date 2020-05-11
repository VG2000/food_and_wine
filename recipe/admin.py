from django.contrib import admin

from . models import Recipe, MealTypes, Cuisine

# Register your models here.
admin.site.register(Recipe)
admin.site.register(MealTypes)
admin.site.register(Cuisine)
