# Generated by Django 3.0.5 on 2020-05-30 14:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spanish', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='words',
            old_name='ben_revision_list',
            new_name='bg_list',
        ),
        migrations.RenameField(
            model_name='words',
            old_name='olivia_revision_list',
            new_name='og_list',
        ),
        migrations.RenameField(
            model_name='words',
            old_name='vg_revision_list',
            new_name='vg_list',
        ),
    ]
