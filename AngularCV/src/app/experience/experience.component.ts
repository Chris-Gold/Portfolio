import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service"
import { SpecInterface } from "../spec-interface";
import { BatInterface } from "../bat-interface";
import { ComInterface } from "../com-interface";
import { error } from 'util';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers:[ApiService]
})
export class ExperienceComponent implements OnInit {

  specsArray: SpecInterface[];
  batsArray: BatInterface[];
  comsArray: ComInterface[];

  constructor(private apiService: ApiService) { }

  getSpec(): void {
    this.apiService.getSpec().
    subscribe(
      resultArray => this.specsArray =
      resultArray,
      error => console.log("Error :: " + error ))
  }
  getBat(): void {
    this.apiService.getBat().
    subscribe(
      resultArray => this.batsArray =
      resultArray,
      error => console.log("Error :: " + error ))
  }
  getCom(): void {
    this.apiService.getCom().
    subscribe(
      resultArray => this.comsArray =
      resultArray,
      error => console.log("Error :: " + error ))
  }

  ngOnInit(): void {
    this.getSpec();
    this.getBat();
    this.getCom();
  }

}
