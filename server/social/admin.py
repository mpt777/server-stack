from django.contrib import admin

from .models import *

# Register your models here.

class SecretSantaRow(admin.TabularInline):
    model = SecretSantaRow
    extra = 0

class SecretSantaAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')
    inlines = (SecretSantaRow,)
    

admin.site.register(SecretSanta, SecretSantaAdmin)
