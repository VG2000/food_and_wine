# Generated by Django 3.0.5 on 2020-05-10 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wine', '0007_auto_20200428_1400'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='vg_rating',
            field=models.FloatField(blank=True, null=True, verbose_name="Vince's rating"),
        ),
    ]
