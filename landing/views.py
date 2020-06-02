from django.shortcuts import render


def login(request):
    return render(request, 'landing/login.html')


def home(request):


    return render(request, 'landing/home.html')
