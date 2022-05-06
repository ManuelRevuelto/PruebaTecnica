import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';
import { CatalogoService } from './catalogo/catalogo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  title = 'Laravel Angular 4 App';
  submitted = false;

  constructor(public catalogo: CatalogoService, private router: Router) {}

  ngOnInit(): void {}

  articulo: Catalogo = {
    nombre: '',
    descripcion: '',
  };

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
}
