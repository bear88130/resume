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
  isSimplify: boolean;

  ngOnInit() {
    this.isSimplify = true;
  }

  emitLightBox(data: {imgNo: string, title: string}) {
    this.lightBoxImgNum = data.imgNo;
    this.lightBoxImg = 'img/skill-' + this.lightBoxImgNum + '.png';
    this.lightBoxTitle = data.title;
  }

  changeLightBox(num , title) {
    this.lightBoxImgNum = num;
    this.lightBoxImg = 'img/skill-' + this.lightBoxImgNum + '.png';
    this.lightBoxTitle = title;
  }

  forStreamline(isChecked) {
    this.isSimplify = isChecked ? false : true ;
  }
}
