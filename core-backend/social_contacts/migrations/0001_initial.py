# Generated by Django 5.1.4 on 2025-02-08 17:03

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0004_contribution'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('whatsapp_group_url', models.URLField(blank=True, max_length=255, null=True, validators=[django.core.validators.URLValidator()])),
                ('linkedin_url', models.URLField(blank=True, max_length=255, null=True, validators=[django.core.validators.URLValidator()])),
                ('github_url', models.URLField(blank=True, max_length=255, null=True, validators=[django.core.validators.URLValidator()])),
                ('whatsapp_number', models.CharField(blank=True, max_length=15, null=True, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')])),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='social_details', to='projects.project')),
            ],
            options={
                'verbose_name': 'Social Details',
                'verbose_name_plural': 'Social Details',
            },
        ),
    ]
