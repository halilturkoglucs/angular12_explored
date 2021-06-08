import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number, defaultStr: string): any {
    return value.length >= limit ? value.substr(0, 3) : defaultStr;
  }
}
