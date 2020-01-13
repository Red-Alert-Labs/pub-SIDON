from rest_framework import serializers
from django.contrib.auth.models import User
from .models import RequirementsGroup, CommonCriteria



class CommonCriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonCriteria
        fields = ('id', 'name', 'cwe_id')

class RequirementsGroupSerializer(serializers.ModelSerializer):
    requirements = CommonCriteriaSerializer(read_only=True, many=True)
    class Meta:
        model = RequirementsGroup
        fields = ('id', 'name', 'requirements')

class UserSerializer(serializers.ModelSerializer):
    """docstring for UserSerializer."""
    class Meta:
        model = User
        fields = ('username',)
