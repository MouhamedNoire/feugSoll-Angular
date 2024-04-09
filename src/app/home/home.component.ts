import {Component, inject} from '@angular/core';
import {MatCard, MatCardHeader} from "@angular/material/card";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink, RouterModule} from "@angular/router";
import {Chaussure} from "../interfaces/chaussure.interfaces";
import {ProductComponent} from "../product/product.component";
import {ProductService} from "../product/product.service";
import {data} from "../data";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  chaussureService = inject(ProductService);
  chaussureList : Chaussure[] = [];

  constructor() {
    this.chaussureService.getChaussureData().then((chaussure)=>{
      this.chaussureList = chaussure;
    });
  }

}
