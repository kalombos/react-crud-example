from rest_framework import serializers
from api.models import Item


class ItemSerializer(serializers.ModelSerializer):

    name = serializers.RegexField('^(\w+\s)*\w+$')

    class Meta:
        model = Item
        fields = ('id', 'name', 'parent')

    def validate_parent(self, value):
        parent = value
        instance = self.instance
        if instance is not None and parent is not None:
            if instance.get_descendants().filter(id=parent.id).exists():
                raise serializers.ValidationError(
                    {'parent': 'A node may not be made a child of any of its descendants.'}
                )
        return value

    def validate(self, attrs):
        name = attrs['name']
        parent = attrs['parent']
        instance = self.instance
        if parent:
            queryset = parent.get_family().filter(name=name)
            if instance:
                queryset = queryset.exclude(id=instance.id)
            if queryset.exists():
                raise serializers.ValidationError(
                    {
                        'parent': 'Name should be unique in family tree'}
                    )
        return attrs
