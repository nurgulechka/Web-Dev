import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{

  vacancies:Vacancy[] = []

  constructor(private companyService: CompanyService, private route:ActivatedRoute) {
  }

  companyID:string | null = ''

  ngOnInit() {
    this.companyID = this.route.snapshot.paramMap.get('id');
    this.companyService.getVacanciesOfCompany(this.companyID!).subscribe((data)=>{
      this.vacancies = data;
    })
  }
}
