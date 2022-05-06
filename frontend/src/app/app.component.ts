import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './catalogo/catalogo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  person: any;
  title = 'Laravel Angular 4 App';

  constructor(private catalogo: CatalogoService) {}

  ngOnInit() {
    
  }
}
