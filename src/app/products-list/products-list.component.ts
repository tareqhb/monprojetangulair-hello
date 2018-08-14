import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: any[];
  constructor() { }

  ngOnInit() {
    this.data = [
      {'code': 'p100', 'titre': 'Cafe', 'prixUnitaire': 5.5},
      {'code': 'p200', 'titre': 'Thé', 'prixUnitaire': 4.5},
      {'code': 'p300', 'titre': 'Jus', 'prixUnitaire': 7.5},

    ];
  }

}
