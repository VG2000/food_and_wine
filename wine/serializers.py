from rest_framework import serializers
from .models import Wine

class WineSerializer(serializers.ModelSerializer):
    country = serializers.CharField(source='country.country')
    region = serializers.CharField(source='region.region')
    class Meta:
        model = Wine
        fields = ['name','country','region', 'vintage', 'retailer', 'price', 'comment',
                    'blend', 'vg_rating', 'entry_dt', 'amend_dt', 'url']


