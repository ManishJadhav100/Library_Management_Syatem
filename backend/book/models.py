from django.db import models
from django.contrib.auth.models import User

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    publication = models.CharField(max_length=100)
    publication_date = models.DateField(null=True, blank=True)
    price = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.PROTECT)

    def __str__(self):
        return self.title