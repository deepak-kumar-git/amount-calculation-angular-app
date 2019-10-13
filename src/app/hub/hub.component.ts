import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
private getInterestAmout : any;
private loadAmount : any;
  constructor() { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('loanAmount')));
    this.loadAmount = JSON.parse(localStorage.getItem('loanAmount'));
  }

  public getInterestRate(event){
    this.getInterestAmout = event;
    this.loadAmount = JSON.parse(localStorage.getItem('loanAmount'));
  }
}
