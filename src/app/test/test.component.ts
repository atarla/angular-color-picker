import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Anusha';
  @Input() public parentData;
  public color = 'red';
  WelcomeMessage = true;
  public u_name = '';
  public  siteUrl = window.location.hostname;
  public greeting = '';


  constructor() { }

  ngOnInit() {
  }
  logMessage(value) {
    console.log(value);
  }
  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome to my sample';
  }

  fillTeddy(teddy, color) {
    console.log(color);
    document.querySelector('object').contentDocument.querySelector('#Capa_1').setAttribute('fill', color);
  }



}
