from django.shortcuts import render
from rest_framework import viewsets, views
from rest_framework.response import Response
from .models import RequirementsGroup, CommonCriteria
from .serializers import RequirementsGroupSerializer, CommonCriteriaSerializer, UserSerializer

class RequirementsGroupView(viewsets.ModelViewSet):
    queryset = RequirementsGroup.objects.all()
    serializer_class = RequirementsGroupSerializer

class CommonCriteriaView(viewsets.ModelViewSet):
    queryset = CommonCriteria.objects.all()
    serializer_class = CommonCriteriaSerializer

class CurrentUserView(views.APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        print(request.user)
        return Response(serializer.data)
