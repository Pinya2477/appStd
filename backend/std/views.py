from django.shortcuts import render
from rest_framework import viewsets
from .serializers import StdSerializer
from .models import Std
from rest_framework import viewsets
from std.models import Std



class StdViewSet(viewsets.ModelViewSet):
   
    queryset = Std.objects.all()
    serializer_class = StdSerializer
    





# Create your views here.
class StdView(viewsets.ModelViewSet):
    serializer_class= StdSerializer
    queryset= Std.objects.all() 