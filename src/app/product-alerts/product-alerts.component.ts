import { Component, OnInit } from '@angular/core';
// Redove 3, 4 sam ja dodao
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // Ova komponenta 'product-alerts' prima u sebe vrednost trenutnog svojstva 'product' iz roditeljske komponente 'product-list'
  // Zato smo u redu 3 importovali 'Input'...
  // ...i u redu 15 dodali dekorator ?komponente? @Input()
  @Input() product;
  // Ovaj 'product' iz reda 15 dolazi iz HTML-a roditeljske komponente 'product-list' // Pogledaj 'product-list.component.html' red 19
  @Output() notify = new EventEmitter();
  // Redove 4, 17 sam dodao .. kako bih komponenti 'product-alerts' omogucio da emituje EVENT kada se vrednost svojstva 'notify' promeni
  // Sad odlazimo u 'product-alerts.component.html' gde dugmetu dodajemo 'notify'

  constructor() { }

  ngOnInit() {
  }

}

// Komponenta 'product-alerts' prima (Input-uje) svojstvo nazvano 'product' iz roditeljske komponente 'product-list'
// Na osnovu ovog inputa, pokazuje ili sakriva "Notify Me" dugme, na osnovu vrednosti svojstva zvanog 'price' trenutnog 'product'-a
// Telefon Phone XL cena je veca od 700, pa se "Notify Me" dugme pojavljuje kod tog 'product'-a (proizvoda)