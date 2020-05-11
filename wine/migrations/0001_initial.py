# Generated by Django 3.0.5 on 2020-04-22 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=100)),
                ('region', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Wine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=100)),
                ('region', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('vintage', models.IntegerField(blank=True)),
                ('retailer', models.CharField(blank=True, max_length=100)),
                ('price', models.FloatField(blank=True)),
                ('comment', models.CharField(blank=True, max_length=100)),
                ('blend', models.CharField(blank=True, max_length=100)),
                ('vg_rating', models.FloatField(blank=True)),
                ('entry_dt', models.DateField(auto_now_add=True)),
                ('amend_dt', models.DateField(blank=True, null=True)),
                ('url', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='NewRegion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(max_length=50)),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wine.Country')),
            ],
        ),
    ]
