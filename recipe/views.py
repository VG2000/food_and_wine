from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
from .serializers import RecipeSerializer
from rest_framework import generics
from .models import Recipe
from .forms import AddRecipeForm

#from .forms import AddRecipeForm, RecipeFilterForm

# Serializer
class RecipeAPI(LoginRequiredMixin,generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


def RecipeHomeView(request):
    return render(request, 'recipe/home.html')

# OLD List View
class RecipeListViewOLD(LoginRequiredMixin, ListView):
    model = Recipe
    template_name = 'recipe/recipe_list.html'
    context_object_name = 'recipes'
    success_url = reverse_lazy('recipe-list')
# ////////////


def RecipeListView(request):
    qs  = Recipe.objects.all()

    cuisine_name = request.GET.get('cuisine')
    meal_type_name = request.GET.get('meal-type')

    if cuisine_name != None:
            qs = Recipe.objects.filter(cuisine__cuisine_name=cuisine_name).order_by('cuisine')
    if meal_type_name != None:
            qs = qs.filter(meal_type__meal_typ=meal_type_name).order_by('meal_type')

    # Get cuisine and meal type list
    cuisine_list = [i.cuisine.cuisine_name for i in Recipe.objects.distinct('cuisine')]
    cuisine_list.sort()
    meal_type_list = [i.meal_type.meal_typ for i in Recipe.objects.distinct('meal_type')]
    meal_type_list.sort()

    sort_qs = qs.order_by('name')

    context = {
        'recipes': sort_qs,
        'cuisine': cuisine_list,
        'meal_type': meal_type_list,
    }
    return render(request, 'recipe/recipe_list.html', context)


class RecipeCreateView(LoginRequiredMixin, CreateView):
    model = Recipe
    form_class = AddRecipeForm
    template_name = 'recipe/recipe_add.html'
    success_url = reverse_lazy('recipe-list')


class RecipeUpdateView(LoginRequiredMixin, UpdateView):
    model = Recipe
    form_class = AddRecipeForm
    template_name = 'recipe/recipe_edit.html'
    success_url = reverse_lazy('recipe-list')


class RecipeDetailView(LoginRequiredMixin, DetailView):
    model = Recipe
    template_name = 'recipe/recipe_detail.html'
    success_url = reverse_lazy('recipe-detail')

class RecipeDeleteView(LoginRequiredMixin, DeleteView):
    model = Recipe
    template_name = 'recipe/recipe_delete.html'
    success_url = reverse_lazy('recipe-list')


