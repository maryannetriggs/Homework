from django.db import models

# Create your models here.

class Char(models.Model):
    name = models.CharField(max_length=50)
    species = models.CharField(max_length=50)
    image = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name} - {self.species}'
