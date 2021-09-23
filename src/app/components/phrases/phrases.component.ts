import { Component, OnInit } from '@angular/core';
import { commonAndComplements } from '../../config/factories';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.css']
})
export class PhrasesComponent implements OnInit {
  
  public commonAndComplements = commonAndComplements;

  constructor() { }

  ngOnInit(): void {
    //Guardamos el array por defecto en el localStorage.
    localStorage.setItem('phrases', JSON.stringify(commonAndComplements));
  }
}
