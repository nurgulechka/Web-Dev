from django.shortcuts import render
from django.http.response import JsonResponse
from api import models
# Create your views here.
def product_list(request):
    products = models.Product.objects.all()
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)
def product_by_id(request, product_id):
    product = models.Product.objects.get(id=product_id)
    return JsonResponse(product.to_json(), safe=False)

def category_list(request):
    categories = models.Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_by_id(request, category_id):
    category = models.Category.objects.get(id=category_id)
    return JsonResponse(category.to_json(), safe=False)

def products_by_category(request, category_id):
    category = models.Category.objects.get(id=category_id)
    products = category.product_set.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)