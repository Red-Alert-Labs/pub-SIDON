from rest_framework import serializers
from .models import RequirementsGroup, CommonCriteria

class RequirementsGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementsGroup
        fields = ('id', 'name', 'requirements')

class CommonCriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonCriteria
        fields = ('id', 'name', 'cwe_id')
