import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-carlos',
  templateUrl: './input-carlos.component.html',
  styleUrls: ['./input-carlos.component.scss'],
})
export class InputCarlosComponent implements OnInit {

  @Input() carlos: string;
  @Output() resultado = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


  clicks(){
    this.resultado.emit({result: "perro presiono el boton"})
  }

}
