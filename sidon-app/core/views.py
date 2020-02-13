from django.shortcuts import render
from rest_framework import viewsets, views
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import RequirementsGroup, CommonCriteria, Scan, Result
from .serializers import RequirementsGroupSerializer, CommonCriteriaSerializer, UserSerializer, ScanSerializer, ScansSerializer, ResultsSerializer
from .processor import getPrediction

class RequirementsGroupView(viewsets.ModelViewSet):
    queryset = RequirementsGroup.objects.all()
    serializer_class = RequirementsGroupSerializer

class CommonCriteriaView(viewsets.ModelViewSet):
    queryset = CommonCriteria.objects.all()
    serializer_class = CommonCriteriaSerializer

class ScansView(viewsets.ModelViewSet):
    queryset = Scan.objects.all()
    serializer_class = ScansSerializer

class ResultDetail(views.APIView):
    def get_object(self, scanID):
        try:
            return Result.objects.filter(scan=scanID).all()
        except Result.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        scan = Scan.objects.get(pk=pk)
        response = getPrediction(scan.file)
        print(response)
        result = Result.objects.filter(scan=pk).all()#self.get_object(pk)
        serializer = ResultsSerializer(result, many=True)
        return Response(serializer.data)

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
            scanObject = scanSerializer.save()
            return Response(scanSerializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(scanSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
