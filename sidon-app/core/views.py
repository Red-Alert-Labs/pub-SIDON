from django.shortcuts import render
from rest_framework import viewsets
from .models import RequirementsGroup, CommonCriteria
from .serializers import RequirementsGroupSerializer, CommonCriteriaSerializer

class RequirementsGroupView(viewsets.ModelViewSet):
    queryset = RequirementsGroup.objects.all()
    serializer_class = RequirementsGroupSerializer

class CommonCriteriaView(viewsets.ModelViewSet):
    queryset = CommonCriteria.objects.all()
    serializer_class = CommonCriteriaSerializer
