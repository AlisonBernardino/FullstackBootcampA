import { Component, OnInit } from '@angular/core';
import { Language } from './Language';
import { LanguageService } from '../languages/Language.service';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languagesList.component.html',
})
export class LanguagesListComponent implements OnInit {
  languages: Language[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languages = this.languageService.getAllLanguages();
  }
}
