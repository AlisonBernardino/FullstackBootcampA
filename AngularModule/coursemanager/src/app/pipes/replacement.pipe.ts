import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacement'
})

export class ReplacePipe implements PipeTransform {
  transform(element: string, character: string, replacementItem: string){
    return element.replace(character, replacementItem);
  }
}
