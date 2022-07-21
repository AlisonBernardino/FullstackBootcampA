import { Component, OnInit } from '@angular/core';
import { Language } from './language';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languagesList.component.html',
})
export class LanguagesListComponent implements OnInit {
  languages: Language[] = [];

  ngOnInit(): void{
    this.languages = [
      {
        ID: 1,
        title: 'Java',
        stack: 'BackEnd',
        logoURL: '',
        code: 'B003',
        classification: 9,
        referenceDate: '07/21/2020'
      },
      {
        ID: 2,
        title: 'Angular',
        stack: 'FrontEnd',
        logoURL: '',
        code: 'F005',
        classification: 9,
        referenceDate: '10/03/2021'
      }
    ]
  }
}
