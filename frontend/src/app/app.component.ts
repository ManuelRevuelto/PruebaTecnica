import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogoService } from './catalogo/catalogo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  title = 'Laravel Angular 4 App';

  constructor(private catalogo: CatalogoService, private router: Router) {}

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.catalogo.create(this.form.value).subscribe(res => {
         console.log('Bien');
         this.router.navigateByUrl('catalogo/index');
    })
  }

}
