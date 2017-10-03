import { Component, EventEmitter, Input, Output, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges{
  @Input()  title;
  @Output() changeTitle = new EventEmitter<any>();
  heroInput: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  clear(){
    this.heroInput = "";
    this.changeTitle.emit("Empty!");
  }
 
}
