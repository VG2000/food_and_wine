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
from django.core.paginator import Paginator
from .serializers import WineSerializer
from rest_framework import generics
from .models import Wine, Region, Country
from .forms import AddWineForm, WineFilterForm, EditWineForm

# Serializer
class WineAPI(LoginRequiredMixin,generics.ListAPIView):
    queryset = Wine.objects.all()


    serializer_class = WineSerializer


def WineHomeView(request):
    return render(request, 'wine/home.html')

class WineCreateView(LoginRequiredMixin, CreateView):
    # model = Wine
    queryset= Wine.objects.order_by('country__country')
    form_class = AddWineForm
    template_name = 'wine/wine_add.html'
    success_url = reverse_lazy('wine-list')


#this is the view for the dependent dropdown list form.. Try later...
# class WineListView(LoginRequiredMixin, ListView):
#     model = Wine
#     form_class = WineFilterForm
#     context_object_name = 'wines'
#     template_name = 'wine/wine_list.html'

@login_required
def WineFilterListView(request):
    qs  = Wine.objects.all()

    country_name = request.GET.get('country')
    region_name = request.GET.get('region')
    vg_rating = request.GET.get('vg_rating')

    if region_name == None:
        if country_name != None:
            qs = Wine.objects.filter(country__country=country_name).order_by('country')
        if vg_rating != '' and vg_rating != None:
            qs = qs.filter(vg_rating__gte=vg_rating).order_by('-id')
    else:
        qs = qs.filter(region__region=region_name).order_by('-id')


    # Get country and region list and sort
    country_list = [i.country.country for i in Wine.objects.distinct('country')]
    country_list.sort()

    region_list = [i.region.region for i in Wine.objects.distinct('region')]
    region_list.sort()

    sort_qs = qs.order_by('country__country', 'region__region')

    # Pagination
    # paginator = Paginator(sort_qs, 12) 
    # page_number = request.GET.get('page')
    # page_obj = paginator.get_page((page_number))
 

    context = {
        'wines': sort_qs,  #page_obj, if we are using pagination
        'country': country_list,
        'region': region_list,
        'vg_rating': Wine.objects.order_by('vg_rating').distinct('vg_rating')
    }

    return render(request, 'wine/wine_list.html', context)

class WineEditView(LoginRequiredMixin, UpdateView):
    model = Wine
    form_class = EditWineForm
    template_name = 'wine/wine_edit.html'
    success_url = reverse_lazy('wine-list')


def WineSearchView(request):
    return render(request, 'wine/wine_search.html')


def load_regions(request):
    country_id = request.GET.get('country')
    print(country_id)
    regions = Region.objects.filter(country_id=country_id).order_by('region')

    return render(request, 'wine/region_list.html', {'regions': regions})
    

class WineDeleteView(LoginRequiredMixin, DeleteView):
    model = Wine
    template_name = 'wine/wine_delete.html'
    success_url = reverse_lazy('wine-list')
