import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lightBoxImgNum: string;
  lightBoxImg: string;
  lightBoxTitle: string;

  ngOnInit() {
  }

  turnLightBox(num , title) {
    this.lightBoxImgNum = num;
    this.lightBoxImg = 'img/skill-' + this.lightBoxImgNum + '.png';
    this.lightBoxTitle = title;
  }
}
