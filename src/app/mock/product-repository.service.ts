import { Injectable } from '@angular/core';
import { DataResult } from '../models/dataResult';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
  list: Product[]

  constructor() {
    this.list = [
      { id: '1', name: 'product 01', price: 1.99 },
      { id: '2', name: 'product 02', price: 9.99 },
      { id: '3', name: 'product 03', price: 2.55 },
      { id: '4', name: 'product 04', price: 5.99 },
      { id: '5', name: 'product 05', price: 99.50 },
      { id: '6', name: 'product 06', price: 1000.50 },
    ];
  }

  add(product: Product): DataResult {
    let exist = this.exist(product.name)
    if (exist)
      return new DataResult(false, "Já existe Produto cadastrado com este Nome.", null)

    product.id = (this.list.length + 1).toString()
    this.list.push(product)
    return new DataResult(true, "Produto cadastrado com sucesso!", product)
  }

  update(product: Product): DataResult {
    let exist = this.existUpdate(product.name, product.id)
    if (exist)
      return new DataResult(false, "Já existe Produto cadastrado com este Nome.", null)

    let item = this.list.find(x => x.id == product.id)
    item.name = product.name
    item.price = product.price       
    return new DataResult(true, "Produto atualizado com sucesso!", product)
  }

  delete(id: string): DataResult { 
    for(var i=0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        this.list.splice(i,1)
        return new DataResult(true, "Produto excluído com sucesso!", null)
      }      
    }    
    return new DataResult(false, "Produto não encontrado..", null)
  }

  getAll(): Product[] {
    return this.orderByName(this.list)
  }

  getById(id: string): Product {
    return this.list.find(x => x.id == id)
  }  

  exist(name: string): boolean {
    var item = this.list.find(x => x.name == name)
    if (item == undefined)
      return false
    return true
  }

  existUpdate(name: string, id: string): boolean {
    var item = this.list.find(x => x.name == name && x.id != id)
    if (item == undefined)
      return false
    return true
  }

  orderByName(list: Product[]) {
    return list.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
  }
}
