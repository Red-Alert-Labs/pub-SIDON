from django.shortcuts import render
from rest_framework import viewsets, views
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import RequirementsGroup, CommonCriteria, Scan
from .serializers import RequirementsGroupSerializer, CommonCriteriaSerializer, UserSerializer, ScansSerializer

class RequirementsGroupView(viewsets.ModelViewSet):
    queryset = RequirementsGroup.objects.all()
    serializer_class = RequirementsGroupSerializer

class CommonCriteriaView(viewsets.ModelViewSet):
    queryset = CommonCriteria.objects.all()
    serializer_class = CommonCriteriaSerializer

class ScansView(viewsets.ModelViewSet):
    queryset = Scan.objects.all()
    print(queryset.results)
    serializer_class = ScansSerializer

class CurrentUserView(views.APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        print(request.user)
        return Response(serializer.data)

class ScanView(views.APIView):
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request):
        scanSerializer = ScanSerializer(data=request.data)
        if scanSerializer.is_valid():
            scanSerializer.save()
            return Response(scanSerializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(scanSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
