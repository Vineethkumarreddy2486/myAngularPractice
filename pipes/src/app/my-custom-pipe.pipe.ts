import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: number,decimal:number=2) {
    return (value*100).toFixed(decimal) ;
  }

}
