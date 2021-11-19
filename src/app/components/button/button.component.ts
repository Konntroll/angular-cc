import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

class Styles {
  [key: string]: any;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  styles: Styles = new Styles();
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.styles['background-color'] = this.color;
  }

  onClick(): void {
    this.btnClick.emit();
  }
  

}
