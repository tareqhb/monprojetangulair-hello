import { Component, OnInit } from '@angular/core';
import { Iproduit } from '../domain/iproduit';
import { ProduitsService } from '../service/produits.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: Iproduit[];
  constructor(private _service: ProduitsService) { }

  ngOnInit() {
   this._service.getProduits().subscribe(res => this.data = res,
  erreur => console.log('ATTENTION Il y a l\'erreur : ' + erreur));

    // this.data = this._service.getProduits();
  }

}
