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
                    'A node may not be made a child of any of its descendants.'
                )
            if parent.id == instance.id:
                raise serializers.ValidationError(
                    'A node may not be made a child of itself.'
                )
        return value

    def validate(self, attrs):
        name = attrs['name']
        parent = attrs['parent']
        instance = self.instance

        queryset = None
        if parent:
            queryset = parent.get_family().filter(name=name)
            if instance:
                queryset = queryset.exclude(id=instance.id)

        elif instance:
            queryset = instance.get_descendants().filter(name=name)

        if queryset and queryset.exists():
            raise serializers.ValidationError(
                {
                    'name':
                        'The name should be unique in family tree'}
            )
        return attrs
