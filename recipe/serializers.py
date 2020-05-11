from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    meal_type = serializers.CharField(source='meal_type.meal_typ')
    cuisine = serializers.CharField(source='cuisine.cuisine_name')
    class Meta:
        model = Recipe
        fields = ['name','description','serves', 'prep_time_mins', 'prep_time_hours',               'cook_time_mins', 'cook_time_hours', 'ingredients', 'method', 'meal_type', 'cuisine', 'url']

