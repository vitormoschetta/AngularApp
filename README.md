# AngularApp

## New App 
```
ng new <app-name> --minimal
```

## New Component
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

Obs: Na pasta 'pages' também existem components. Acontece que colocamos em 'pages' os componentes principais de carregamento inicial.


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

Obs: O serviço implementa um decorador chamadado 'Injectable':

```
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor() { }
}
```

## Mock

Estamos utilizando um Service 'Fake' (product-fake.service.ts). 
Esse serviço fake não faz nenhuma conexão com API backend. Diferente do product.service.ts, que é o modelo padrão de acesso http.


###### Dependency injection
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

 
## HttpClient
Comunicação HTTP.
Importar o módulo. Arquivo: 'app.module.ts':
```
import { HttpClientModule } from '@angular/common/http'; // <--

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    HttpClientModule, // <-- 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

Injetar no CONSTRUTOR do SERVICE:
```
constructor(http: HttpClient) { }
```

#### Service HTTP CRUD
```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3001/products";

  constructor(private http: HttpClient) { }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

}
```

#### Component CRUD / Observable

###### Add:
```
export class ProductAddComponent {
  product: Product
  
  constructor(productService: ProductService, router: Router) { }

  createProduct(): void {
    this.productService.add(this.product).subscribe(() => {
      this.productService.ShowMessage('Produto Criado!')
    })
  }

}
```
###### Delete:
```
xport class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(productService: ProductService, router: Router, route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.getById(id)
  }

  getById(id: string) {
    this.productService.getById(id).subscribe(data => {
      this.product = data;
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.ShowMessage("Produto excluido!");
      this.router.navigate(["/products"]);
    })
  }
  
}
```

###### Update:
```
export class ProductUpdateComponent implements OnInit {
  product: Product

  constructor(productService: ProductService, router: Router, route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.getById(id)
  }

  getById(id: string) {
    this.productService.getById(id).subscribe(data => {
      this.product = data;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.ShowMessage('Produto Atualizado!')
      this.router.navigate(["/products"]);
    })
  }

}
```

###### Read:
```
export class ProductReadComponent implements OnInit {
  products: Product[];  

  constructor(productService: ProductService) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data
    })
  }

}
```

## FormGroup, FormBuilder and Validators
Importação dos pacotes necessários:
```
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

###### FormGroup
O formulário HTML precisa de uma identificação (FormGroup), declaramos no componente o seguinte:
```
public formCliente: FormGroup;
```

No HTML deve ficar assim:
```
<form [formGroup]="formCliente" (ngSubmit)="onSubmit()">
```

###### FormBuilder
Agora precisamos agrupar os campos do formulário ao formGroup:
```
constructor(private fb: FormBuilder) {
  this.formCliente = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      dataNascimento: [''],
    });
}
```

Esses são os nomes que devemos dar aos nossos campos no formulário HTML, exemplo:
```
<input type="text" formControlName="nome">
```

###### Validators
Configurar as validações para os campos que criamos. Vamos atualizar o código do FormBuilder feito anteriormente:
```
constructor(private fb: FormBuilder) {
  this.formCliente = this.fb.group({
    nome: ['', [
        Validators.minLength(3),
        Validators.required,
      ]],
      cpf: ['', [
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      dataNascimento: [],
  });
}
```

Para atribuir os valores de um formulário para um objeto:
```
public cliente: Cliente;

onSubmit() {
    this.cliente = this.formCliente.value;
  }
```


## Angular Schematics

Se trata de componentes completos, como por exemplo uma tabela já com paginação e e filtro incluídos.

Código para gerar:

```
ng generate @angular/material:table components/product/product-list
```



## Lazy Loading 
'Carregamento Lento'. 
"Para aplicativos grandes com muitas rotas, considere o carregamento lento - um padrão de design que carrega NgModules conforme necessário." Angular.io


