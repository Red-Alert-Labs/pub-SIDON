from django.contrib import admin
from .models import RequirementsGroup, CommonCriteria, Scan, Result
# Register your models here.
admin.site.register(RequirementsGroup)
admin.site.register(CommonCriteria)
admin.site.register(Scan)
admin.site.register(Result)
