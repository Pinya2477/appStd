from django.db import models

# Create your models here.
class Std (models.Model):
    title=models.CharField(max_length=20)
    name=models.CharField(max_length=50)
    address=models.CharField(max_length=200)
    telephone=models.CharField(max_length=10)
    email=models.CharField(max_length=100)


def __str__(self):
    return self.title

