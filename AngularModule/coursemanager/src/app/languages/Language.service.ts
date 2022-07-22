import { Injectable } from '@angular/core';
import { Language } from './Language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  getAllLanguages(): Language[] {
    return languages;
  }
}

let languages: Language[] = [
  {
    ID: 3,
    title: 'Vue.JS',
    stack: 'FrontEnd',
    logoURL: './assets/images/http.png',
    code: 'F006',
    classification: 5,
    referenceDate: '08/15/2021',
    description: 'Modern frontEnd language.',
  },
  {
    ID: 4,
    title: 'Node.JS',
    stack: 'BackEnd',
    logoURL: './assets/images/forms.png',
    code: 'B004',
    classification: 4.5,
    referenceDate: '04/05/2020',
    description: 'Essential backEnd language.',
  },
  {
    ID: 5,
    title: 'MongoDB',
    stack: 'BackEnd',
    logoURL: './assets/images/forms.png',
    code: 'B005',
    classification: 4,
    referenceDate: '03/21/2022',
    description: 'Popular database language.',
  },
  {
    ID: 6,
    title: 'MySQL',
    stack: 'BackEnd',
    logoURL: './assets/images/forms.png',
    code: 'B006',
    classification: 5,
    referenceDate: '05/10/2020',
    description: 'Classic database language.',
  },
];
