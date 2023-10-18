from .models import Std
from rest_framework import serializers


class StdSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Std
        fields = ('url', 'title', 'name', 'address', 'telephone', 'email')