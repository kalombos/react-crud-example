from rest_framework import generics
from api import serializers, models


class ItemsView(generics.ListCreateAPIView):
    serializer_class = serializers.ItemSerializer
    queryset = models.Item.objects


class ItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Item.objects
    serializer_class = serializers.ItemSerializer
