# Angular Material


## Add App
```
ng new <app-name> --minimal
```


## Add Component
```
ng generate component components/produt/product-create
```
Abreviado:
```
ng g c components/produt/product-create
```

O comando acima cria um component com três arquivos no diretório conforme a baixo:
```
app
  components
     product
        product-create
           product-add.component.css
           product-add.component.html
           product-add.component.ts           
```


Obs: A pasta '**pages**' também é composta por components. Estes são os componentes principais, onde os demais são carregados.



## New Service
```
ng generate service services/product
```
Abreviado:
```
ng g s services/product
```
Será criado um service no seguinte diretório:
```
app
  services
     product.service                  
```




--- 




## Variaveis de Ambiente

No diretório **src/environments** podemos definir informações de desenvolvimento e produção.

**Desenvolvimento:**
```
export const environment = {
  production: false,
  baseUrl: 'https://localhost:5001/api'
};
```

**Produção:**
```
export const environment = {
  production: true,
  baseUrl: 'https://vithor-api.herokuapp.com/api'
};
```

Obs: Para que o ambiente de desenvolvimento seja utilizado, executar o seguinte commando no publish da aplicação:
```
ng build --prod
```



---




## Service HTTP - CRUD

```
import { environment } from '../../environments/environment';

export class ProductService {
  baseUrl: string = `${environment.baseUrl}/product`

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } 

  create(product: Product): Observable<DataResult> {    
    return this.http.post<DataResult>(this.baseUrl, product)
  }

  getAll(): Observable<Product[]> {    
    return this.http.get<Product[]>(this.baseUrl)
  }

  getById(id: string): Observable<Product> {    
    return this.http.get<Product>(`${this.baseUrl}/${id}`)    
  }

  update(product: Product): Observable<DataResult> {    
    return this.http.put<DataResult>(`${this.baseUrl}/${product.id}`, product)    
  }

  delete(id: string): Observable<DataResult> {    
    return this.http.delete<DataResult>(`${this.baseUrl}/${id}`)
  }
}
```



---




## Dependency injection

Graças ao serviço de injeção de dependência do Angular podemos injetar ProductService no Construtor de qualquer Componente:
```
export class ProductAddComponent implements OnInit {
  products: Product[];
  
  constructor(productService: ProductService) { }

  ngOnInit(): void {
      this.productService.getAll().subscribe(data => {
         this.products = data
      })
  }
}
```



---




## Angular Schematics

Se trata de componentes completos, como por exemplo uma tabela já com paginação e e filtro incluídos.

Código para gerar:

```
ng generate @angular/material:table components/product/product-list
```



