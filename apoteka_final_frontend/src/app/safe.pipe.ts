import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Pharmacy } from './common/pharmacy/pharmacy';


@Pipe({
  name: 'safe'
})

export class SafePipe implements PipeTransform {
  
  
  constructor(private sanitizer: DomSanitizer) {
    

   }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}