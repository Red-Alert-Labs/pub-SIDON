# Generated by Django 2.2.5 on 2019-12-08 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20191208_2305'),
    ]

    operations = [
        migrations.CreateModel(
            name='CommonCriteria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('cwe_id', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='RequirementsGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('requirements', models.ManyToManyField(to='core.CommonCriteria')),
            ],
        ),
        migrations.DeleteModel(
            name='Requirement',
        ),
    ]