from django.urls import path


from .views import SpanishHomeView, SpanishFlashCardView,VGRevisionListView,fetchWordAPIView,VinceAPIView

urlpatterns = [
    # home
    path('', SpanishHomeView, name='spanish-home'),
    # Flashcards
    path('flashcards/', SpanishFlashCardView, name='spanish-flashcards'),
    path('flashcards/vince', VGRevisionListView, name='vg-flashcards'),
    #REST FRAMEWORK
    path('flashcards/word/', fetchWordAPIView, name='fetch-word'),
    path('flashcards/word/vg/', VinceAPIView, name='fetch-word-vg'),
]