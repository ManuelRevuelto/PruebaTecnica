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

  constructor(public catalogo: CatalogoService) {}

  ngOnInit(): void {
    this.catalogo.getAll().subscribe((res: Catalogo[]) => {
      this.catalogos = res;
      console.log(res);
      console.log(this.catalogos);
    });
  }

  // deletePerson(id){
  //   this.personService.delete(id).subscribe(res => {
  //        this.persons = this.persons.filter(item => item.id !== id);
  //        console.log('Person deleted successfully!');
  //   })
  // }
}
