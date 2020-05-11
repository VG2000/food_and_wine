from django.db import models
from django.db.models.functions import Floor


class MealTypes(models.Model):
    meal_typ = models.CharField(max_length=30)

    def __str__(self):
        return self.meal_typ

class Cuisine(models.Model):
    cuisine_name = models.CharField(max_length=30)

    def __str__(self):
        return self.cuisine_name

class Recipe(models.Model):

    name = models.CharField(max_length=100)
    description = models.TextField()
    serves = models.CharField(max_length=100)
    prep_time_mins = models.FloatField()
    prep_time_hours = models.FloatField()
    cook_time_mins = models.FloatField()
    cook_time_hours  = models.FloatField()
    method = models.TextField()
    ingredients = models.TextField()
    meal_type = models.ForeignKey(MealTypes, on_delete=models.CASCADE)
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE)
    url = models.CharField(max_length=200, blank=True)

    @property
    def prep_time(self):
        if self.prep_time_hours == 0:
            return str(self.prep_time_mins) + " mins"

        if self.prep_time_hours >= 1 and self.prep_time_hours < 2:
            hr_tag = " hr "
        else:
            hr_tag = " hrs "

        return str(self.prep_time_hours) + hr_tag + str(self.prep_time_mins) + " mins"


    @property
    def cook_time(self):
        if self.cook_time_hours == 0:
            return str(self.cook_time_mins) + " mins"

        if self.cook_time_hours >= 1 and self.cook_time_hours < 2:
            hr_tag = " hr "
        else:
            hr_tag = " hrs "

        return str(self.cook_time_hours) + hr_tag + str(self.cook_time_mins) + " mins"
    
    @property
    def total_time(self):
        total = self.prep_time_mins + (self.prep_time_hours * 60) + self.cook_time_mins + (self.cook_time_hours * 60)

        hours = int(total/60)
        if hours >= 1 and hours < 2:
            hr_tag = " hr "
        else:
            hr_tag = " hrs "

        mins = total - (hours * 60)

        return str(hours) + hr_tag + str(mins) + " mins"

    def __str__(self):
        return self.name

    



