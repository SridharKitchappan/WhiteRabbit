import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, queryString: any) {
    // console.log(value.user);

    if (value.length === 0 || queryString === '' || queryString === undefined ) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      // console.log(item.user.username);
      if (item.user.username === queryString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
