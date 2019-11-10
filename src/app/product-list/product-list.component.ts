import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  // Ovo ispod smo dodali prilikom pisanja Output eventa child komponente 'product-alerts' kako bi kad dete emituje event, taj event uhvatili i obavestili korisnika

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  // Ostaje nam jos da update-ujemo 'product-list' komponentu da primi OUTPUT od child komponente zvane 'product-alerts'
  // Odlazimo u 'product-list.component.html'
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/