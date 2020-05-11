from django.urls import path

from .views import WineHomeView, WineCreateView, WineListView, WineEditView, load_regions, WineFilterListView, WineSearchView, WineDeleteView, WineAPI


urlpatterns = [
    #HOME
    path('', WineHomeView, name='wine-home'),
    #WINE
    path('add/', WineCreateView.as_view(), name='add-wine'),
    path('list/', WineFilterListView, name='wine-list'),
    path('edit/<int:pk>',WineEditView.as_view(), name='wine-edit' ),
    path('search/', WineSearchView, name='wine-search'),
    path('delete/<int:pk>', WineDeleteView.as_view(), name='delete-wine'),
    #REGION LIST
    path('ajax/load-regions/', load_regions, name='ajax_load_regions'),
    #API
    path('api/', WineAPI.as_view(), name='wine-api')
]