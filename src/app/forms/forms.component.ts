import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public apisvc: ApiService) { }
  heroes = [];
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  ngOnInit() {
    this.apisvc.load()
      .toPromise()
      .then(values => {
        this.heroes = values;
      })
      .catch(err => { console.error('An error occurred', err); });
  }
  
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  save(){
    this.apisvc.save(this.heroes);
  }
}
