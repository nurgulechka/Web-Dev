from django.contrib import admin
from api import models

admin.site.register(models.Category)
admin.site.register(models.Product)

# Register your models here.
