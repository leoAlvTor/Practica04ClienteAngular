import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'block';
  }

  getBodegas(){
    console.log('Listar Bodegas!');
  }

}
