from django.db import models

# Create your models here.
class Country(models.Model):
    country = models.CharField(max_length=20)

    def __str__(self):
        return self.country


class Region(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    region = models.CharField(max_length=40)

    def __str__(self):
        return self.region


class Wine(models.Model):
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    region = models.ForeignKey(Region, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=100)
    vintage = models.IntegerField(blank=True, null=True)
    retailer = models.CharField(max_length=100, blank=True)
    price = models.FloatField(blank=True, null=True)
    comment = models.CharField(max_length=100, blank=True)
    blend = models.CharField(max_length=100, blank=True)
    vg_rating = models.FloatField(blank=True, null=True, verbose_name="Vince's Rating")
    entry_dt = models.DateField(auto_now_add=True)
    amend_dt = models.DateField(blank=True, null=True)
    url = models.URLField(blank=True)


    #2/3 1/3 wine list and wine filter. 
  

    #pass the retailers and blend in as a drop down to avoid mispellings

    def __str__(self):
        return self.name