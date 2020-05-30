from django.db import models

class Words(models.Model):
    spanish_word = models.CharField(max_length=100)
    english_word = models.CharField(max_length=100)
    vg_list = models.BooleanField(default=False)
    bg_list = models.BooleanField(default=False)
    og_list = models.BooleanField(default=False)
    jg_list = models.BooleanField(default=False)


    def __str__(self):
        return self.english_word

        #Need to rollback the User migration. Will be a good lesson!!!
        
        #https://docs.djangoproject.com/en/3.0/topics/migrations/#reversing-migrations