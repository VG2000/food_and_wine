from django import forms
from django.forms import ModelForm
from .models import Recipe


class AddRecipeForm(ModelForm):
        class Meta:
            model = Recipe
            fields = ['name', 'meal_type', 'cuisine', 'description', 'prep_time_mins',              'prep_time_hours','cook_time_mins', 'cook_time_hours', 'ingredients', 'method', 'url'        
            ]


