from rest_framework import serializers
from django.contrib.auth.models import User
from .models import RequirementsGroup, CommonCriteria

class RequirementsGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementsGroup
        fields = ('id', 'name', 'requirements')

class CommonCriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonCriteria
        fields = ('id', 'name', 'cwe_id')

class UserSerializer(serializers.ModelSerializer):
    """docstring for UserSerializer."""
    class Meta:
        model = User
        fields = ('username',)
