from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', auth_views.LoginView.as_view(template_name='landing/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='landing/logout.html'), name='logout'),
    path('home/', views.home, name='landing-home'),
    #WINE
    path('wine/', include('wine.urls')),
    path('recipes/', include('recipe.urls')),
]