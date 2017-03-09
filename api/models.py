from django.db import models
from mptt.models import MPTTModel, TreeForeignKey


class Item(MPTTModel):
    name = models.CharField(max_length=50)
    parent = TreeForeignKey('self', null=True, blank=True,
                            related_name='children', db_index=True)

    def __str__(self):
        return self.name
