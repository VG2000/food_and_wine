# Generated by Django 3.0.5 on 2020-04-22 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wine', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='vg_rating',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='wine',
            name='vintage',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
