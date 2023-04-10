import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api import models
# Create your views here.
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = models.Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company_description = data.get('description', '')
        company_city = data.get('city', '')
        company_address = data.get('address', '')
        company = models.Company.objects.create(name=company_name, description=company_description, city=company_city, address=company_address)
        return JsonResponse(company.to_json(), safe=False)

@csrf_exempt
def company_by_id(request, company_id):
    try:
        company = models.Company.objects.get(id=company_id)
    except models.Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        return JsonResponse(company.to_json(), safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        new_company_description = data.get('description', company.description)
        company.description = new_company_description
        new_company_city = data.get('city', company.city)
        company.city = new_company_city
        new_company_address = data.get('address', company.address)
        company.address = new_company_address
        company.save()
        return JsonResponse(company.to_json(), safe=False)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse(f'{company.name}: deleted')

@csrf_exempt
def vacancies_by_company(request, company_id):
    try:
        company = models.Company.objects.get(id=company_id)
    except models.Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    vacancies = company.vacancy_set.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
@csrf_exempt
def vacancies_list(request):

    if request.method == 'GET':
        vacancies = models.Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_description = data.get('description', '')
        vacancy_salary = data.get('salary', '')
        vacancy_company = data.get('company', '')
        companyy = models.Company.objects.get(name=vacancy_company)
        vacancy = models.Vacancy.objects.create(name=vacancy_name,  description=vacancy_description, salary=vacancy_salary, company=companyy)
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def vacancy_by_id(request, vacancy_id):
    try:
        vacancy = models.Vacancy.objects.get(id=vacancy_id)
    except models.Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json(), safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        vacancy.name = new_vacancy_name
        new_vacancy_description = data.get('descr', vacancy.description)
        vacancy.description = new_vacancy_description
        new_vacancy_salary = data.get('salary', vacancy.salary)
        vacancy.salary = new_vacancy_salary
        new_vacancy_company = data.get('company', vacancy.company)
        vacancy.company = new_vacancy_company
        vacancy.save()
        return JsonResponse(vacancy.to_json(), safe=False)
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse(f'{vacancy.name}: deleted')

@csrf_exempt
def top_vacancies_by_salary(request):
    vacancies = models.Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


