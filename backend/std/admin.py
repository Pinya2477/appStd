from django.contrib import admin
from .models import Std

# Register your models here.
class StdAdmin (admin.ModelAdmin):
    list_display = ("title", "name", "address", "telephone","email")
    
# Register
admin.site.register(Std, StdAdmin)