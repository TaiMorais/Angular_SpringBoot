
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    switch(value){
      case 'Eletronicos': return 'settings_input_hdmi';
      case 'Conectores': return 'power';
      case 'Químicos': return 'sanitizer';
    }

    //return 'rour';
    return  'home';
  }
}
