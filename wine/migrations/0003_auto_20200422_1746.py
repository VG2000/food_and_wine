# Generated by Django 3.0.5 on 2020-04-22 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wine', '0002_auto_20200422_1745'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='price',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
