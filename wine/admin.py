from django.contrib import admin
from . models import Country, Region, Wine

# Register your models here.
admin.site.register(Country)
admin.site.register(Region)
admin.site.register(Wine)
