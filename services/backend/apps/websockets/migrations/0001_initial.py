# Generated by Django 3.2.5 on 2021-07-21 10:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='WebSocketConnection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('connection_id', models.CharField(max_length=32)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='GraphQLSubscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('relay_id', models.CharField(max_length=16)),
                ('operation_name', models.CharField(max_length=32)),
                ('query', models.TextField()),
                ('variables', models.JSONField(blank=True, default=dict)),
                ('connection', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='websockets.websocketconnection')),
            ],
        ),
    ]
