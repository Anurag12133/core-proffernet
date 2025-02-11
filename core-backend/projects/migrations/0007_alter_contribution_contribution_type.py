# Generated by Django 5.1.4 on 2025-02-10 21:07

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_alter_contribution_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contribution',
            name='contribution_type',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), blank=True, default=list, size=None),
        ),
    ]
