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
  isF2E: boolean;

  ngOnInit() {
    this.isF2E = true;
  }

  turnLightBox(num , title) {
    this.lightBoxImgNum = num;
    this.lightBoxImg = 'img/skill-' + this.lightBoxImgNum + '.png';
    this.lightBoxTitle = title;
  }

  forStreamline(isChecked) {
    this.isF2E = isChecked ? false : true ;
  }
}
