import { Component, OnInit } from '@angular/core';
import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  person: any;
  title = 'Laravel Angular 4 App';

  constructor(private service: PersonService) {}

  ngOnInit() {
    this.service.getPerson().subscribe((response) => {
      this.person = response;
    });
  }

  createPerson(input: HTMLInputElement) {
    let person = { title: input.value };
    input.value = '';

    this.person.create(person).subscribe((response: { id: any }) => {
      person['title'] = response.id;
      this.person.splice(0, 0, person);
    });
  }
}
