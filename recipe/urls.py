from django.urls import path

from .views import RecipeHomeView,RecipeListView, RecipeCreateView, RecipeDetailView, RecipeUpdateView,RecipeDeleteView,RecipeAPI


urlpatterns = [
    # HOME
    path('', RecipeHomeView, name='recipe-home'),
    # RECIPE
    path('add/', RecipeCreateView.as_view(), name='add-recipe'),
    path('list/', RecipeListView, name='recipe-list'),
    path('detail/<int:pk>',RecipeDetailView.as_view(), name='recipe-detail' ),
    path('edit/<int:pk>',RecipeUpdateView.as_view(), name='edit-recipe' ),
    path('delete/<int:pk>', RecipeDeleteView.as_view(), name='delete-recipe'),
    # API
    path('api/', RecipeAPI.as_view(), name='recipe-api')
]