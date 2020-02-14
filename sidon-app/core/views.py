from django.shortcuts import render
from rest_framework import viewsets, views
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import RequirementsGroup, CommonCriteria, Scan, Result
from .serializers import RequirementsGroupSerializer, CommonCriteriaSerializer, UserSerializer, ScanSerializer, ScansSerializer, ResultsSerializer, ResultListSerializer
from .processor import getData, getPrediction, changeCWEtoID

class RequirementsGroupView(viewsets.ModelViewSet):
    queryset = RequirementsGroup.objects.all()
    serializer_class = RequirementsGroupSerializer

class CommonCriteriaView(viewsets.ModelViewSet):
    queryset = CommonCriteria.objects.all()
    serializer_class = CommonCriteriaSerializer

class ScansView(viewsets.ModelViewSet):
    queryset = Scan.objects.all()
    serializer_class = ScansSerializer

class ResultList(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultsSerializer

class ResultDetail(views.APIView):
    def get_object(self, scanID):
        try:
            return Result.objects.filter(scan=scanID).all()
        except Result.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        scan = Scan.objects.get(pk=pk)
        results = Result.objects.filter(scan=pk).all()
        data = getData(scan.file)
        for result in results:
            if True:#result.score == -1:
                response = getPrediction(data, result.commonCriteria.cwe_id)
                if response:
                    result.score = response['score']
                    result.save()
        serializer = ResultsSerializer(results, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        changeCWEtoID(request.data)
        serializer = ResultListSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
            print(scanSerializer.data)
            return Response(scanSerializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(scanSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
