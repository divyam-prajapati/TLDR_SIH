from django.shortcuts import render
from .serializers import PressReleaseSerializer 
from rest_framework import viewsets 
from .models import PressRelease


# Create your views here.
class PressReleaseView(viewsets.ModelViewSet):  
    serializer_class = PressReleaseSerializer   
    queryset = PressRelease.objects.all() 