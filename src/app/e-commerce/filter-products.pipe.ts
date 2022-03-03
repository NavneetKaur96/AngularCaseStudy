import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Product.model';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: Product[],price:string): Product[] {
   
    let arr:Product[]=[]
    switch(price){
      case 'ALL':
       arr=value;
        break;
        case 'ONE_THOUSAND':
          arr=value.filter(e=>{
         return e.ProductPrice<=1000
        })
        break;
        case 'FIVE_THOUSAND':
          arr= value.filter(e=>{
            return  e.ProductPrice>1000 && e.ProductPrice<=5000
          })
          break;
          case 'TEN_THOUSAND':
            arr= value.filter(e=>{
              return  e.ProductPrice>5000 && e.ProductPrice<=10000
          })
          break;
          case 'TWENTY_THOUSAND':
            arr= value.filter(e=>{
              return  e.ProductPrice>10000 && e.ProductPrice<=20000
            })
            break;
            case 'OVER':
              arr= value.filter(e=>{
                return  e.ProductPrice>20000 
              })
              break;
              default:
                arr= value
    }
    return arr
  }

}
