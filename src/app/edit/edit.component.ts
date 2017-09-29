import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input()  title;
  @Output() changeTitle = new EventEmitter<any>();
  heroInput: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  clear(){
    this.heroInput = "";
    this.changeTitle.emit("Empty!");
  }
 
}
