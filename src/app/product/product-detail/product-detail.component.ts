import {Component, inject, Input, input, OnInit} from '@angular/core';
import {Chaussure} from "../../interfaces/chaussure.interfaces";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements  OnInit{
  productId = -1
  @Input() set id(value: number){
    this.productId = value;
  }
  testId!: number;
  productService = inject(ProductService);
  chaussure!: Chaussure;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    /** we can retrieve i d by the  url like thattt too */
    // this.route.params.subscribe(params=>{
    //   this.testId = params['id'];
    //   console.log('Test ID:', this.testId);
    //   console.log(this.productId)
    //
    // })

    this.productService.getChaussureById(this.productId)?.then(chaussure =>{
      this.chaussure = chaussure!;
      console.log(this.chaussure)
    });
  }

}
