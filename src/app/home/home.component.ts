import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texts = ['Customer Satisfaction', 'Growing Businesses', 'Commercial Impact'];
  currentText = '';
  index = 0;

  constructor() {
    setInterval(() => {
      this.currentText = this.texts[this.index];
      this.index++;
      if (this.index >= this.texts.length) {
        this.index = 0;
      }
    }, 1500);
  }

  ngOnInit(): void {
  }

}
