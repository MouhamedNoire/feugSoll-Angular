import {Component, Input, Output} from '@angular/core';
import{Chaussure} from "../interfaces/chaussure.interfaces";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({
    required:true
  }) chaussure!: Chaussure;
}

