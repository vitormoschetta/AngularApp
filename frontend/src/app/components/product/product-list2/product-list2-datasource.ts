import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


export class ProductDataSource extends DataSource<Product>{
  data: Product[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private productService: ProductService) {
    super();    
    this.productService.getAll().subscribe(data => {
      this.data = data
    })  
  }


  connect(): Observable<Product[]> {    
    // Combine tudo o que afeta os dados renderizados em uma atualização.
    // fluxo para a tabela de dados consumir.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }


  // Chamado quando a tabela está sendo destruída.
  /* Use esta função para limpar quaisquer conexões abertas ou liberar 
  quaisquer recursos retidos que foram configurados durante a conexão. */
  disconnect() {}


  // Paginar os dados (lado do cliente). 
  /* Se você estiver usando paginação do lado do servidor, isso poderia
  ser substituído solicitando os dados apropriados do servidor. */   
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }


  // Classifique os dados (lado do cliente).
  /* Se você estiver usando classificação do lado do servidor, isso poderia  
  ser substituído solicitando os dados apropriados do servidor. */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }
}

/* Comparador de classificação simples para colunas de ID / Nome de exemplo 
(para classificação do lado do cliente). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
