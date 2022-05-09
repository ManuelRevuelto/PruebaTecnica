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

  id = 0;
  nombre = '';
  description = '';

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
        window.location.reload();
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => console.info('subido'),
    });
  }

  delete(id: number) {
    this.catalogo.delete(id).subscribe((res) => {
      this.catalogos = this.catalogos.filter((item) => item.id !== id);
      console.log('Articulo eliminado');
    });
  }

  edit(id: number) {
    const data = {
      nombre: this.catalogo.nombre,
      descripcion: this.catalogo.descripcion,
    };

    this.catalogo.update(id, data).subscribe({
      next: (v) => {
        this.submitted = true;
        console.log(v);
      },
      error: (e) => console.error(e),
      complete: () => console.info('Articulo editado'),
    });
  }

  get(catalogo: any) {
    this.id = catalogo.id;
    this.nombre = catalogo.nombre;
    this.description = catalogo.descripcion;
  }
}
