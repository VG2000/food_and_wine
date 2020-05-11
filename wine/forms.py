from django import forms
from django.forms import ModelForm
from .models import Wine, Country, Region


class AddWineForm(ModelForm):
        class Meta:
            model = Wine
            fields = ['country', 'region', 'name', 'vintage',
                        'retailer', 'price', 'comment', 'blend',
                        'vg_rating', 'url'
                    ]
            
            
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['region'].queryset = Region.objects.none()
            self.fields['region'].queryset = Region.objects.all().order_by('region')
            self.fields['country'].queryset = Country.objects.all().order_by('country')

            if 'country' in self.data:
                try:
                    country_id = int(self.data.get('country'))
                    self.fields['region'].queryset = Region.objects.filter(country_id=country_id).order_by('region')
                except (ValueError, TypeError):
                    pass  # invalid input from the client; ignore and fallback to empty     Region queryset
            elif self.instance.pk:
                self.fields['region'].queryset = Region.objects.filter(self.instance.country).order_by('region')
            

   
class EditWineForm(ModelForm):
        class Meta:
            model = Wine
            fields = ['country', 'region', 'name', 'vintage',
                        'retailer', 'price', 'comment', 'blend',
                        'vg_rating', 'url'
                    ]
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['region'].queryset = Region.objects.all().order_by('region')
            self.fields['country'].queryset = Country.objects.all().order_by('country')

            print(self.data)

#do the same as above to filter the region and then do as per the you tube for the filter...
class WineFilterForm(ModelForm):
    class Meta:
        model = Wine
        fields = ['country', 'region', 'vg_rating']   

    def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['region'].queryset = Region.objects.none()

            
            if 'country' in self.data:
                try:
                    print("Country in self data")
                    country_id = int(self.data.get('country'))
                    self.fields['region'].queryset = Region.objects.filter(country_id=country_id).order_by('region')
                except (ValueError, TypeError):
                    pass  # invalid input from the client; ignore and fallback to empty     Region queryset
            elif self.instance.pk:
                print("Country not in self data")
                self.fields['region'].queryset = Region.objects.filter(self.instance.country).order_by('region')          