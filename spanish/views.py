from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy, reverse
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.paginator import Paginator
from .models import Words
from random import randint
from .serializers import WordSerializer


def SpanishHomeView(request):
    return render(request, 'spanish/home.html')


def SpanishFlashCardView(request):
    context  = Words.objects.all()

    vg = request.GET.get('vg')
    id = request.GET.get('id')

    if id and vg:
        word = Words.objects.get(id=id)
        word.vg_list = True
        word.save()

    return render(request, 'spanish/flashcards.html')


def VGRevisionListView(request):
    id = request.GET.get('id')
    print(id)
    if id:
        word = Words.objects.get(id=id)
        word.vg_list = False
        word.save()
    
    context = {
        'words': Words.objects.filter(vg_list=True).order_by('id').count()
    }

    return render(request, 'spanish/flashcards_vg.html', context)

# API
@api_view(['GET',])
def fetchWordAPIView(request):
        # Get random word
        if request.method == 'GET':
            num_rows = Words.objects.count()
            rand_num = randint(0,num_rows-1)
            word = Words.objects.get(id=rand_num)

            serializer = WordSerializer(word)
            return Response(serializer.data)


@api_view(['GET',])
def VinceAPIView(request):
    if request.method == 'GET':
            num_rows = Words.objects.filter(vg_list=True).order_by('id').count()
            if num_rows > 0:
                rand_num = randint(0,num_rows-1)
                list = Words.objects.filter(vg_list=True).order_by('id')
                rand_id = list[rand_num].id
                
                word = Words.objects.get(id=rand_id)
                serializer = WordSerializer(word)
                return Response(serializer.data)
            else:
                return Response("No words currently saved")
          