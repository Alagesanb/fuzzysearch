# Use include() to add paths from the fuzzy search application 
from django.conf.urls import url

from . import views

urlpatterns = [
    url('', views.index, name='index'),
]
