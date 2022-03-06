from django.db import models

class PressRelease(models.Model):
    PressReleaseId = models.AutoField(primary_key=True)
    PressReleaseTitle = models.CharField(max_length=64)
    PressReleaseDate = models.DateField()
    PressReleaseCategory = models.CharField(max_length=64)
    PressReleaseLink = models.CharField(max_length=200)
    PressReleaseSummary = models.TextField()
