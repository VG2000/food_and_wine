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
    # # Get random word
    # num_rows = Words.objects.count()
    # rand_num = randint(0,num_rows)

    # # Try and use this view to update the model. Shouldnt be too difficult!!!

    # context = {
    #     'word': Words.objects.get(id=rand_num)
    # }
    return render(request, 'spanish/flashcards.html')

def SpanishSaveWordView(request, pk):
    word = Words.objects.get(pk=pk)
    test = Words.objects.get(pk=419)  #decidir
    word.vg_revision_list = True
    word.save()
    print(word.id)
    
    print(word.english_word)
    print(word.vg_revision_list)
    print(test.vg_revision_list)
    print(test.english_word)
    # Words.save()
    return HttpResponseRedirect(reverse('spanish-flashcards'))

def VGRevisionListView(request):
    context = {
        'word': Words.objects.get(vg_revision_list=True)
    }
    return render(request, 'spanish/flashcards.html', context)

# API
@api_view(['GET', ])
def fetchWordAPIView(request):
        # Get random word
        if request.method == 'GET':
            num_rows = Words.objects.count()
            rand_num = randint(0,num_rows)
            word = Words.objects.get(id=rand_num)

            serializer = WordSerializer(word)
            return Response(serializer.data)


