import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() itemEvent = new EventEmitter();
  name: string;

  constructor() { }

  ngOnInit() {

  }

  onItemAdd() {
    if (this.name !== '') {
      this.itemEvent.emit(this.name);
      this.name = '';
    }
  }

}
