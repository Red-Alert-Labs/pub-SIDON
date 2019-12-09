from django.db import models


class CommonCriteria(models.Model):
    name = models.CharField(max_length=50)
    cwe_id = models.CharField(max_length=10,unique=True)

    def __str__(self):
        return self.cwe_id + ' - ' + self.name

class RequirementsGroup(models.Model):
    name = models.CharField(max_length=50)
    requirements = models.ManyToManyField(CommonCriteria)

    def __str__(self):
        return self.name
