from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self): return f"{self.name}"
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField()
    count = models.IntegerField()
    isActive = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self): return f"'id': {self.id}, 'name': {self.name}"
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'isActive': self.isActive
        }
