import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lightBoxImgNum: string | undefined;
  lightBoxImg: string| undefined;
  lightBoxTitle: string| undefined;
  isSimplify: boolean| undefined;

  ngOnInit() {
    this.isSimplify = true;
  }

  emitLightBox(data: {imgNo: string, title: string}) {
    this.lightBoxImgNum = data.imgNo;
    this.lightBoxImg = 'img/skill-' + this.lightBoxImgNum + '.png';
    this.lightBoxTitle = data.title;
  }

  changeLightBox(num: string , title: string) {
    this.lightBoxImgNum = num;
    this.lightBoxImg = 'img/skill-' + this.lightBoxImgNum + '.png';
    this.lightBoxTitle = title;
  }

  forStreamline(event: any) {
    this.isSimplify = event.checked ? false : true ;
  }
}
