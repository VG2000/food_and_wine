# Generated by Django 3.0.5 on 2020-05-10 13:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0002_recipe_url'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='recipe',
            options={'ordering': ['-name']},
        ),
    ]
