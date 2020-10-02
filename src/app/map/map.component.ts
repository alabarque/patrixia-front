import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  location1: string;
  location2: string;
  distance: number;
  costPerKm: number;
  cost: number;

  constructor() { }

  ngOnInit(): void {
  }

  findCoordinatesLocation1(){
    this.location1 = 'Segui 456';
  }

  findCoordinatesLocation2(){
    this.location2 = '20 de junio 1288';
  }

  calculateDistance(){
    // TODO add service
    this.distance = 50;
  }

  calculateCost(){
    this.calculateDistance();
    this.cost = this.distance * this.costPerKm;
  }

}
