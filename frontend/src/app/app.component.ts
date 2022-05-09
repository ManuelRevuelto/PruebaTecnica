import { Component, OnInit } from '@angular/core';

import { Catalogo } from './catalogo/catalogo';
import { CatalogoService } from './catalogo/catalogo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  catalogos: Catalogo[] = [];
  submitted = false;

  articulo: Catalogo = {
    id: 0,
    nombre: '',
    descripcion: '',
  };

  constructor(public catalogo: CatalogoService) {}

  ngOnInit(): void {
    this.catalogo.getAll().subscribe((res: Catalogo[]) => {
      this.catalogos = res;
      console.log(res);
      console.log(this.catalogos);
    });
  }

  submit() {
    const data = {
      nombre: this.catalogo.nombre,
      descripcion: this.catalogo.descripcion,
    };

    this.catalogo.create(data).subscribe({
      next: (v) => {
        this.submitted = true;
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => console.info('subido'),
    });
  }

  delete(id: number) {
    this.catalogo.delete(id).subscribe((res) => {
      this.catalogos = this.catalogos.filter((item) => item.id !== id);
      console.log('Person deleted successfully!');
    });
  }

  edit(id: number) {
    this.catalogo.update(id, this.catalogo).subscribe({
      next: (v) => {
        this.submitted = true;
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => console.info('subido'),
    });
  }
}
