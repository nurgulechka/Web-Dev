import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/`
    )
  }

  getVacanciesOfCompany(companyId:string): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${companyId}/vacancies/`
    )
  }

}
