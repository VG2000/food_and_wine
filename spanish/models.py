from django.db import models
from django.contrib.auth.models import User

class Words(models.Model):
    spanish_word = models.CharField(max_length=100)
    english_word = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
 

    def __str__(self):
        return self.english_word