import { Injectable } from '@angular/core';
import { Language } from './Language';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageURL: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) {}

  getAllLanguages(): Observable<Language[]> {
    return this.httpClient.get<Language[]>(this.languageURL);
  }

  saveForm(formLanguage: Language) {
    if (formLanguage.ID) {
      const index = languages.findIndex(
        (languageIterator: Language) => languageIterator.ID === formLanguage.ID
      );
      languages[index] = formLanguage;
    }
  }

  deleteLanguageByID(languageID: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.languageURL}/${languageID}`);
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
    referenceDate: '08/04/2021',
    description: 'Modern frontEnd language.',
  },
  {
    ID: 4,
    title: 'Node.JS',
    stack: 'BackEnd',
    logoURL: './assets/images/forms.png',
    code: 'B004',
    classification: 4.5,
    referenceDate: '04/03/2020',
    description: 'Essential backEnd language.',
  },
  {
    ID: 5,
    title: 'MongoDB',
    stack: 'BackEnd',
    logoURL: './assets/images/forms.png',
    code: 'B005',
    classification: 4,
    referenceDate: '03/01/2022',
    description: 'Popular database language.',
  },
  {
    ID: 6,
    title: 'MySQL',
    stack: 'BackEnd',
    logoURL: './assets/images/forms.png',
    code: 'B006',
    classification: 5,
    referenceDate: '05/02/2020',
    description: 'Classic database language.',
  },
];
