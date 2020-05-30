from django.urls import path


from .views import SpanishHomeView, SpanishFlashCardView, SpanishSaveWordView,fetchWordAPIView

urlpatterns = [
    # home
    path('', SpanishHomeView, name='spanish-home'),
    # Flashcards
    path('flashcards/', SpanishFlashCardView, name='spanish-flashcards'),
    path('flashcards/<int:pk>', SpanishSaveWordView, name='spanish-save-word'),
    #REST FRAMEWORK
    path('flashcards/word/', fetchWordAPIView, name='fetch-word'),
]