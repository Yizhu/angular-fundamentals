import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroImageUrl = 'assets/images/hero.png';
  title = 'Tour of Heroes';
  edit = 0;
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  myHero = this.heroes[0];
  changeEdit(){
    this.edit++;
  }
  changeTitle(item){
    this.title = item;
  }
}
