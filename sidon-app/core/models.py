from django.db import models


class CommonCriteria(models.Model):
    name = models.CharField(max_length=50)
    cwe_id = models.CharField(max_length=10,unique=True)

    def __str__(self):
        return str(self.cwe_id) + ' - ' + self.name

class RequirementsGroup(models.Model):
    name = models.CharField(max_length=50)
    requirements = models.ManyToManyField(CommonCriteria)

    def __str__(self):
        return self.name

class Scan(models.Model):
    name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(blank=False, null=False)
    results = models.ManyToManyField(CommonCriteria, through='Result')
    def __str__(self):
        return self.name

class Result(models.Model):
    class Meta:
        unique_together = (('scan', 'commonCriteria'),)
    scan = models.ForeignKey(Scan, on_delete=models.CASCADE)
    commonCriteria = models.ForeignKey(CommonCriteria, on_delete=models.CASCADE)
    score = models.IntegerField(default=-1)
    def __str__(self):
        return str(self.scan) +  " - " + str(self.commonCriteria)
