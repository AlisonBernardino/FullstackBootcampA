import { Component, OnInit } from '@angular/core';
import { Language } from './Language';
import { LanguageService } from '../languages/Language.service';

@Component({
  templateUrl: './languagesList.component.html',
})
export class LanguagesListComponent implements OnInit {
  filteredLanguages: Language[] = [];

  _languages: Language[] = [];

  _filterBy!: string;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.getAllLanguages();
  }

  getAllLanguages() {
    this.languageService.getAllLanguages().subscribe({
      next: (languages) => {
        this._languages = languages;
        this.filteredLanguages = this._languages;
      },
      error: (errorItem) => console.log(`Error! `, errorItem),
    });
  }

  deleteLanguageByID(languageID: number): void {
    this.languageService.deleteLanguageByID(languageID).subscribe({
      next: () => {
        console.log(`Language deleted successfully!`);
        this.getAllLanguages();
      },
      error: (errorItem) => console.log(`Error!`, errorItem),
    });
  }

  set filterItem(valueElement: string) {
    this._filterBy = valueElement;
    this.filteredLanguages = this._languages.filter(
      (codingLanguage: Language) =>
        codingLanguage.title
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filterItem() {
    return this._filterBy;
  }
}
