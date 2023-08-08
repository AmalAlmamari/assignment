import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title='Home page of students';
inputvalue: string ='';
details='Wellcom';

onInputChange(event: any){
  this.inputvalue=event.target.value;
}
}
