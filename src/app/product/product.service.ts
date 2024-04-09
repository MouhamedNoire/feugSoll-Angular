import {Injectable} from "@angular/core";
import {Chaussure} from "../interfaces/chaussure.interfaces";
import {data} from "../data";

@Injectable({
  providedIn:'root'
})
export class ProductService{
  private chaussureData: Chaussure[] = data;

  constructor(){

  }

  getChaussureData(): Promise<Chaussure[]>{
    return new Promise((resolve)=>
    resolve(this.chaussureData))
  };

  getChaussureById(id:number): Promise<Chaussure | null> {
    return new Promise((resolve)=>{
      const chaussure   = this.chaussureData.find(chaussure=> chaussure.id == id);
      if (chaussure) {
        resolve(chaussure);
      }else{
        resolve(null)
      }

    })
  }
}
