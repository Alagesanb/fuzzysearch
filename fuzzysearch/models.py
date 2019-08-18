# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Fuzzysearch(models.Model):
    search_name = models.CharField("Search name", max_length=255)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
  
    def __str__(self):
        return self.search_name







