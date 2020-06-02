from rest_framework import serializers

from .models import Words


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Words 
        fields = ['id', 'spanish_word', 'english_word', 'vg_list', 'bg_list', 'og_list']
